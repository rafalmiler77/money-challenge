const sqlite3 = require('sqlite3').verbose()
const constants = require('./constants')

let db = new sqlite3.Database(constants.DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  }
  const insert = 'INSERT INTO senders (amount, email, senderName) VALUES (?,?,?)'
  db.run(insert, [20, "admina@example.com", "John"])
  db.run(insert, [100, "usera@example.com", "Malcolm"])
})
db.close();