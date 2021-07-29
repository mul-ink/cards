import React from 'react';
import CardPlate from './components/creditCardPlate/Card.jsx';


export default function CardList({ card }) {

    return (
        <>
        <CardPlate key={card.id} card={card}/>
        </>
    );
}
