import { useState } from 'react';
import { Button } from '../ui/button';

type ChatRole = 'user' | 'assistant';
type ChatMessage = { role: ChatRole; content: string };

type OpenAiCardProps = {
  character?: string; // persona/system hint for the assistant
  greeting?: string; // first assistant message shown in the chat
  assistantName?: string; // label used for assistant bubbles
  profile?: Record<string, unknown>; // structured facts about Luke to send with each request
};

export default function OpenAiCard({
  character = 'friendly senior engineer mentor',
  greeting = 'Hi! Ask me anything.',
  assistantName = 'Luke',
  profile,
}: OpenAiCardProps) {
  const [messages, setMessages] = useState<Array<ChatMessage>>([
    { role: 'assistant', content: greeting },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault?.();
    if (!input.trim() || loading) return;
    setLoading(true);
    setErr(null);
    const next: ChatMessage[] = [...messages, { role: 'user', content: input }];
    setMessages(next);
    setInput('');
    try {
      // Prepend a non-visible persona hint only in the request payload
      const profileHint = profile ? ` (Profile: ${JSON.stringify(profile)})` : '';
      const payloadMessages: ChatMessage[] = [
        { role: 'assistant', content: `(Persona: ${character})${profileHint}` },
        ...next,
      ];
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payloadMessages }),
      });

      if (!res.ok) {
        let fallback = `HTTP ${res.status}`;
        try {
          const text = await res.text();
          fallback = text || fallback;
        } catch {
          /* ignore body read errors */
        }
        throw new Error(fallback);
      }

      const data = await res.json();
      const reply = String(data.output ?? '').trim() || '(no response)';
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch (err: unknown) {
      let msg = 'Request failed';
      if (err instanceof Error && err.message) {
        msg = err.message;
      } else if (typeof err === 'string') {
        msg = err;
      }
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
    <div className="p-4 rounded max-w-3xl w-full">
      <div className="mb-3 h-64 overflow-auto border rounded p-3 bg-white/50">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded px-3 py-2 shadow-sm ${
                m.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <div className="text-xs opacity-70 mb-1">
                {m.role === 'user' ? 'You' : assistantName}
              </div>
              <div>{m.content}</div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={loading ? 'Working…' : 'Ask Luke a question'}
          disabled={loading}
          className="flex-1 px-3 py-2 rounded"
        />
        <Button type="submit" disabled={loading || !input.trim()} className="border px-3 py-2 rounded">
          {loading ? 'Sending…' : 'Send'}
        </Button>
      </form>
      {err && <p style={{ color: 'red' }} className="mt-2">{err}</p>}
    </div>
  );
}
