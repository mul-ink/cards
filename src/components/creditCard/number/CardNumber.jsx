import React, { useRef } from 'react';


export default function CardNumber(){
  const cardNumberRef = useRef(null);
  const onChange = () => {
    console.log('change ', cardNumberRef.current.validity)
  }
  return(
    <>
      <label htmlFor="cc-number">Card number</label>
      <input
        required
        ref={cardNumberRef}
        onChange={onChange}
        id="cc-number"
        name="cc-number"
        placeholder="0000 0000 0000 0000"
        type="tel"
        autoComplete="cc-number"
      />
      <span></span>
    </>
  )
}
