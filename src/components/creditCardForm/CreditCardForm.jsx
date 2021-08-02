import React, { useRef } from "react";
import styles from './creditCardForm.module.css';

export default function CreditCardForm({ closeDialog }) {
  const formRef = useRef();
  const onSubmit = (e) => {
    formRef.current.checkValidity();
    const isValid = formRef.current.reportValidity();
    e.preventDefault();
    if (isValid) {
      formRef.current.reset();
      closeDialog();
    }
  };
  const cardNameHolderRef = useRef();
  const cardNumberRef = useRef();
  const cardCodeRef = useRef();
  const cardExpirationRef = useRef();

  return (
    <form className={styles.creditCardForm} title="Add credit card" aria-label="Add credit card" ref={formRef} noValidate onSubmit={onSubmit}>
      <br/>
      <h1>Add your credit card details</h1>
      <label htmlFor="cc-name">Name in card</label>
      <input
        required
        ref={cardNameHolderRef}
        id="cc-name"
        name="cc-name"
        type="text"
        required
        minLength="2"
        placeholder="John Doe"
        autoComplete="cc-name"
      />
      <label htmlFor="cc-number">Card number</label>
      <input
        required
        ref={cardNumberRef}
        id="cc-number"
        name="cc-number"
        placeholder="0000 0000 0000 0000"
        type="tel"
        autoComplete="cc-number"
        pattern="[0-9]{13,16}"
      />
      <input
        required
        ref={cardExpirationRef}
        id="cc-exp"
        name="cc-exp"
        placeholder="00/00"
        type="tel"
        autoComplete="cc-exp"
        pattern="([0-9]{2}[/]?){2}" 
      />
      <label htmlFor="x_card_code">CVC (Security code)</label>
      <input
        required
        ref={cardCodeRef}
        id="x_card_code"
        name="x_card_code"
        placeholder="000"
        type="tel"
        autoComplete="x_card_code"
        pattern="[0-9]{3}"
      />
      <button onClick={onSubmit} type="submit" >Confirm</button>
    </form>
  );
}
