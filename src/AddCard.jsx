import React from 'react';


export default function AddCard({ toggleDialog }) {

    return (
    <>
      <button
        style={{
          background: "hsl(205, 80%, 50%)",
          color: "hsl(0, 0%, 100%)",
        }}
        onClick={toggleDialog}
      >
        Add Card
      </button>
    </>
    );
}
