import React from 'react';
import useSWR from 'swr';
import styles from './app.module.css';
import Card from './Card';


export default function CardList() {
  const { data, error } = useSWR('/api/cards', fetcher);
  if (error) return <div role="alert" aria-label="Error Loading">Failed to load cards</div>
  if (!data) return <div role="alert" aria-label="Loading">loading...</div>
	return (
		<div className={styles.cardListLayout}>
			{ data.map((card) => <Card key={card.id} card={card}/>)}
		</div>
	);
}

const fetcher = (...args) => fetch(...args).then(res => res.json()) 
