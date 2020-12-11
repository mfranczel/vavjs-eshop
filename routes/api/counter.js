// Michal Franczel
const express = require('express')
const router = express.Router()
var db = require('../../db')


router.get('/', (req, res) => {
    db.query('SELECT * FROM counters WHERE counterID = 1', (err, resp) => {
        res.send(resp[0])
    })
})

router.post('/', (req, res) => {
    var counterID = req.body.counterID
    db.query('UPDATE counters SET num = num + 1 WHERE counterID = '+counterID)
})

module.exports = router