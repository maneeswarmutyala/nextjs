import React from "react";
import styles from "./loader.module.scss";
const Loader = (props) => {
  let loadingText = "Loading...";
  if (props.loadingText) {
    loadingText = props.loadingText;
  }

  return (
    <div
      className={[styles.sessionLoader, props.sessionLoaderStyle ?? ""].join(
        " "
      )}
      style={props.bodyStyle}
    >
      <div className={styles.loadingSignal} />
      <div className={styles.sessionLoaderText}>{loadingText}</div>
    </div>
  );
};

export default Loader;
