import React, { useState } from "react";
import Dialog from "./components/dialog/Dialog.jsx";
import styles from "./app.module.css";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggleDialog = () => setDialogOpen((bool) => !bool);
  const closeDialog = () => setDialogOpen(false);
  return (
    <div className={styles.appLayout}>
      <button
        style={{
          background: "hsl(205, 80%, 50%)",
          color: "hsl(0, 0%, 100%)"
        }}
        onClick={toggleDialog}
      >
        Open Dialog
      </button>
      <Dialog open={dialogOpen} onRequestClose={closeDialog} closeOnOutsideClick>
        <div
          style={{
            display: "grid",
            gridGap: "1em",
            justifyItems: "center",
            padding: "1em"
          }}
        >
          <h1>Hello Dialog</h1>
          <input />
          <button
            style={{
              border: "1px solid hsl(205, 80%, 50%)",
              color: "hsl(205, 80%, 50%)"
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
