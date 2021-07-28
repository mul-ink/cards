import React, { useRef } from 'react';


export default function CardExpiration(){
  const cardExpirationRef = useRef(null);
  const onChange = () => {
    console.log('name change ', cardExpirationRef.current.validity)
  }
  return(
    <>
      <label htmlFor="cc-exp">Expiry date</label>
      <input
        required
        ref={cardExpirationRef}
        onChange={onChange}
        id="cc-exp"
        name="cc-exp"
        placeholder="00/00"
        type="tel"
        autoComplete="cc-exp"
      />
      <span></span>
    </>
  )
}
