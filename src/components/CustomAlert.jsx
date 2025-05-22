import React from 'react';
import styles from './CustomAlert.module.css';

const CustomAlert = ({header, message, closeAlertBox, alertHeaderColor, list1, list2, list3 }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.alertBox}>
                <h1 style={alertHeaderColor}>{header}</h1>
                <p>{message}</p>
                <button onClick={closeAlertBox}>Ok</button>
            </div>
        </div>
    );
};

export default CustomAlert;