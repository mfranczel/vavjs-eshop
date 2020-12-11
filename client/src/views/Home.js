// Michal Franczel
import React, { useEffect, useState } from 'react';

import { Container } from 'reactstrap';
import NavBar from '../components/Navbar'
import ProductList from '../components/ProductList'

function Home(props) {

    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(props.cart)
    }, [props.cart])

    return (
        <div>
            <NavBar cart={cart} remove={props.remove}/>
            <Container>
                <ProductList addToCart={props.addToCart}/>
            </Container>
        </div>
    )
}

export default Home