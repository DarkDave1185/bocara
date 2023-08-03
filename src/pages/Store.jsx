import { productsArray } from '../productsStore'
import { Row, Col } from 'react-bootstrap'

import ProductCard from '../components/ProductCard'

function Store() {
  return (
    <>
        <h1 align='center' className='p-3'>Welcome to Bocara..</h1>
        <Row xs={1} md={2} lg={3} className='g-4'>
            {productsArray.map((product, id) => (
                <Col align='center' key={id}>
                    <ProductCard product={product}/>
                </Col>
            ))}
            
            
        </Row>
    </>
  )
}

export default Store