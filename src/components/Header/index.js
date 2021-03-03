import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    width: "100vw",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#111827",
    color: "#fff",
  },
  headerSection: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "0.5rem",
  },
  title: { textAlign: "left", fontSize: "2rem" },
  subTitle: { textAlign: "left", fontSize: "1rem" },
  links: {
    textAlign: "right",
    fontSize: "1rem",
    color: "#fff",
    fontWeight: "bold",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <section className={classes.headerSection}>
        <span className={classes.title}>REACT CAROUSEL</span>
        <span className={classes.subTitle}>
          Made by Adriano Yuji Sato de Vasconcelos as Junior PWA Developer Test
        </span>
      </section>
      <section className={classes.headerSection}>
        <a
          className={classes.links}
          href="https://github.com/adrianoyuji/react-carousel"
          target="_blank"
        >
          Check source on Github
        </a>
        <a
          className={classes.links}
          href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/"
          target="_blank"
        >
          Check my LinkedIn
        </a>
        <a
          className={classes.links}
          href="https://adrianoyuji.vercel.app/"
          target="_blank"
        >
          Check my Portfolio
        </a>
      </section>
    </header>
  );
};

export default Header;
