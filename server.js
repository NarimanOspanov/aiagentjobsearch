const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const TELEGRAM_APPLY_URL = 'https://t.me/apply_jobs_bot?start=hire_human';

app.get('/remote', (req, res) => {
  res.redirect(302, TELEGRAM_APPLY_URL);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Screenly running on port ${PORT}`);
});
