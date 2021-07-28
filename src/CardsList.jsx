import React, { useEffect } from 'react';
import styles from './app.module.css';
import CardPlate from './components/creditCardPlate/Card.jsx';

export default function CardList() {
  const [data, setData] = React.useState([]);
	useEffect(() => {
		fetch('/api/cards').then((res) => res.json().then(setData))
  }, []);
  console.log('ddata2', data);
	return (
		<div className={styles.cardListLayout}>
			<CardPlate />
			<CardPlate />
		</div>
	);
}
