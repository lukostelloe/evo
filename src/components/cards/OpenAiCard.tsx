import { useState } from 'react';
import { Button } from '../ui/button';

export default function OpenAiCard() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Hi! Ask me anything.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault?.();
    if (!input.trim() || loading) return;
    setLoading(true);
    setErr(null);
    const next = [...messages, { role: 'user' as const, content: input }];
    setMessages(next);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });

      if (!res.ok) {
        let fallback = `HTTP ${res.status}`;
        try {
          const text = await res.text();
          fallback = text || fallback;
        } catch {}
        throw new Error(fallback);
      }

      const data = await res.json();
      const reply = String(data.output ?? '').trim() || '(no response)';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (e: any) {
      const msg = e?.message ?? 'Request failed';
      if (msg.includes('429')) {
        setErr('Rate limit or quota exceeded. Please check billing or try later.');
      } else {
        setErr(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 border rounded max-w-lg w-full">
      <div className="mb-3 h-64 overflow-auto border rounded p-3 bg-white/50">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <strong>{m.role === 'user' ? 'You' : 'AI'}:</strong> <span>{m.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? 'Working…' : 'Type a message'}
          disabled={loading}
          className="flex-1 border px-3 py-2 rounded"
        />
        <Button type="submit" disabled={loading || !input.trim()} className="border px-3 py-2 rounded">
          {loading ? 'Sending…' : 'Send'}
        </Button>
      </form>
      {err && <p style={{ color: 'red' }} className="mt-2">{err}</p>}
    </div>
  );
}
