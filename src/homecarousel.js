import Carousel from "react-bootstrap/Carousel";

function Homecarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block" src="djan_bg1.svg" alt="BUILT TO LAST" />
        {/* <Carousel.Caption>
          <h1 className="display-1 text-right">BULT TO LAST</h1>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="djan_bg2.svg"
          alt="MAINTAINED FOR LIFE"
        />
        {/* <Carousel.Caption>
          <h1 className="display-1 text-left">MAINTAINED FOR LIFE</h1>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
export default Homecarousel;
