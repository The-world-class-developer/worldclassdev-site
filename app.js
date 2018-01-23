const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;
const baseEndPoint = '/api/v1';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//all GET routes below here
app.get(`${baseEndPoint}/projects`, (req, res) => {
  res.send('GET PROJECTS');
});


//all POST routes below here
app.post(`${baseEndPoint}/projects`, (req, res) => {
  res.send('POST PROJECTS');
});

//all PATH routes below here
app.patch(`${baseEndPoint}/projects`, (req, res) => {
  res.send('PATH PROJECTS');
});

//all DELETE routes below here
app.delete(`${baseEndPoint}/projects`, (req, res) => {
  res.send('DELETE PROJECTS');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
