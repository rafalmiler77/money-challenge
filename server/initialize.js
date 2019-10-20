const sqlite3 = require('sqlite3').verbose()
const constants = require('./constants')

let db = new sqlite3.Database(constants.DBSOURCE)

db.run(`CREATE TABLE senders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  amount integer, 
  email text UNIQUE, 
  senderName text, 
  CONSTRAINT email_unique UNIQUE (email)
  )`)

db.close();
