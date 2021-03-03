import React from "react";
import ReactDOM from "react-dom";
import { createUseStyles } from "react-jss";
import Carousel from "./components/Carousel";
import Header from "./components/Header";

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

  return (
    <main className={classes.layout}>
      <Header />
      <div className={classes.appContainer}>
        <Carousel
          displayQuantity={1}
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
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
