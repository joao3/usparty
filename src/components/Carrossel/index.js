import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carrossel = () => {
  return (
    <Carousel showStatus={false}>
      <div>
        <img src={require("../../imgs/rafael.jpg")} alt="asds" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={require("../../imgs/rafael.jpg")} alt="asds" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={require("../../imgs/rafael.jpg")} alt="asds" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Carrossel;