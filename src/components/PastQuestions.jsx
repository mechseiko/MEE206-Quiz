import React, {useState} from 'react';
// import Test from './Test';
import Header from './Header'
import {Link} from 'react-router-dom'
import ButtonStyle from './ButtonStyle';
import styles from './PastQuestions.module.css'
import Copyright from './Copyright';

// WEEK 1
import week1 from '../images/week1.png';
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
import week2 from '../images/week2.png';
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
import week3 from '../images/week3.png';
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



const PastQuestions = () => {
    const [showPastQuestions1, setShowPastQuestions1] = useState(false) 
    const [showPastQuestions2, setShowPastQuestions2] = useState(false) 
    const [showPastQuestions3, setShowPastQuestions3] = useState(false) 
    const images = [week1, week2, week3 ]
    const week1solutions = [week1solution1, week1solution2, week1solution3, week1solution4, week1solution5, week1solution6, week1solution7, week1solution8, week1solution9, week1solution10]
    const week2solutions = [week2solution1, week2solution2, week2solution3, week2solution4, week2solution5, week2solution6, week2solution7, week2solution8, week2solution9, week2solution10]
    const week3solutions = [week3solution1, week3solution2, week3solution3, week3solution4, week3solution5, week3solution6, week3solution7, week3solution8, week3solution9, week3solution10]
    const handleShowPastQuestions1 = () => {
        if(showPastQuestions1 === false){
            setShowPastQuestions1(true)
        } else{setShowPastQuestions1(false)}
    }
    const handleShowPastQuestions2 = () => {
        if(showPastQuestions2 === false){
            setShowPastQuestions2(true)
        } else{setShowPastQuestions2(false)}
    }
    const handleShowPastQuestions3 = () => {
        if(showPastQuestions3 === false){
            setShowPastQuestions3(true)
        } else{setShowPastQuestions3(false)}
    }
    return ( 
        <div className={styles.imgContainer}> 
            <Header/>
            <div className={styles.imageContainer}>
                <h1>Past Questions ⏳</h1>
                <hr />


                {/* WEEK 1 */}
                <img className={styles.weekImage} src={images[0]} onClick={handleShowPastQuestions1} alt="week1" />
                {showPastQuestions1 === true ? <div>
                    <div className={styles.solutions}>
                        <h1>Question 1</h1>
                        <img className={styles.solutionImage} src={week1solutions[0]} alt="week1-solution1" />
                        <h1>Question 2</h1>
                        <img className={styles.solutionImage} src={week1solutions[1]} alt="week1-solution2" />
                        <h1>Question 3</h1>
                        <img className={styles.solutionImage} src={week1solutions[2]} alt="week1-solution3" />
                        <h1>Question 4</h1>
                        <img className={styles.solutionImage} src={week1solutions[3]} alt="week1-solution4" />
                        <h1>Question 5</h1>
                        <img className={styles.solutionImage} src={week1solutions[4]} alt="week1-solution5" />
                        <h1>Question 6</h1>
                        <img className={styles.solutionImage} src={week1solutions[5]} alt="week1-solution6" />
                        <h1>Question 7</h1>
                        <img className={styles.solutionImage} src={week1solutions[6]} alt="week1-solution7" />
                        <h1>Question 8</h1>
                        <img className={styles.solutionImage} src={week1solutions[7]} alt="week1-solution8" />
                        <h1>Question 9</h1>
                        <img className={styles.solutionImage} src={week1solutions[8]} alt="week1-solution9" />
                        <h1>Question 10</h1>
                        <img className={styles.solutionImage} src={week1solutions[9]} alt="week1-solution10" />
                    </div>
                </div>
                : <></>
                }


                {/* WEEK 2 */}
                <img className={styles.weekImage} src={images[1]} onClick={handleShowPastQuestions2} alt="week2" />
                {showPastQuestions2 === true ? <div>
                    <div className={styles.solutions}>
                        <h1>Question 1</h1>
                        <img className={styles.solutionImage} src={week2solutions[0]} alt="week2-solution1" />
                        <h1>Question 2</h1>
                        <img className={styles.solutionImage} src={week2solutions[1]} alt="week2-solution2" />
                        <h1>Question 3</h1>
                        <img className={styles.solutionImage} src={week2solutions[2]} alt="week2-solution3" />
                        <h1>Question 4</h1>
                        <img className={styles.solutionImage} src={week2solutions[3]} alt="week2-solution4" />
                        <h1>Question 5</h1>
                        <img className={styles.solutionImage} src={week2solutions[4]} alt="week2-solution5" />
                        <h1>Question 6</h1>
                        <img className={styles.solutionImage} src={week2solutions[5]} alt="week2-solution6" />
                        <h1>Question 7</h1>
                        <img className={styles.solutionImage} src={week2solutions[6]} alt="week2-solution7" />
                        <h1>Question 8</h1>
                        <img className={styles.solutionImage} src={week2solutions[7]} alt="week2-solution8" />
                        <h1>Question 9</h1>
                        <img className={styles.solutionImage} src={week2solutions[8]} alt="week2-solution9" />
                        <h1>Question 10</h1>
                        <img className={styles.solutionImage} src={week2solutions[9]} alt="week2-solution10" />
                    </div>
                </div>
                : <></>
                }


                {/* WEEK 3 */}
                <img className={styles.weekImage} src={images[2]} onClick={handleShowPastQuestions3} alt="week3" />
                {showPastQuestions3 === true ? <div>
                    <div className={styles.solutions}>
                        <h1>Question 1</h1>
                        <img className={styles.solutionImage} src={week3solutions[0]} alt="week3-solution1" />
                        <h1>Question 2</h1>
                        <img className={styles.solutionImage} src={week3solutions[1]} alt="week3-solution2" />
                        <h1>Question 3</h1>
                        <img className={styles.solutionImage} src={week3solutions[2]} alt="week3-solution3" />
                        <h1>Question 4</h1>
                        <img className={styles.solutionImage} src={week3solutions[3]} alt="week3-solution4" />
                        <h1>Question 5</h1>
                        <img className={styles.solutionImage} src={week3solutions[4]} alt="week3-solution5" />
                        <h1>Question 6</h1>
                        <img className={styles.solutionImage} src={week3solutions[5]} alt="week3-solution6" />
                        <h1>Question 7</h1>
                        <img className={styles.solutionImage} src={week3solutions[6]} alt="week3-solution7" />
                        <h1>Question 8</h1>
                        <img className={styles.solutionImage} src={week3solutions[7]} alt="week3-solution8" />
                        <h1>Question 9</h1>
                        <img className={styles.solutionImage} src={week3solutions[8]} alt="week3-solution9" />
                        <h1>Question 10</h1>
                        <img className={styles.solutionImage} src={week3solutions[9]} alt="week3-solution10" />
                    </div>
                </div>
                : <></>
                }
            </div>
            <Link style={ButtonStyle}to={"/menu"}>Back to main menu</Link>
            <Copyright />
        </div>
    );
}

export default PastQuestions;