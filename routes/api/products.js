// Michal Franczel
const express = require('express')
const router = express.Router()
var db = require('../../db')


router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.send("Error")
        } else {
            res.send(rows)
        }
    })
})

module.exports = router