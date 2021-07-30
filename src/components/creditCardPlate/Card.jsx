import React from 'react';
import styles from './card.module.css';
import VisaIcon from './VisaIcon';
import MCIcon from './MCIcon';

export default function CardPlate({ card }) {
    return (
    <div className={styles.cardContainer}>
        <div className={`${styles.cardPlate} ${styles.cardShadow}`}>
          <p className={`${styles.flexItem} ${styles.textTop}`}><Vendor card={card}/></p>
          <p className={`${styles.flexItem} ${styles.cardNumber}`}>{ card.number }</p>
          <p className={`${styles.flexItem} ${styles.cardHolder}`}>{ card.holder }</p>
        </div>
    </div>
    )
}

const Vendor = ({ card }) => {
  if (card?.vendor === 'VISA') return <VisaIcon />
  if (card?.vendor === 'MC') return <MCIcon />
  return card?.vendor;
}