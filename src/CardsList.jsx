import React, { useState } from "react";
import styles from "./app.module.css";
import CardPlate from "./components/creditCardPlate/Card.jsx";

export default function CardList() {
  return (
    <div className={styles.cardListLayout}>
      <CardPlate />
      <CardPlate />
      <CardPlate />
      <CardPlate />
    </div>
  );
}
