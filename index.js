const express = require('express')
const app = express()
const port = 3000
const jsonData = require('./pokemon.json')
const cors = require('cors');
require('dotenv').config();
const { query } = require('./services/db.js');

app.use(express.json());
app.use(cors());

app.get("/pokemon", (req, res) => {
    res.json(jsonData);
//   res.send('This is Pokemon');
});

app.get("/pokemon/:id", (req, res) => {
    // die variable id ist der requierte parameter
    const { id } = req.params;
    //find map:
    const poke = jsonData.find((poke) => {
        //jsonData is where I search for my info
      return poke.id == id;
    });
    if (!poke) return  res.status(404).json({ message: "NOT FOUND"});
    res.json(poke);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})