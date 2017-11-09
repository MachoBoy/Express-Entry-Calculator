const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(process.env.PORT || 3000);
