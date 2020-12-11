// Michal Franczel
import React from 'react';

import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

function Product(props) {

    var product = props.product

    return (
        <div>
            <Card className="d-flex flex-fill">

                <CardBody>
                <CardTitle tag="h5">{product.title}</CardTitle>
                </CardBody>
                <img width="100%" src={product.pic} alt="Card image cap" />
                <CardBody>
                    <CardText>
                        <p>{product.descr}</p>
                        <p>Price: {product.price}</p>
                        <p>Available: {product.numAvailable}</p>
                    </CardText>
                    <Button onClick={() => props.addToCart(product)}>Add to cart</Button>
                </CardBody>

            </Card>

        </div>
    )
}

export default Product