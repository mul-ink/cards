import React from 'react';
import Dialog from "./components/dialog/Dialog.jsx";
import CreditCard from "./components/creditCardForm/CreditCardForm";


export default function AddCard({ toggleDialog, dialogOpen, closeDialog }) {

    return (
    <>
      <button
        onClick={toggleDialog}
      >
        Add Card
      </button>
      <Dialog
        open={dialogOpen}
        onRequestClose={closeDialog}
        closeOnOutsideClick
      >
        <CreditCard closeDialog={closeDialog} />
      </Dialog>
    </>
    );
}
