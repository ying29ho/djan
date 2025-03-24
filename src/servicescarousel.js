import Carousel from "react-bootstrap/Carousel";

function Servicescarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="djan_services1.svg" alt="Construction Works" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="djan_services2.svg"
          alt="Property Maintainence"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="djan_services3.svg" 
          alt="Sports Ground" />
          </Carousel.Item>
    </Carousel>
  );
}
export default Servicescarousel;
