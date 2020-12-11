// Michal Franczel
const express = require('express')
const path = require('path')
const mysql = require('mysql');

const app = express()

app.use(express.json())

app.use('/api/products', require('./routes/api/products'))
app.use('/api/orders', require('./routes/api/orders'))
app.use('/api/counter', require('./routes/api/counter'))

app.use(express.static('client/public'))

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static( 'client/build' ));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
    });
  }

const port = process.env.port || 5000

app.listen(port, '0.0.0.0',() => console.log(`Server started on port ${port}`))