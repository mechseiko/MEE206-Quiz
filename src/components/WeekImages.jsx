import Header from './Header'
import {Link} from 'react-router-dom'
import ButtonStyle from './ButtonStyle';
import styles from './PastQuestions.module.css'
import Copyright from './Copyright';
import PastQuestionsWeek from '../components/PastQuestionsWeek';

import week1 from '../images/week1.png';
import week2 from '../images/week2.png';
import week3 from '../images/week3.png';    
import week4 from '../images/week4.png';    

const weekImages = () => {
    const itemsArray = [
        {week: "week1", src:week1, alt:"week1"},
        {week: "week2", src:week2, alt:"week2"},
        {week: "week3", src:week3, alt:"week3"},
        {week: "week4", src:week4, alt:"week4"}
    ]
    return (
        <div className={styles.imgContainer}> 
            <Header/>
            <div className={styles.imageContainer}>
                <h1>Past Questions ⏳</h1>
                <hr />
                {
                    itemsArray.map((week, index) => {
                        return <PastQuestionsWeek key={index} src={week.src} alt={week.alt} week={week.week}/>
                    })
                }
            </div>
            <Link style={ButtonStyle}to={"/menu"}>Back to main menu</Link>
            <Copyright />
        </div>
    );
}

export default weekImages;