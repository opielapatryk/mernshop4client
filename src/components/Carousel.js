import Carousel from 'react-bootstrap/Carousel';
import pb10 from './images/3p b 10.jpg'
import a9d56610 from './images/a9d56610.jpg'
import adatm60ka3pr from './images/ad-atm60-ka3pr.jpg'
import bimuntap6 from './images/bim-unt-ap6x.jpg'
function AppCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pb10}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a9d56610}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={adatm60ka3pr}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bimuntap6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default AppCarousel;