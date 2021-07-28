import React from 'react';
import styles from './card.module.css';


export default function CardPlate({ card }) {
    return (
    <div className={styles.cardContainer}>
        <div className={`${styles.cardPlate} ${styles.cardShadow}`}>
          <p className={`${styles.flexItem} ${styles.textTop}`}>{ card.vendor }</p>
  
          <p className={`${styles.flexItem} ${styles.cardNumber}`}>{ card.number }</p>
          <p className={`${styles.flexItem} ${styles.cardHolder}`}>{ card.holder }</p>
        </div>
    </div>
    )
}