import React from "react";

export default function Payment() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log({ form });
  };
  return (
    <form id="form" novalidate onSubmit={onSubmit}>
      <label for="cc-name" class="control-label">
        Name in card
      </label>
      <input
        id="cc-name"
        name="cc-name"
        type="text"
        placeholder="John Doe"
        data-val="true"
        data-val-required="Please fill in your name"
        autocomplete="cc-name"
        aria-required="true"
        aria-invalid="false"
        aria-describedby="cc-name-error"
      />
      <span data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
      <label for="cc-number">Card number</label>
      <input
        id="cc-number"
        name="cc-number"
        placeholder="0000 0000 0000 0000"
        type="tel"
        data-val="true"
        data-val-required="Please enter the card number"
        data-val-cc-number="Please enter a valid card number"
        autocomplete="cc-number"
      />
      <span data-valmsg-for="cc-number" data-valmsg-replace="true"></span>
      <label for="cc-exp" class="control-label">
        Expiry date
      </label>
      <input
        id="cc-exp"
        name="cc-exp"
        placeholder="00/00"
        type="tel"
        data-val="true"
        data-val-required="Please enter the card expiration"
        data-val-cc-exp="Please enter a valid month and year"
        autocomplete="cc-exp"
      />
      <span data-valmsg-for="cc-exp" data-valmsg-replace="true"></span>
      <label for="x_card_code" class="control-label">
        CVC (Security code)
      </label>
      <input
        id="x_card_code"
        name="x_card_code"
        placeholder="000"
        type="tel"
        data-val="true"
        data-val-required="Please enter the security code"
        data-val-cc-cvc="Please enter a valid security code"
        autocomplete="off"
      />
      <button type="submit">Save</button>
    </form>
  );
}
