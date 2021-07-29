import React from 'react';
import useSWR from 'swr';
import styles from './app.module.css';
import CardPlate from './components/creditCardPlate/Card.jsx';


export default function CardList() {
  const { data, error } = useSWR('/api/cards', fetcher);
  if (error) return <div role="alert" aria-label="Error Loading">failed to load</div>
  if (!data) return <div role="alert" aria-label="Loading">loading...</div>
	return (
		<div className={styles.cardListLayout}>
			{ data.map((card) => <CardPlate key={card.id} card={card}/>)}
		</div>
	);
}

const fetcher = (...args) => fetch(...args).then(res => res.json()) 
