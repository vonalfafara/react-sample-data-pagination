import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item, onSetImages}) => {
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img style={{height: '200px', objectFit: 'cover'}} variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary" onClick={() => onSetImages(item.images)}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Item