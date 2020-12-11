// Michal Franczel
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody, Table, Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function CartPopover(props) {

    const [cart, setCart] = useState([])

    useEffect( () => {
        setCart(props.cart)
    }, [props.cart])
    
    return (
        <div>
            <UncontrolledPopover trigger="click" placement="top" target="showCart">
                {({ scheduleUpdate }) => (
                    <div>
                        <PopoverHeader>Shopping Cart</PopoverHeader>
                        <PopoverBody>
                            { cart.length > 0 ? <Container>
                                <Table borderless>
                                    <tbody>
                                        {
                                            cart.map(product => 
                                                (
                                                <tr>
                                                    <td className="pl-0"><p>{product.title}</p></td>
                                                    <td><p>{product.num}</p></td>
                                                    <td className="pr-0"><p>{product.price*product.num + "€"}</p></td>
                                                </tr>
                                                )
                                            )
                                        }
                                    </tbody>
                                </Table>
                                <hr />
                                <Button className="mb-3 align-items-center"><FontAwesomeIcon className="align-middle" id="removeButton" onClick={props.remove} icon={faTrash} /></Button>
                                <Link to="/order"><Button className="ml-auto float-right mb-3">Order</Button></Link>
                            </Container> : <p>Your cart is empty</p>}
                        </PopoverBody>
                    </div>
                )}
            </UncontrolledPopover>
        </div>
    )
}

export default CartPopover