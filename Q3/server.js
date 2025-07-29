const express = require('express');
const path = require('path');
const chatbot = require('./chatbot');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  const botReply = chatbot(userMessage);
  res.json({ reply: botReply });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
