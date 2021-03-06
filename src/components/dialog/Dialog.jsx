import React, { useEffect, useRef } from "react";

import { useDialogPolyfill } from "./useDialogPolyfill";
import styles from './dialog.module.css';

export default function Dialog({ closeOnOutsideClick, onRequestClose, open, ...props }) {
  const dialogRef = useRef();

  useDialogPolyfill(dialogRef);
  useDialogOpening(dialogRef, open);
  useDialogClosing(dialogRef, onRequestClose);

  function handleOutsideClick(event) {
    const dialogNode = dialogRef.current;
    if (closeOnOutsideClick && event.target === dialogNode) {
      onRequestClose();
    }
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClick={handleOutsideClick}>
      <div {...props} />
    </dialog>
  );
}


const useDialogOpening = (dialogRef, open) => {
  const lastActiveElement = useRef(null);
  const firstRender = useRef(true);
  useEffect(() => {
    // polyfill will throw an error since we are not using the `open` attribute
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const dialogNode = dialogRef.current;
      if (open) {
        lastActiveElement.current = document.activeElement;
        dialogNode.showModal();
      } else {
        dialogNode.close();
        lastActiveElement.current.focus();
      }
    }
  }, [open]);
};

const useDialogClosing = (dialogRef, onRequestClose) => {
  useEffect(() => {
    const dialogNode = dialogRef.current;
    const handleCancel = event => {
      event.preventDefault();
      onRequestClose();
    };
    dialogNode.addEventListener("cancel", handleCancel);
    return () => {
      dialogNode.removeEventListener("cancel", handleCancel);
    };
  }, [onRequestClose]);
};
