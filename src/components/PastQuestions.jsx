import Header from './Header'
import {Link} from 'react-router-dom'
import ButtonStyle from './ButtonStyle';
import styles from './PastQuestions.module.css'
import { useParams } from 'react-router-dom';
import Copyright from './Copyright';

// WEEK 1
import week1solution1 from '../questions/week1-(21-04-2025)/fig1.png'
import week1solution2 from '../questions/week1-(21-04-2025)/fig2.png'
import week1solution3 from '../questions/week1-(21-04-2025)/fig3.png'
import week1solution4 from '../questions/week1-(21-04-2025)/fig4.png'
import week1solution5 from '../questions/week1-(21-04-2025)/fig5.png'
import week1solution6 from '../questions/week1-(21-04-2025)/fig6.png'
import week1solution7 from '../questions/week1-(21-04-2025)/fig7.png'
import week1solution8 from '../questions/week1-(21-04-2025)/fig8.png'
import week1solution9 from '../questions/week1-(21-04-2025)/fig9.png'
import week1solution10 from '../questions/week1-(21-04-2025)/fig10.png'

// WEEK 2
import week2solution1 from '../questions/week2-(28-04-2025)/fig1.jpg'
import week2solution2 from '../questions/week2-(28-04-2025)/fig2.png'
import week2solution3 from '../questions/week2-(28-04-2025)/fig3.png'
import week2solution4 from '../questions/week2-(28-04-2025)/fig4.png'
import week2solution5 from '../questions/week2-(28-04-2025)/fig5.png'
import week2solution6 from '../questions/week2-(28-04-2025)/fig6.png'
import week2solution7 from '../questions/week2-(28-04-2025)/fig7.png'
import week2solution8 from '../questions/week2-(28-04-2025)/fig8.png'
import week2solution9 from '../questions/week2-(28-04-2025)/fig9.jpg'
import week2solution10 from '../questions/week2-(28-04-2025)/fig10.png'

// WEEK 3
import week3solution1 from '../questions/week3-(5-05-2025)/fig1.png'
import week3solution2 from '../questions/week3-(5-05-2025)/fig2.png'
import week3solution3 from '../questions/week3-(5-05-2025)/fig3.png'
import week3solution4 from '../questions/week3-(5-05-2025)/fig4.png'
import week3solution5 from '../questions/week3-(5-05-2025)/fig5.png'
import week3solution6 from '../questions/week3-(5-05-2025)/fig6.png'
import week3solution7 from '../questions/week3-(5-05-2025)/fig7.png'
import week3solution8 from '../questions/week3-(5-05-2025)/fig8.png'
import week3solution9 from '../questions/week3-(5-05-2025)/fig9.png'
import week3solution10 from '../questions/week3-(5-05-2025)/fig10.png'

// WEEK 4
import week4solution1 from '../questions/week4-(12-05-2025)/fig1.png'
import week4solution2 from '../questions/week4-(12-05-2025)/fig2.png'
import week4solution3 from '../questions/week4-(12-05-2025)/fig3.png'
import week4solution4 from '../questions/week4-(12-05-2025)/fig4.png'
import week4solution5 from '../questions/week4-(12-05-2025)/fig5.png'
import week4solution6 from '../questions/week4-(12-05-2025)/fig6.png'
import week4solution7 from '../questions/week4-(12-05-2025)/fig7.png'
import week4solution8 from '../questions/week4-(12-05-2025)/fig8.png'
import week4solution9 from '../questions/week4-(12-05-2025)/fig9.png'
import week4solution10 from '../questions/week4-(12-05-2025)/fig10.png'

// WEEK 5
// import week5solution1 from '../questions/week5-(26-05-2025)/fig1.png'
// import week5solution2 from '../questions/week5-(26-05-2025)/fig2.png'
// import week5solution3 from '../questions/week5-(26-05-2025)/fig3.png'
// import week5solution4 from '../questions/week5-(26-05-2025)/fig4.png'
// import week5solution5 from '../questions/week5-(26-05-2025)/fig5.png'
// import week5solution6 from '../questions/week5-(26-05-2025)/fig6.png'
// import week5solution7 from '../questions/week5-(26-05-2025)/fig7.png'
// import week5solution8 from '../questions/week5-(26-05-2025)/fig8.png'
// import week5solution9 from '../questions/week5-(26-05-2025)/fig9.png'
// import week5solution10 from '../questions/week5-(26-05-2025)/fig10.png'



const PastQuestions = () => {
    const arrayImages = {
        week1: [week1solution1, week1solution2, week1solution3, week1solution4, week1solution5, week1solution6, week1solution7, week1solution8, week1solution9, week1solution10],
        week2: [week2solution1, week2solution2, week2solution3, week2solution4, week2solution5, week2solution6, week2solution7, week2solution8, week2solution9, week2solution10],
        week3: [week3solution1, week3solution2, week3solution3, week3solution4, week3solution5, week3solution6, week3solution7, week3solution8, week3solution9, week3solution10],
        week4: [week4solution1, week4solution2, week4solution3, week4solution4, week4solution5, week4solution6, week4solution7, week4solution8, week4solution9, week4solution10],
        // week5: [week5solution1, week5solution2, week5solution3, week5solution4, week5solution5, week5solution6, week5solution7, week5solution8, week5solution9, week5solution10],
    }
    const params = useParams()
    const week = params.weekId
    const solutionImages = []
    for(let n=0; n<10; n++){
        solutionImages.push(
            <div>
                <h1 className={styles.questionH1}>Question {n+1}</h1>
                <img className={styles.solutionImage} src={arrayImages[week][n]} alt="solution" />
            </div>
        )
    }
    return (
        <div className={styles.imgContainer}> 
            <Header/>
            <div className={styles.imageContainer}>
                <h1 className={styles.weekH1}>{week.substring(0,1).toUpperCase()}{week.substring(1,4)} {week.substring(4,6).padStart(2, 0)}</h1>
                <hr />
                <div className={styles.solutions}>
                    <div>{solutionImages}</div>
                </div>
            </div>
            <Link style={ButtonStyle}to={"/menu/past-questions"}>Back to Past Questions</Link>
            <Copyright />
        </div>
    );
}

export default PastQuestions;