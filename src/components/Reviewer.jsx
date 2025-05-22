import React from 'react';
import person from '../images/person.svg'
// import styles from './Reviews.module.css'
import styles from './Menu.module.css'

const Reviewer = ({name, review}) => {
    return (
        <article className={styles.article}>
            <img src={person} alt="reviewer" />
            <h1>{name}</h1>
            <p>{review}</p>
        </article>
    );
}

export default Reviewer;