import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  title: { textAlign: "center", fontSize: "2rem" },
  subTitle: { textAlign: "center", fontSize: "1rem" },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <div className={classes.title}>REACT CAROUSEL</div>
      <div className={classes.subTitle}>
        Made by Adriano Yuji Sato de Vasconcelos as Junior PWA Developer Test
      </div>
    </header>
  );
};

export default Header;
