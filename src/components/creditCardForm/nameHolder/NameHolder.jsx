import React, { useRef } from 'react';


export default function CardNameHolder(){
  const cardNameHolderRef = useRef(null);
  const onChange = () => {
    console.log('name change ', cardNameHolderRef.current.validity)
  }
  return(
    <>
    <label htmlFor="cc-name">Name in card</label>
      <input
        required
        ref={cardNameHolderRef}
        onChange={onChange}
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
