import React, { useState } from "react";
import Dialog from "./components/dialog/Dialog.jsx";
import styles from "./app.module.css";
import CreditCard from "./components/creditCardForm/CreditCardForm";
import CardList from "./CardsList.jsx";
import AddCard from './AddCard';


export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen((bool) => !bool);
  const closeDialog = () => setDialogOpen(false);
  return (
    <div className={styles.appLayout}>
      <CardList />
      <CreditCard />
      <AddCard toggleDialog={toggleDialog}/>
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
          <h1>Add your card details</h1>
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
    </div>
  );
}
