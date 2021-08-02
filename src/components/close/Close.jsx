import React from 'react';
import styles from './close.module.css';


export default function CloseButton() {
    return (
        <div className={styles.closeButton}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.299 6.99971L13.316 3.98271C14.2272 3.07154 14.2272 1.59454 13.316 0.683375C12.4049 -0.227792 10.9279 -0.227792 10.0167 0.683375L6.99971 3.70038L3.98271 0.683375C3.07154 -0.227792 1.59454 -0.227792 0.683375 0.683375C-0.227792 1.59454 -0.227792 3.07154 0.683375 3.98271L3.70038 6.99971L0.683375 10.0167C-0.227792 10.9279 -0.227792 12.4049 0.683375 13.316C1.13837 13.7722 1.73571 13.9997 2.33304 13.9997C2.93038 13.9997 3.52654 13.7722 3.98271 13.316L6.99971 10.299L10.0167 13.316C10.4717 13.7722 11.069 13.9997 11.6664 13.9997C12.2637 13.9997 12.8599 13.7722 13.316 13.316C14.2272 12.4049 14.2272 10.9279 13.316 10.0167L10.299 6.99971Z"/>
            </svg>
        </div>
    )
}
