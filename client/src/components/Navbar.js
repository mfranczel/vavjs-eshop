// Michal Franczel
import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import CartPopover from './CartPopover'

function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isIconSpinning, setSpinning] = useState(false)
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="mb-5" color="light" light expand="md">
                <NavbarBrand href="/">ESHOP</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>
                            <FontAwesomeIcon id="showCart" onClick={() => setIsPopoverOpen(!isPopoverOpen)} icon={faShoppingCart} spin={isIconSpinning} onMouseOver={()=> {setSpinning(true)}} onMouseLeave={()=> {setSpinning(false)}}/>
                            <CartPopover key={props.cart} cart={props.cart} isOpen={isPopoverOpen} remove={props.remove}/>
                        </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar