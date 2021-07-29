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
  const dialogControls = {dialogOpen, toggleDialog, closeDialog };
  return (
    <div className={styles.appLayout}>
      <CardList />
      <AddCard { ...dialogControls }/>
    </div>
  );
}
