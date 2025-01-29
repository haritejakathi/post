const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;


  if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields." });
  }

  res.status(201).json({ message: 'User registered successfully!' });
});

const port = 3000;
app.listen(port, () => {
  console.log(Server is listening on port ${port});
});
