/**
 * server.js — Muhammad Asyraf's Portfolio
 * Express static file server
 */
const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static assets
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all: send index.html for any unknown route (SPA-friendly)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚀  Portfolio running at http://localhost:${PORT}\n`);
});
