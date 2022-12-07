import "./style.css";
import { useState, useEffect } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Carrossel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrow = () => {
    const newIndex =
      currentIndex === 0 ? props.banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleRightArrow = () => {
    const newIndex =
      currentIndex === props.banners.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="Carrossel"
      style={{
        height: "100%",
        position: "relative",
      }}
    >
      <div
        className="left"
        onClick={handleLeftArrow}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "99",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all ease 0.5s",
        }}
      >
        <NavigateBeforeIcon className="arrow" style={{ fontSize: 50 }} />
      </div>

      <div
        className="right"
        onClick={handleRightArrow}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: "99",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all ease 0.5s",
        }}
      >
        <NavigateNextIcon className="arrow" style={{ fontSize: 50 }} />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "16pt",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: `url(${props.banners[currentIndex].imagem})`,
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {props.banners.map((slide, slideIndex) => {
          return slideIndex === currentIndex ? (
            <div
              onClick={() => goToSlide(slideIndex)}
              key={slideIndex}
              style={{
                color: "#820AD1",
                margin: "0 3px",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              ⬤
            </div>
          ) : (
            <div
              onClick={() => goToSlide(slideIndex)}
              key={slideIndex}
              style={{
                color: "#A9A9A9",
                margin: "0 3px",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              ⬤
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrossel;
