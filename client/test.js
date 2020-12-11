const assert = require('assert');
const axios = require('axios')

describe('end-to-end', () => {

    var url="localhost:5000"

    describe('check default database state', () => {
        it('Ushanka', () => {
            axios.get(url + "/api/products")
            .then(res => {
                assert.strictEqual(res.data[0].title, 'Ushanka');
            })
        });
        it('Kermit the frog', () => {
            axios.get(url + "/api/products")
            .then(res => {
                assert.strictEqual(res.data[1].title, 'Kermit the frog');
            })
        });
        it('Buzz Lightyear toy', () => {
            axios.get(url + "/api/products")
            .then(res => {
                assert.strictEqual(res.data[2].title, 'Buzz Lightyear toy');
            })
        });
    })

    describe('create order', () => {
        it('michal', () => {
            var userDetails = {
                firstName: "Michal",
                lastName: "Franczel",
                street: "Ahahaha",
                city: "Bratislava",
                country: "Slovakia",
                zipcode: 84104
            };

            var products = [{
                id: 3,
                num: 5
            },
            {
                id: 2,
                num: 3
            },
            {
                id: 1,
                num: 10
            }
            ];

            products = JSON.stringify(products)

            axios.post(url + "/api/orders", {
                userDetails: userDetails,
                products: products
            })
                .then(() => {
                    axios.get(url + "/api/orders")
                        .then(res => {
                            var order = res.data[0]
                            assert.strictEqual(order.firstName, 'Michal');
                            assert.strictEqual(order.products.length, 3);
                        })
                })
        })
    })

    describe('check counter', () => {
        it('click', () => {
            var count = -1
            axios.get(url + "/api/counter")
                .then((res) => {
                    count = res.data.num
                    axios.post(url + "/api/counter", {counterId: 1})
                        .then(() => {
                            axios.get(url + "/api/counter")
                                .then((res2) => {
                                    assert.strictEqual(count+1, res2.data.num);
                                })
                        })
                })
        })
    })
})