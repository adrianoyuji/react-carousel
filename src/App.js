import React from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from "react-jss";
import Carousel from "./components/Carousel";
import Header from "./components/Header";

const useStyles = createUseStyles({
  appContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    height: `100vh`,
    width: "100vw",
    backgroundColor: "#f5f5f5",
    fontFamily: "sans-serif",
  },
  teste: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    height: `100vh`,
    width: "100vw",
    backgroundColor: "#a5a5a5",
    fontFamily: "sans-serif",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContainer}>
      <Header />
      <Carousel displayQuantity={1} styles={{ height: "90vh", width: "100vw" }}>
        <img src="https://i.pinimg.com/originals/20/c4/ed/20c4ed904c96d955c7baed21e22d47e0.jpg" />
        <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
        <div className={classes.teste}>
          I am testing some stuff down<button>click me please</button> i will
          make this work, eventually
        </div>
        <img src="https://i.pinimg.com/originals/54/de/30/54de300e7be008b6a744ef623f64e454.jpg" />
        <img src="https://i.pinimg.com/originals/20/c4/ed/20c4ed904c96d955c7baed21e22d47e0.jpg" />
        <img src="https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg" />
        <img src="https://i.pinimg.com/originals/54/de/30/54de300e7be008b6a744ef623f64e454.jpg" />
      </Carousel>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
