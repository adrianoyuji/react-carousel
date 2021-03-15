import React, { useState, useCallback, useRef, useEffect } from "react";
import Controls from "./Controls";
import SlideTracker from "./SlideTracker";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: ({ styles }) => ({
    display: "flex",
    flexDirection: "row",
    height: styles.height || "90vh",
    maxHeight: styles.maxHeight || "none",
    width: styles.width || "100vw",
    maxWidth: styles.maxWidth || "none",
    overflowX: "hidden",
    overflowY: "hidden",
    position: "relative",
  }),
  carouselItem: ({ displayQuantity }) => ({
    minHeight: "100%",
    minWidth: `${100 / displayQuantity}%`,
  }),
});

const Carousel = ({
  children = [],
  styles,
  displayQuantity = 1,
  currentPosition = 0,
  disableControls = false,
}) => {
  const classes = useStyles({ styles, displayQuantity });
  const [currentIndex, setCurrentIndex] = useState(currentPosition);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleReleaseEvent = (event) => {
      switch (event.type) {
        case "mouseup":
          handleScreenRelease({
            currentPosition: event.pageX,
            initialPosition,
            onTouchTimer,
          });
          carouselRef.current.removeEventListener("mousemove", handleMoveEvent);
          carouselRef.current.removeEventListener(
            "mouseup",
            handleReleaseEvent
          );
          break;
        case "touchend":
          handleScreenRelease({
            currentPosition: event.changedTouches.item(0).pageX,
            initialPosition,
            onTouchTimer,
          });
          carouselRef.current.removeEventListener("touchmove", handleMoveEvent);
          carouselRef.current.removeEventListener(
            "touchend",
            handleReleaseEvent
          );
          break;
        default:
          break;
      }

      onTouchTimer = null;
      initialPosition = null;
    };

    const handleMoveEvent = (event) => {
      switch (event.type) {
        case "mousemove":
          handleScreenScroll({ currentPosition: event.pageX, initialPosition });
          break;
        case "touchmove":
          handleScreenScroll({
            currentPosition: event.touches[0].pageX,
            initialPosition,
          });
          break;
        default:
          break;
      }
    };

    const handleDownEvent = (event) => {
      //prevent image/text dragging
      event.preventDefault();
      //register time of click/touch event
      onTouchTimer = performance.now();
      switch (event.type) {
        case "mousedown":
          initialPosition = event.pageX;
          carouselRef.current.addEventListener("mousemove", handleMoveEvent);
          carouselRef.current.addEventListener("mouseup", handleReleaseEvent);
          break;
        case "touchstart":
          initialPosition = event.changedTouches.item(0).pageX;
          carouselRef.current.addEventListener("touchmove", handleMoveEvent);
          carouselRef.current.addEventListener("touchend", handleReleaseEvent);
          break;
        default:
          break;
      }
    };
    let onTouchTimer = null;
    let initialPosition = null;

    // Bind the event listener
    carouselRef.current.addEventListener("mousedown", handleDownEvent);
    carouselRef.current.addEventListener("touchstart", handleDownEvent);
    return () => {
      // Unbind the event listener on clean up
      carouselRef.current.removeEventListener("mousedown", handleDownEvent);
      carouselRef.current.removeEventListener("touchstart", handleDownEvent);
    };
  }, [carouselRef, currentIndex]);

  useEffect(() => {
    setCurrentIndex(Number(currentPosition));
  }, [currentPosition]);

  useEffect(() => {
    //resposible for scrolling
    carouselRef.current.scroll({
      left: (currentIndex * carouselRef.current.offsetWidth) / displayQuantity,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const handleScreenScroll = useCallback(
    ({ currentPosition, initialPosition }) => {
      //this scrolls the slides, preventing inertial scrolling
      //tracks the user finger on scroll

      carouselRef.current.scroll(
        (currentPosition - initialPosition) * -1 +
          (currentIndex * carouselRef.current.offsetWidth) / displayQuantity,
        0
      );
    },
    [carouselRef, currentIndex]
  );

  const handleScreenRelease = useCallback(
    ({ currentPosition, onTouchTimer, initialPosition }) => {
      //this condition handles swiping to left or right
      //if the user swipes too fast nothing will happen,
      //but if the user swipes minimally fast it will swipe
      const timeDifference = performance.now() - onTouchTimer;
      if (timeDifference >= 50 && timeDifference <= 300) {
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
    [carouselRef, currentIndex]
  );

  const nextSlide = useCallback(() => {
    //scrols to next slide
    if (currentIndex < children.length - displayQuantity) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const previousSlide = useCallback(() => {
    //scrolls to previous slide
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const reCenterSlide = useCallback(() => {
    //re centers the slide if the user does not
    //scroll the slide enough to skip
    carouselRef.current.scroll({
      left: currentIndex * carouselRef.current.offsetWidth,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const scrollsToIndex = (index) => {
    //re centers the slide if the user does not
    //scroll the slide enough to skip
    setCurrentIndex(index);
  };

  return (
    <div
      className={`${classes.container} ${classes.stopScrolling}`}
      ref={carouselRef}
    >
      {children.map((child, index) => (
        <section key={index} className={classes.carouselItem}>
          {child}
        </section>
      ))}
      {window.innerWidth > 800 && !disableControls && (
        <Controls
          onNext={nextSlide}
          onPrevious={previousSlide}
          currentIndex={currentIndex}
          childrenLength={children.length}
          displayQuantity={displayQuantity}
        />
      )}
      <SlideTracker
        currentIndex={currentIndex}
        childrenLength={children.length}
        displayQuantity={displayQuantity}
        scrollsToIndex={scrollsToIndex}
      />
    </div>
  );
};

export default Carousel;
