import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.OPENAI_API_KEY) {
  console.error('❌ Missing OPENAI_API_KEY');
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    hasKey: Boolean(process.env.OPENAI_API_KEY),
    node: process.version,
  });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, messages } = req.body ?? {};
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OPENAI_API_KEY not set' });
    }
    if (!prompt && !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing prompt or messages' });
    }

    let input: any = undefined;
    if (Array.isArray(messages)) {
      const transcript = messages
        .map((m: any) => `${m.role ?? 'user'}: ${m.content ?? ''}`)
        .join('\n');
      input = transcript;
    } else {
      input = prompt;
    }

    const r = await openai.responses.create({
      model: 'gpt-4o-mini',
      input,
    });

    res.json({ output: r.output_text });
  } catch (e: any) {
    // super verbose logging to find the cause
    console.error('🔥 /api/chat error');
    console.error('message:', e?.message);
    console.error('name:', e?.name);
    console.error('status:', e?.status);
    console.error('data:', e?.response?.data);
    console.error('stack:', e?.stack);
    res.status(500).json({
      error: e?.message ?? 'Server error',
      status: e?.status ?? 500,
      data: e?.response?.data ?? null,
    });
  }
});

const PORT = process.env.PORT ?? 8787;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));


//comment
