import React, { useState, useCallback, useRef, useEffect } from "react";
import Controls from "./Controls";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: ({ styles }) => ({
    display: `flex`,
    flexDirection: `row`,
    height: styles.height || "90vh",
    maxHeight: styles.maxHeight || "none",
    width: styles.width || "100vw",
    maxWidth: styles.maxWidth || "none",
    overflowX: "hidden",
    overflowY: "hidden",
    position: "relative",
  }),
  carouselItem: ({ styles, displayQuantity }) => ({
    minHeight: "100%",
    minWidth: `${100 / displayQuantity}%`,
    objectFit: styles.objectFit || "contain",
  }),
});

const Carousel = ({
  children = [],
  styles,
  infinite = false,
  displayQuantity = 1,
  currentPosition = 0,
  disableControls = false,
}) => {
  const classes = useStyles({ styles, displayQuantity });
  const [currentIndex, setCurrentIndex] = useState(currentPosition);
  const [onTouchTimer, setOnTouchtimer] = useState(0);
  const [initialPosition, setInitialPosition] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    setCurrentIndex(currentPosition);
  }, [currentPosition]);

  useEffect(() => {
    carouselRef.current.scroll({
      left: (currentIndex * carouselRef.current.offsetWidth) / displayQuantity,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const handleScreenTouch = useCallback(
    (event) => {
      //saves the initial time on screen touch
      setOnTouchtimer(performance.now());
      //gets page X value on screen touch
      setInitialPosition(event.changedTouches.item(0).pageX);
    },
    [onTouchTimer, initialPosition]
  );

  const handleScreenScroll = useCallback(
    (event) => {
      //this scrolls the slides, preventing inertial scrolling
      //tracks the user finger on scroll
      carouselRef.current.scroll(
        (event.touches[0].pageX - initialPosition) * -1 +
          (currentIndex * carouselRef.current.offsetWidth) / displayQuantity,
        0
      );
    },
    [initialPosition, carouselRef]
  );

  const handleScreenRelease = useCallback(
    (event) => {
      //gets page X value on screen release
      const currentPosition = event.changedTouches.item(0).pageX;

      //this condition handles swiping to left or right
      //if the user swipes fast it will activate the sliding
      if (performance.now() - onTouchTimer <= 300) {
        if (initialPosition <= currentPosition) {
          previousSlide();
        } else {
          nextSlide();
        }
      } else {
        //the next condition is triggered when the user swipes slowly
        //handles next or prev swiping if the scrolling goes
        //through at least 50% of the next/prev slide
        const carouselWidth = carouselRef.current.offsetWidth / displayQuantity;
        const swipeLenght = currentPosition - initialPosition;
        if (swipeLenght > 0 && swipeLenght >= carouselWidth * 0.5) {
          previousSlide();
        } else if (swipeLenght < 0 && swipeLenght * -1 >= carouselWidth * 0.5) {
          nextSlide();
        } else {
          reCenterSlide();
        }
      }
    },
    [onTouchTimer, initialPosition]
  );

  const nextSlide = () => {
    //scrols to next slide
    if (currentIndex < children.length - displayQuantity) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousSlide = () => {
    //scrolls to previous slide
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const reCenterSlide = () => {
    //re centers the slide if the user does not
    //scroll the slide enough to skip
    carouselRef.current.scroll({
      left: currentIndex * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${classes.container} ${classes.stopScrolling}`}
      ref={carouselRef}
    >
      {children.map((child, index) => (
        <child.type
          {...child.props}
          key={index}
          className={`${classes.carouselItem} ${child.props.className} `}
          onTouchStart={handleScreenTouch}
          onTouchMove={handleScreenScroll}
          onTouchEnd={handleScreenRelease}
        />
      ))}
      {window.innerWidth > 800 && !disableControls && (
        <Controls
          onNext={nextSlide}
          onPrevious={previousSlide}
          currentIndex={currentIndex}
          lastIndex={children.length}
          displayQuantity={displayQuantity}
        />
      )}
    </div>
  );
};

export default Carousel;
