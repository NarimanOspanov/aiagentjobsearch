const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const TELEGRAM_BOT_BASE = 'https://t.me/apply_jobs_bot?start=';
const TELEGRAM_DEFAULT_START = 'hire_human_ref_instagram';

function telegramStartParam(ref) {
  const value = Array.isArray(ref) ? ref[0] : ref;
  if (typeof value !== 'string') return TELEGRAM_DEFAULT_START;
  const normalized = value.trim().toLowerCase();
  if (!normalized || !/^[a-z0-9_-]+$/.test(normalized)) return TELEGRAM_DEFAULT_START;
  return `hire_human_ref_${normalized}`;
}

app.get('/remote', (req, res) => {
  const start = telegramStartParam(req.query.ref);
  res.redirect(302, TELEGRAM_BOT_BASE + start);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Screenly running on port ${PORT}`);
});
