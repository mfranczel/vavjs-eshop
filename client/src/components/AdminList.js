// Michal Franczel
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Row, Col, ListGroup, Button, UncontrolledCollapse, CardBody, Card
} from 'reactstrap';

function AdminList(props) {

    const [orders, setOrders] = useState([])
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        axios.get('/api/orders')
            .then(res => {
                setOrders(res.data)
            })
    })

    const setPaid = (id) => {
        axios.post('/api/orders/paid', {id: id})
        orders.find(o => o.orderID === id).state = "paid"
        setOrders(orders)
    }

    useEffect(() => {
        axios.get('/api/counter')
            .then(res => {
                setCounter(res.data.num)
            })
    }, [counter])

    return (
        <Card className="w-100  mb-5">
            <CardBody className="w-100">
                <h3 className="ml-4"> Ad click counter: {counter}</h3>
                <hr />
                <h3 className="ml-4"> Orders </h3>
                <hr />
                <ListGroup>
                    <Row xs="9" className="pr-3 pl-3">
                        <Col className="text-center"><p>First Name</p></Col>
                        <Col className="text-center"><p>Last Name</p></Col>
                        <Col className="text-center"><p>Street</p></Col>
                        <Col className="text-center"><p>City</p></Col>
                        <Col className="text-center"><p>Country</p></Col>
                        <Col className="text-center"><p>ZIP</p></Col>
                        <Col className="text-center"><p>State</p></Col>
                        <Col className="text-center"><p>Show items</p></Col>
                        <Col className="text-center"><p>Set as paid</p></Col>
                    </Row>

                    { 
                        orders.map(order => (
                            <Card key={order.orderID}>
                                <CardBody>
                                    <Row xs="9">
                                            <Col className="text-center"><p>{order.firstName}</p></Col>
                                            <Col className="text-center"><p>{order.lastName}</p></Col>
                                            <Col className="text-center"><p>{order.addrStreet}</p></Col>
                                            <Col className="text-center"><p>{order.addrCity}</p></Col>
                                            <Col className="text-center"><p>{order.addrCountry}</p></Col>
                                            <Col className="text-center"><p>{order.addrZIP}</p></Col>
                                            <Col className="text-center"><p>{order.state}</p></Col>
                                            <Col className="text-center"><Button id={"toggler" + order.orderID } size="sm">Show items</Button></Col>
                                            <Col className="text-center"><Button size="sm" disabled={order.state !== 'initiated'} onClick={() => setPaid(order.orderID)}>Set as Paid</Button></Col>
                                        <UncontrolledCollapse toggler={"#toggler" + order.orderID } className="w-100">
                                        <Card className="w-100">
                                            <CardBody className="w-100">
                                                <div>
                                                    <Row xs="5">
                                                        <Col className="text-center"><p>Title</p></Col>
                                                        <Col className="text-center"><p>Available</p></Col>
                                                        <Col className="text-center"><p>Price</p></Col>
                                                        <Col className="text-center"><p>Ordered num.</p></Col>
                                                        <Col className="text-center"><p>Overall price</p></Col>
                                                    </Row>  
                                                    {
                                                        order.products.map(product => (
                                                            <div key={product.productID}>
                                                                <Row xs="5">
                                                                    <Col className="text-center"><p>{product.title}</p></Col>
                                                                    <Col className="text-center"><p>{product.numAvailable}</p></Col>
                                                                    <Col className="text-center"><p>{product.price}</p></Col>
                                                                    <Col className="text-center"><p>{product.num}</p></Col>
                                                                    <Col className="text-center"><p>{product.num*product.price}</p></Col>
                                                                </Row>   
                                                                <hr />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </CardBody>
                                        </Card>
                                        </UncontrolledCollapse>
                                    </Row>
                                </CardBody>
                            </Card>
                            )
                        )             
                    }
                </ListGroup>
            </CardBody>
        </Card>
    )
}

export default AdminList