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
        <div
          style={{
            display: "grid",
            gridGap: "1em",
            justifyItems: "center",
            padding: "1em",
          }}
        >
          <CreditCard />
          <button
            id="close-dialog"
            style={{
              border: "1px solid hsl(205, 80%, 50%)",
              color: "hsl(205, 80%, 50%)",
            }}
            onClick={closeDialog}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
    );
}
