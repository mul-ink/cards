import React from 'react';
import Dialog from "./components/dialog/Dialog.jsx";
import CreditCard from "./components/creditCardForm/CreditCardForm";
import styles from './addCard.module.css';


export default function AddCard({ toggleDialog, dialogOpen, closeDialog }) {

    return (
    <>
      <button
        className={styles.addCard}
        onClick={toggleDialog}
      >
        Add Card
      </button>
      <Dialog
        open={dialogOpen}
        onRequestClose={closeDialog}
        closeOnOutsideClick
      >
        <div className={styles.addCardContent}>
          <h1>Add your card details</h1>
          <CreditCard />
        </div>
      </Dialog>
    </>
    );
}
