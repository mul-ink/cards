import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import CardPlate from './components/creditCardPlate/Card.jsx';

export default function CardList() {
	let [cards, setCards] = useState([]);
	useEffect(() => {
		fetch('/api/users')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);
	return (
		<div className={styles.cardListLayout}>
			<CardPlate />
			<CardPlate />
		</div>
	);
}
