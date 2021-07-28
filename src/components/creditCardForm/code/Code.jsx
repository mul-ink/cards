import React, { useRef } from 'react';


export default function CardCode(){
  const cardCodeRef = useRef(null);
  const onChange = () => {
    console.log('name change ', cardCodeRef.current.validity)
  }
  return(
    <>
      <label htmlFor="x_card_code">CVC (Security code)</label>
      <input
        required
        ref={cardCodeRef}
        onChange={onChange}
        id="x_card_code"
        name="x_card_code"
        placeholder="000"
        type="tel"
        autoComplete="x_card_code"
      />
      <button type="submit">Save</button>
    </>
  )
}
