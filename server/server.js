const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://app-name.vercel.app'] 
    : ['http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Generate password function
const generatePassword = (length, options) => {
  let chars = '';
  if (options.letters) chars += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (options.numbers) chars += '0123456789';
  if (options.symbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};

app.get('/', (req, res) => {
  res.json({ message: 'Password Generator API is running!' });
});

// API route
app.post('/api/generate', (req, res) => {
  const { length, letters, numbers, symbols } = req.body;
  
  if (length < 4 || length > 50) {
    return res.status(400).json({ error: 'Length must be between 4-50' });
  }
  
  if (!letters && !numbers && !symbols) {
    return res.status(400).json({ error: 'Select at least one option' });
  }
  
  const password = generatePassword(length, { letters, numbers, symbols });
  res.json({ password });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});