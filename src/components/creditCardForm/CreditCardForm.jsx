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
    <form ref={formRef} id="form" noValidate="novalidate" onSubmit={onSubmit}>
      <CardNameHolder />
      <CardNumber />
      <CardExpiration />
      <CardCode />
    </form>
  );
}
