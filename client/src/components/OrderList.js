// Michal Franczel
import React, { useState, useEffect } from 'react';

import {
    Row, Col, ListGroup, ListGroupItem, Input
} from 'reactstrap';

function OrderList(props) {

    const [cart, setCart] = useState([])
    const [value, setValue] = useState(0);

    useEffect(() => {
        setCart(props.cart)
    }, [props.cart])

    const onNumberChange = (e, product) => {
        var temp = cart
        var val = temp.find(el => el.productID === product)
        val.num = parseInt(e.target.value)
        props.setCart(temp)
        setValue(value => ++value)
    }

    return (
        <div>
                <ListGroup className="mb-3">
                        
                    {
                    cart.map(product => (
                        <tr key={product.productID}>
                            <ListGroupItem>
                                <Row xs="3">
                                    <Col className="text-left"><p>{product.title}</p></Col>
                                    <Col className="text-center">
                                        <Input
                                            type="number"
                                            id={"num" + product.productID}
                                            name="number"
                                            step="1"
                                            min={0} max={product.numAvailable}
                                            value={product.num}
                                            onChange={(e) => onNumberChange(e, product.productID)}
                                            />
                                    </Col>
                                    <Col className="text-right"><p>{product.price*product.num + " €"}</p></Col>
                                </Row>
                            </ListGroupItem>
                        </tr>
                        ))
                        }
                </ListGroup>
        </div>
    )
}

export default OrderList