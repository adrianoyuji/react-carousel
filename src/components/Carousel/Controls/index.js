import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonsContainer: { position: "absolute", height: "100%", width: "100%" },
  leftButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    width: "2rem",
    left: "1%",
    bottom: "50%",
    cursor: "pointer",
    fontWeight: "bolder",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 999,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
  rightButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2rem",
    width: "2rem",
    right: "1%",
    bottom: "50%",
    cursor: "pointer",
    fontWeight: "bolder",
    fontSize: "1rem",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 999,
    "&:hover": {
      backgroundColor: "rgba(255,255,255,1)",
    },
  },
});

const Controls = ({
  onNext,
  onPrevious,
  currentIndex,
  displayQuantity,
  lastIndex,
}) => {
  const classes = useStyles();
  const rightChevron = ">";
  const leftChevron = "<";
  return (
    <div
      className={classes.buttonsContainer}
      style={{
        transform: `translateX(${(currentIndex * 100) / displayQuantity}%)`,
        transition: "transform",
        transitionDuration: "675ms",
        transitionTimingFunction: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      }}
    >
      {currentIndex !== 0 && (
        <div onClick={onPrevious} className={classes.leftButton}>
          {leftChevron}
        </div>
      )}

      {currentIndex < lastIndex - 1 && (
        <div onClick={onNext} className={classes.rightButton}>
          {rightChevron}
        </div>
      )}
    </div>
  );
};

export default Controls;
