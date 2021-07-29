import React, { useRef } from "react";
import CardNameHolder from './nameHolder/NameHolder'
import CardCode from "./code/Code";
import CardExpiration from "./expiration/Expiration";
import CardNumber from "./number/CardNumber";

export default function CreditCardForm() {
  const formRef = useRef();
  const onSubmit = (e) => {
    console.log(formRef.current.reportValidity())
  };
  return (
    <form title="Add credit card" aria-label="Add credit card" ref={formRef} noValidate="novalidate" onSubmit={onSubmit}>
      <h1>Add your card details</h1>
      <CardNameHolder />
      <CardNumber />
      <CardExpiration />
      <CardCode />
    </form>
  );
}
