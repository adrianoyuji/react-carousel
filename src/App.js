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
  regularComponent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#efefef",
    height: "100%",
    width: "100%",
    fontSize: "1.5rem",
  },
});

const App = () => {
  const classes = useStyles();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayQuantity, setDisplayQuantity] = useState(1);
  const [disableControls, setDisableControl] = useState(false);

  const handleChangeSlide = (event) => {
    setCurrentSlide(event.target.value);
  };
  const handleChangeDisplayQuantity = (event) => {
    setDisplayQuantity(event.target.value);
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
          styles={{ height: "60vh", width: "100vw" }}
        >
          <img src="https://wallpaperaccess.com/full/1564851.jpg" />
          <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
          <section className={classes.regularComponent}>
            <p>I am a regular HTML component!</p>
            <p>Send me a message on LinkedIn!</p>
            <a
              href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/"
              target="_blank"
            >
              Click here!
            </a>
          </section>
          <img src="https://external-preview.redd.it/2C7YvwbYus_XQx43TBtu8MLnRGxuNQsDCX2x6ZgSmrI.jpg?auto=webp&s=1f42964f2430b9e74f75befc9d7bc3a9871ffce5" />
          <img src="https://i.pinimg.com/originals/54/de/30/54de300e7be008b6a744ef623f64e454.jpg" />
        </Carousel>
      </div>
      <FooterActions
        changeSlide={handleChangeSlide}
        changeDisplayQuantity={handleChangeDisplayQuantity}
        changeDisableControls={handleChangeDisableControls}
        displayQuantity={displayQuantity}
        disableControls={disableControls}
      />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
