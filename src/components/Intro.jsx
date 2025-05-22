import React, {useState} from 'react';
import styles from './Intro.module.css'
import { Link } from 'react-router-dom';
import ButtonStyle from './ButtonStyle'
import CustomAlert from './CustomAlert';

function Intro() {
    const [showAlert, setShowAlert] = useState(true);
    const alertHeaderStyle = {
        color: "red",
    }
    return(
        <div className={styles.introFlex}>
            {showAlert && (
                <CustomAlert
                    header = "⚠️ Disclaimer"
                    alertHeaderColor = {alertHeaderStyle}
                    message = "This quiz is created solely for educational and personal learning purposes, it is not intended to replicate or replace any existing school systems. All questions are updated weekly, stay consistent! Champ."
                    closeAlertBox = {() => {setShowAlert(false)}}
                />
            )}
            <div className={styles.introText}>
                <h1 className={styles.introH1}> WELCOME TO THE <br /><code>MEE206 <br /> QUIZ🚀</code></h1>
                <Link style={ButtonStyle} to={"/menu"}>Proceed to Main menu</Link>
            </div>
            <div style={{loading: "lazy"}} className={styles.hero}></div>
        </div>
    )
}

export default Intro;