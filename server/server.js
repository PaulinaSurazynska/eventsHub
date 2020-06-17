const express = require('express');
const bodyParser = require('body-parser');
const connectdDB = require('./dbConnect');
const cors = require('cors');

const PORT = 3000;

// create instanse of express
const app = express();
connectdDB();
const api = require('./routes/api');

app.use(cors());

// specify body parser to handle json data
app.use(bodyParser.json());

app.use('/api', api);
app.get('/', (req, res) => {
  res.send('hello from the server');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
