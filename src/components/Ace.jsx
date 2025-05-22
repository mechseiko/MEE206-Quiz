import React, {useState} from 'react';
import earth from '../images/earth.jpg'
import styles from './Ace.module.css'
import { Link } from 'react-router-dom';
import ButtonStyle from './ButtonStyle'
import Copyright from './Copyright';
import CustomAlert from './CustomAlert';

function Ace() {
    const [showAlert, setShowAlert] = useState(true);
        const alertHeaderStyle = {
            color: "black",
        }
    return (
        <div className={styles.aceContainer}> 
            {showAlert && (
                <CustomAlert
                    header = "😊 Welcome Back!"
                    alertHeaderColor = {alertHeaderStyle}
                    message = "We've upgraded the experience, Fresh questions await you."
                    closeAlertBox = {() => {setShowAlert(false)}}
                />
            )}
            <div>
                <h1 className={styles.aceHeader}>Ace <code>MEE206</code> With Ease and Steeze.🚀</h1>
                <h2 className={styles.aceContent}>By Solving questions weekly.</h2>
                <Link style={ButtonStyle} to={"/welcome"}>Show me how</Link>
            </div>
            <div className={styles.earthContainer}>
                <img src={earth} alt="earth" />
            </div>
            <Copyright/>
        </div>
    );
}

export default Ace;