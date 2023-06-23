import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/marketplace', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'marketplace.html'));
});

app.get('/tools', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tools.html'));
});

app.get('/deployer', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'deployer.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/edit-profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'edit-profile.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
