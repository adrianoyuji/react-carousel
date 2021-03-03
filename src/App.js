import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from "react-jss";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import FooterActions from "./components/FooterActions";

const useStyles = createUseStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f5f5f5",
    fontFamily: "sans-serif",
  },
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayQuantity, setDisplayQuantity] = useState(1);
  const [infinite, setInfinite] = useState(false);
  const [disableControls, setDisableControl] = useState(false);

  const handleChangeSlide = (event) => {
    setCurrentSlide(event.target.value);
  };
  const handleChangeDisplayQuantity = (event) => {
    setDisplayQuantity(event.target.value);
  };
  const handleChangeInfinite = (event) => {
    setInfinite(event.target.checked);
  };
  const handleChangeDisableControls = (event) => {
    setDisableControl(event.target.checked);
  };

  return (
    <main className={classes.layout}>
      <Header />
      <div className={classes.appContainer}>
        <Carousel
          displayQuantity={displayQuantity}
          currentPosition={currentSlide}
          disableControls={disableControls}
          infinite={infinite}
          styles={{ height: "60vh", width: "100vw" }}
        >
          <img src="https://i.pinimg.com/originals/20/c4/ed/20c4ed904c96d955c7baed21e22d47e0.jpg" />
          <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
          <img src="https://i.pinimg.com/originals/54/de/30/54de300e7be008b6a744ef623f64e454.jpg" />
          <img src="https://i.pinimg.com/originals/20/c4/ed/20c4ed904c96d955c7baed21e22d47e0.jpg" />
          <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
          <img src="https://i.pinimg.com/originals/54/de/30/54de300e7be008b6a744ef623f64e454.jpg" />
        </Carousel>
      </div>
      <FooterActions
        changeSlide={handleChangeSlide}
        changeDisplayQuantity={handleChangeDisplayQuantity}
        changeInfinite={handleChangeInfinite}
        changeDisableControls={handleChangeDisableControls}
        displayQuantity={displayQuantity}
        disableControls={disableControls}
        infinite={infinite}
      />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
