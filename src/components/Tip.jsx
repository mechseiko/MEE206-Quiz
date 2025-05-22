import React from 'react';
import styles from './Tip.module.css';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
import Header from './Header';
import ButtonStyle from './ButtonStyle';

const Tip = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("1867755467");
        alert('Account number copied to clipboard!');
    };
    return (
        <div>
            <Header />
            <div className={styles.tipContainer}>
                <h1 className={styles.tipHeader}>Support My Work 💖</h1>
                <p className={styles.tipDescription}>
                    If you love what I do and want to support me, feel free to leave a tip! 
                    Your generosity helps me keep creating amazing projects.
                </p>
                <h2 className={styles.feedbackHeader}>🌟 Leave a Tip</h2>
                {/* -----------ACCOUNT DETAILS -------------*/}
                <div className={styles.accountDetails}>
                    <h2 className={styles.accountHeader}>Bank Details</h2>
                    <p><strong>Bank Name:</strong> ACCESS BANK</p>

                    <p><strong>Account Number:</strong> 1867755467 
                        <button className={styles.copyButton} onClick={copyToClipboard}>📋 Copy</button>
                    </p>

                    <p><strong>Account Name:</strong> Amuda Abdulqoyum</p>
                </div>
                <Link style={{display: "none"}} to={"/tip"}></Link> <br />
                <Link style={ButtonStyle}to={"/menu"}>Back to Main menu</Link>
                <Copyright/>
            </div>
            </div>
    );
};

export default Tip;