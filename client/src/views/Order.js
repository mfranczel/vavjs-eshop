// Michal Franczel
import React, { useState, useEffect } from 'react';

import { Container, Button } from 'reactstrap';
import NavBar from '../components/Navbar'
import OrderList from '../components/OrderList'
import UserForm from '../components/UserForm'
import ThankYou from '../components/ThankYou'

import axios from 'axios';

function Order(props) {

    const [cart, setCart] = useState([])
    const [state, setState] = useState(1)
    const [isValid, setIsValid] = useState(true)
    const [userDetails, setUserDedails] = useState({
        firstName: '',
        lastName:'',
        street:'',
        city:'',
        country:'',
        zipcode:0,
    })

    useEffect(() => {
        setCart(props.cart)
    }, [props.cart])

    const submitOrder = () => {
        if (validateForm()) {
            var products = cart.map(product => ({
                id: product.productID,
                num: product.num
            }))

            axios.post('/api/orders', {
                userDetails: userDetails,
                products: products
            }).then(msg => {
                if (msg.data === 'Success') {
                    setState(3)
                }
            })
            props.remove()
        } else {
            setIsValid(false)
        }
    }

    const validateForm = () => {
        for (var key in userDetails) {
            if (!userDetails[key] || userDetails[key] == "" || userDetails[key] === 0){
                return false;
            } 
        }
        return true
    }

    return (
        <div>
            <NavBar cart={cart}/>
            <Container>
                { state === 1? (
                    <div>
                        <OrderList cart={cart} setCart={props.setCart}/>
                        <Button className="ml-auto float-right" onClick={() => setState(2)}>Next</Button> 
                    </div>
                    ): (state === 2 ? (
                    <div>
                        <UserForm userDetails={userDetails} valid={isValid} setUserDedails={(d) => setUserDedails(d)}/>
                        <Button className="ml-auto float-right" onClick={() => submitOrder()}>Next</Button>
                    </div>):(
                        <ThankYou />
                    ))
                }
            </Container>
        </div>
    )
}

export default Order