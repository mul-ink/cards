import React, { useRef } from "react";
import CardNameHolder from './nameHolder/NameHolder'
import CardCode from "./code/Code";
import CardExpiration from "./expiration/Expiration";
import CardNumber from "./number/CardNumber";
import styles from './creditCardForm.module.css';

export default function CreditCardForm() {
  const formRef = useRef();
  const onSubmit = (e) => {
    console.log(formRef.current.reportValidity())
  };
  return (
    <form className={styles.creditCardForm} title="Add credit card" aria-label="Add credit card" ref={formRef} noValidate="novalidate" onSubmit={onSubmit}>
      <CardNameHolder />
      <CardNumber />
      <CardExpiration />
      <CardCode />
    </form>
  );
}
