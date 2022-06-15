import { useEffect, useState } from "react";
import styles from "./card.module.css";
function Card(props) {
  const { todoData } = props;
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <p>{todoData?.id}</p>
        <h3> {todoData?.title} </h3>
        <p>Status: {todoData?.completed ? "Done" : "To DO"} </p>
      </div>
    </div>
  );
}
export default Card;
