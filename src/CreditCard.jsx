import React, { useRef, useEffect } from "react";

export default function CreditCard() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log({ form });
  };
  return (
    <form id="form" noValidate="novalidate" onSubmit={onSubmit}>
      <CardNameHolder />
      <label htmlFor="cc-number">Card number</label>
      <input
        id="cc-number"
        name="cc-number"
        placeholder="0000 0000 0000 0000"
        type="tel"
        autoComplete="cc-number"
      />
      <span></span>
      <label htmlFor="cc-exp">Expiry date</label>
      <input
        id="cc-exp"
        name="cc-exp"
        placeholder="00/00"
        type="tel"
        autoComplete="cc-exp"
      />
      <span></span>
      <label htmlFor="x_card_code">CVC (Security code)</label>
      <input
        id="x_card_code"
        name="x_card_code"
        placeholder="000"
        type="tel"
        autoComplete="x_card_code"
      />
      <button type="submit">Save</button>
    </form>
  );
}

function CardNameHolder(){
  const cardNameInput = useRef(null);
  useEffect(() => {
    console.log(cardNameInput.current, "heh");
  }, [cardNameInput]);
  return(
    <>
          <label htmlFor="cc-name">Name in card</label>
      <input
        ref={cardNameInput}
        id="cc-name"
        name="cc-name"
        type="text"
        required
        minLength="2"
        placeholder="John Doe"
        autoComplete="cc-name"
      />
      <span></span>
    </>
  )
}
