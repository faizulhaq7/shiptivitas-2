const Database = require('better-sqlite3');
const db = new Database('clients.db'); 

module.exports = db;
