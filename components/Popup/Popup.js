import React from "react";
import styles from "./Popup.module.scss";
function Popup(props) {
  return (
    <div className={styles.popUpoverlay} onClick={props?.closePopupOnClickOutside}>
      <div className={styles.popUpholder}>
        <div className={styles.crossClose}>
          <div
            className={styles.closeHolder}
            onClick={props.handleClosePopUp}
          ></div>
        </div>
        <div className={""}>{props.children}</div>
      </div>
    </div>
  );
}

export default Popup;
