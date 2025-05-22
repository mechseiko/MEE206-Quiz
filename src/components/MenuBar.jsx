import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css'
import ButtonStyle from './ButtonStyle';

const MenuBar = ({header, content, link, linkto}) => {
    return (
        <article className={styles.article}>
            <h1>{header}</h1>
            <p>{content}</p>
            <Link style={ButtonStyle} to={linkto}>{link}</Link>
        </article>
    );
}

export default MenuBar;