import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: ({ styles }) => ({
    display: `flex`,
    flexDirection: `row`,
    height: styles.height || "90vh",
    maxHeight: styles.maxHeight || "none",
    width: styles.width || "100vw",
    maxWidth: styles.maxWidth || "none",
    overflowX: "scroll",
    overflowY: "hidden",
  }),
  carouselItem: ({ styles, screenSlides }) => ({
    minHeight: "100%",
    minWidth: `${100 / screenSlides}%`,
    objectFit: styles.objectFit || "contain",
  }),
});

const Carousel = ({
  children,
  styles,
  infinite = false,
  screenSlides = 1,
  autoScrolling = false,
}) => {
  const classes = useStyles({ styles, screenSlides });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [onTouchTimer, setOnTouchtimer] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);

  const handleScreenTouch = (event) => {
    //saves the initial time on screen touch
    setOnTouchtimer(performance.now());
    //gets page X value on screen touch
    setInitialPosition(event.changedTouches.item(0).pageX);
  };

  const handleScreenRelease = (event) => {
    //gets page X value on screen release
    const currentPosition = event.changedTouches.item(0).pageX;

    //this condition handles swiping to left or right
    if (performance.now() - onTouchTimer <= 150) {
      if (initialPosition <= currentPosition) {
        console.log("prev");
      } else {
        console.log("next");
      }
    } else {
      //handles next or prev swiping if the scrolling goes
      //through at least 50% of the next/prev slide
      const carouselWidth = document.getElementById("carousel").offsetWidth;
      const swipeLenght = currentPosition - initialPosition;
      console.log(swipeLenght);
      if (swipeLenght > 0 && swipeLenght >= carouselWidth * 0.5) {
        console.log("prev");
      } else if (swipeLenght < 0 && swipeLenght * -1 >= carouselWidth * 0.5) {
        console.log("next");
      } else {
        console.log("returns to center");
      }
    }
  };
  return (
    <div className={classes.container} id="carousel">
      {children.map((child, index) => (
        <child.type
          {...child.props}
          key={index}
          className={`${classes.carouselItem} ${child.props.className}`}
          onTouchStart={handleScreenTouch}
          onTouchEnd={handleScreenRelease}
        />
      ))}
    </div>
  );
};

export default Carousel;
