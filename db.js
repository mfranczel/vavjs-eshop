// Michal Franczel
var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'dev_eshop',
});
        
connection.connect((err) => {
    if(err){
        console.log('Failed to connect to database.');
        return;
    }
    console.log('Connection established');
});

module.exports = connection
