const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser');

const cors = require('cors')
const port = 5001

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/senders', (req, res, next) => {
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

app.post('/api/add', (req, res) => {
  console.log('add body', req.body)
  const { senderName, email, amount } = req.body;
  const insert = 'INSERT INTO senders (amount, email, senderName) VALUES (?,?,?)'
  const params = [amount, email, senderName]
  db.run(insert, params, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successfully added new transaction", this);
    const sql = "SELECT * FROM senders WHERE id = ?"
    const params = [this.lastID]
    db.all(sql, params, (err, newTransaction) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "data": newTransaction
      })
    });
  });
})

app.get('/', (req, res) => res.send('Money challenge ready!'))

app.listen(port, () => console.log(`Server listening on port ${port}!`))
