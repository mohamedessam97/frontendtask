import { Card } from 'react-bootstrap';

const ProductCard = (props) => {

    const { title, price, stock, thumbnail } = props
    
    return (
        <Card style={{ width: '18rem', height: '26rem' }}>
            <Card.Img variant="top" src={thumbnail} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Footer className='d-flex justify-content-between'>
                    <span>Price : ${price}</span>
                    <span>Stock : {stock}</span>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}
export default ProductCard;
