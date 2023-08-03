import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price.toFixed(2)}</Card.Text>
                {productQuantity > 0 ? 
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6'>InCart: {productQuantity}</Form.Label>
                            <Col sm='6' className='p-1'>
                                <Button sm='6' onClick= {() => cart.addToCart(product.id)} className='mx-2'>+</Button>
                                <Button sm='6' onClick= {() => cart.removeFromCart(product.id)} className='mx-2'>-</Button>
                            </Col>
                        </Form>
                        <Button sm='6' variant='danger' onClick= {() => cart.deleteFromCart(product.id)} className='mx-2'>Remove Item</Button>
                    </> 
                    : 
                    <Button variant='primary' onClick={() => cart.addToCart(product.id)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard