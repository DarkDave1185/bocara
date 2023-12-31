import React from 'react'
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext'

import CartProduct from './CartProduct';

function NavbarComponent() {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
    <>
        <Navbar expand='sm'>
            <Navbar.Brand href="/">Bocara Storefront</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productsCount > 0 ?
                    <>
                        <p>Items in cart:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                        <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                        <Button variant='success' /* onClick={checkOut} */>Purchase Items!</Button>
                    </>
                :
                    <h1>No items in cart!</h1>
                }
            </Modal.Body>
        </Modal>
    </>
    )
}

export default NavbarComponent