import Carousel from 'react-bootstrap/Carousel';

const Slideshow = ({images}) => {
  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              style={{height: "400px", objectFit: "cover"}}
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Slideshow