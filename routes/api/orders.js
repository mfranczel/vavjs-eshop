// Michal Franczel
const express = require('express')
const router = express.Router()
var db = require('../../db')
var async = require("async");


router.post('/paid', (req, res) => {
    var id = req.body.id
    db.query('UPDATE orders SET state="paid" WHERE orderID=' + id)
    res.send('Success')
})

router.get('/', (req, resp) => {

    db.query('SELECT * FROM orders JOIN customers ON orders.customerID = customers.customerID', (err, result) => {
        var res = []
        
        async.each(result, function (element, callback1) {
            var products = JSON.parse(element.products)
            var expandedProducts = []

            async.each(products, function (product, callback2)  {
                db.query('SELECT * FROM products WHERE productID = ' + product.id, (err, res) => {
                    expandedProducts.push({
                        productID: res[0].productID,
                        title: res[0].title,
                        pic: res[0].pic,
                        descr: res[0].descr,
                        price: res[0].price,
                        numAvailable: res[0].numAvailable,
                        num: product.num
                    })
                    callback2()
                })
            }, function () {
                res.push({
                    orderID: element.orderID,
                    products: expandedProducts,
                    customerID: element.customerID,
                    state: element.state,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    addrStreet: element.addrStreet,
                    addrCity: element.addrCity,
                    addrCountry: element.addrCountry,
                    addrZIP: element.addrZIP
                })
                callback1()
            })

        }, function() {
            resp.send(res)
            return
        });
    })
})

router.post('/', (req, res) => {
    
    var userDetails = req.body.userDetails
    var products = JSON.stringify(req.body.products)
    var insertID = -1

    var userVals = [
        userDetails.firstName,
        userDetails.lastName,
        userDetails.street,
        userDetails.city,
        userDetails.country,
        userDetails.zipcode
    ]

    db.query('INSERT INTO customers (firstName, lastName, addrStreet, addrCity, addrCountry, addrZIP) VALUES (?,?,?,?,?,?)', userVals, (err, result, fields) => {
        if (err) {
            console.log('could not insert user info')
            res.send('Error')
            return
        } else {
            insertID = result.insertId
            console.log('successufuly inserted user info ' + result.insertId)
            var orderVals = [
                products,
                insertID,
                'initiated'
            ]
        
            db.query('INSERT INTO orders (products, customerID, state) VALUES (?, ?, ?)', orderVals, (err) => {
                if (err) {
                    console.log(err)
                    res.send('Error')
                    return
                } else {
                    console.log('order info inserted successfuly')
                }
            })
        } 

    })

    res.send('Success')
})

module.exports = router