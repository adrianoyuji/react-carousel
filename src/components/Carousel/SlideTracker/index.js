import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  tracker: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
    pointerEvents: "none",
  },
  trackBall: {
    position: "relative",
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    height: "1rem",
    width: "1rem",
    borderWidth: "1",
    borderColor: "rgba(0,0,0,0.8)",
    border: "solid",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 999,
  },
  trackBallSelected: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
});

const SlideTracker = ({ currentIndex, childrenLength, displayQuantity }) => {
  const classes = useStyles();
  const [trackBalls, setTrackBalls] = useState(() => {
    let array = [];
    for (let i = 0; i <= childrenLength - displayQuantity; i++) {
      array = [...array, i];
    }
    return array;
  });

  useEffect(() => {
    let array = [];
    for (let i = 0; i <= childrenLength - displayQuantity; i++) {
      array = [...array, i];
    }
    setTrackBalls(array);
  }, [displayQuantity]);

  return (
    <div
      className={classes.tracker}
      style={{
        transform: `translateX(${(currentIndex * 100) / displayQuantity}%)`,
        transition: "transform",
        transitionDuration: "675ms",
        transitionTimingFunction: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      }}
    >
      {trackBalls.map((ball) => (
        <span
          key={ball}
          className={`${classes.trackBall} ${
            currentIndex === ball && classes.trackBallSelected
          }`}
        />
      ))}
    </div>
  );
};

export default SlideTracker;
