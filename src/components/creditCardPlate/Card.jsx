import React from 'react';
import styles from './card.module.css';


export default function CardPlate() {
    return (
        <div className={styles.cardContainer}>
        <div className={`${styles.cardPlate} ${styles.cardShadow}`}>
          <p className={`${styles.flexItem} ${styles.textTop}`}>VISA</p>
  
          <p className={`${styles.flexItem} ${styles.cardNumber}`}>3124 **** 4356 1893</p>
          <p className={`${styles.flexItem} ${styles.cardHolder}`}>Mr James Bond</p>
        </div>
      </div>
    )
}