import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    width: "100vw",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#111827",
    color: "#fff",
  },
  controlsSection: {
    display: "flex",
    justifyContent: "center",
    padding: "0.5rem",
  },
  footerMessage: { textAlign: "center" },
  inputLabel: { textAlign: "center", marginRight: "0.5rem" },
  inputText: { width: "33%", borderRadius: 4 },
});

const FooterActions = ({
  changeSlide,
  changeDisplayQuantity,
  changeDisableControls,
  displayQuantity,
  displayControls,
}) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <section className={classes.controlsSection}>
        <label className={classes.inputLabel}>
          Scroll to Slide:
          <input
            min={0}
            className={classes.inputText}
            type="number"
            onChange={changeSlide}
          />
        </label>
        <label className={classes.inputLabel}>
          Number of slides to display:
          <input
            min={1}
            className={classes.inputText}
            type="number"
            value={displayQuantity}
            onChange={changeDisplayQuantity}
          />
        </label>
        <label className={classes.inputLabel}>
          Disable controls (Desktop):
          <input
            type="checkbox"
            onChange={changeDisableControls}
            defaultChecked={displayControls}
          />
        </label>
      </section>
      <section className={classes.footerMessage}>
        Made with ❤ by Adriano Vasconcelos
      </section>
    </footer>
  );
};

export default FooterActions;
