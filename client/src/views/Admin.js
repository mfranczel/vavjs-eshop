// Michal Franczel
import React, { useEffect, useState } from 'react';

import { Container } from 'reactstrap';
import NavBar from '../components/Navbar'
import AdminList from '../components/AdminList'
import axios from 'axios'

function Admin() {

    const [cart, setCart] = useState([])
    const [counter, setCounter] = useState(0)

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    useEffect(() => {
        axios.get('/api/counter')
            .then(res => {
                setCounter(res.data.num)
            })
    }, [counter])


    return (
        <div>
            <NavBar cart={cart}/>
            <Container>
                <AdminList />
            </Container>
        </div>
    )
}

export default Admin