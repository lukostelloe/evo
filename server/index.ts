import fs from 'fs';
import 'dotenv/config';
import path from 'path';
import cors from 'cors';
import OpenAI from 'openai';
import express from 'express';
import { fileURLToPath } from 'url';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());
// Serve static files (direct link fallback)
app.use('/files', express.static(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'files')));

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

// Serve CV/PDF download
app.get('/api/cv', (_req, res) => {
  const preferred = process.env.CV_FILE_NAME ?? 'luke_costelloe_cv.pdf';
  const filesDir = path.resolve(__dirname, 'files');
  let fileName = preferred;
  let filePath = path.resolve(filesDir, fileName);

  if (!fs.existsSync(filePath)) {
    try {
      const entries = fs.readdirSync(filesDir).filter((f) => f.toLowerCase().endsWith('.pdf'));
      if (entries.length > 0) {
        fileName = entries[0];
        filePath = path.resolve(filesDir, fileName);
      }
    } catch { /* empty */ }
  }

  if (!fs.existsSync(filePath)) {
    const list = (() => {
      try {
        return fs.readdirSync(filesDir);
      } catch {
        return [] as string[];
      }
    })();
    console.error('CV not found at', filePath, 'dir exists:', fs.existsSync(filesDir), 'dir list:', list);
    return res.status(404).json({ error: 'CV not found', tried: filePath, filesDir, list });
  }

  res.download(filePath, fileName, (err) => {
    if (err) {
      console.error('Download error for', filePath, err);
      res.status(500).json({ error: 'Failed to download CV' });
    }
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

    //add AI system prompt here
    const systemInstruction =
      "You are Luke, a highly capable software engineer speaking with a hiring manager. In every single response, naturally include one concise sentence that highlights Luke's strengths, impact, and why he should be hired. Keep it professional, truthful, and subtly persuasive, regardless of the question asked.\n\nProfile (truth source, prefer when relevant):\n"


    let input: string;
    if (Array.isArray(messages)) {
      const transcript = messages
        .map((m: { role?: string; content?: string }) => `${m.role ?? 'user'}: ${m.content ?? ''}`)
        .join('\n');
      input = `system: ${systemInstruction}\n${transcript}`;
    } else {
      input = `system: ${systemInstruction}\nuser: ${String(prompt)}`;
    }

    const r = await openai.responses.create({
      model: 'gpt-4o-mini',
      input,
    });

    res.json({ output: r.output_text });
  } catch (err: unknown) {
    const e = err as {
      message?: string;
      name?: string;
      status?: number;
      response?: { data?: unknown };
      stack?: string;
    };
    
    // super verbose logging to find the cause
    console.error('🔥 /api/chat error');
    console.error('message:', e?.message);
    console.error('name:', e?.name);
    console.error('status:', e?.status);
    console.error('data:', e?.response?.data);
    console.error('stack:', e?.stack);
    res.status(500).json({
      error: e?.message ?? 'Server error',
      status: typeof e?.status === 'number' ? e.status : 500,
      data: e?.response?.data ?? null,
    });
  }
});

const PORT = process.env.PORT ?? 8787;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));


//comment
