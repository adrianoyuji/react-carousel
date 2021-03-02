import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: ({ props }) => ({
    display: `flex`,
    flexDirection: `row`,
    height: props.height || "90vh",
    width: props.width || "80vw",
    overflowX: "scroll",
    overflowY: "hidden",
  }),
  carouselItem: ({ props }) => ({
    height: props.height || "90vh",
    minWidth: props.width || "80vw",
    objectFit: "cover",
  }),
});

const Carousel = ({ children, styles }) => {
  const classes = useStyles({ props: styles });
  return (
    <div className={classes.container}>
      {children.map((child, index) => (
        <child.type
          {...child.props}
          key={index}
          className={classes.carouselItem}
        />
      ))}
    </div>
  );
};

export default Carousel;
