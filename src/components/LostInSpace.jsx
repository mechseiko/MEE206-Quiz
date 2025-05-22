import React from 'react';
import ButtonStyle from './ButtonStyle';
import {Link} from 'react-router-dom'
import styles from './LostInSpace.module.css'
import astronaut from '../images/astronaut.png'

const LostInSpace = () => {
    return (
        <div className={styles.space}>
            <h1 className={styles.spaceh1}>YOU ARE LOST IN SPACE</h1>
            <h2 className={styles.spaceh2}>The page you are looking for does not exist!</h2>
            <Link to={"/"} style={ButtonStyle}>Take me home</Link>
            <img className={styles.spaceImg} src={astronaut} alt="astronaut" />
        </div>
    );
}

export default LostInSpace;