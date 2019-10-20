const express = require('express')
const app = express()
const port = 5000
const db = require("./db")

app.get("/senders", (req, res, next) => {
  console.log('database', db)
  var sql = "select * from senders"
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });
});

app.get('/', (req, res) => res.send('Money challenge ready!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
