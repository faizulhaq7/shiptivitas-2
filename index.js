const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./clients.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

app.get('/clients', (req, res) => {
  const sql = 'SELECT * FROM clients';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching clients:', err.message);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
