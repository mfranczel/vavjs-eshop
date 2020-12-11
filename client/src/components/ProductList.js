// Michal Franczel
import React, { useState, useEffect } from 'react';
import Product from './Product'
import axios from 'axios';

import {
   Col, Container, CardGroup
} from 'reactstrap';

function ProductList(props) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/products')
          .then(res => {
            setProducts(res.data)
          })
    }, [])

    return (
        <div>
            <Container className="">
                <CardGroup>
                    {products.map((product) => (
                        <Col key={product.productID} md="4">
                            <Product key={product.productID} addToCart={props.addToCart} product={product}/>
                        </Col>
                    ))}
                </CardGroup>
            </Container>
        </div>
    )
}

export default ProductList