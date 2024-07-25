// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new comment
app.post('/comments', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'Your comment has been added!'
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
