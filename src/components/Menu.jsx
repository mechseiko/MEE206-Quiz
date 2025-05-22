import React from 'react';
import Header from './Header';
import MenuBar from './MenuBar';
import Copyright from './Copyright';
// import { Link } from 'react-router-dom';
// import styles from './Menu.module.css'
// import ButtonStyle from './ButtonStyle';

function PastQuestions() {
    // const h1style={
    //     fontSize: "30px",
    //     color: "black"
    // }
    // const estyles={
    //     marginBottom: "25px"
    // }
    return (
        <div>
            <Header/>
            <div>
                <MenuBar 
                    header="Test 📚"
                    content="Take this week's test! A series of 10 questions for 40 minutes, see how far you can go and how far you can score!"
                    link="Proceed to Instructions"
                    linkto="/menu/instructions"
                />

                {/* <MenuBar 
                    header="Assignments 📊"
                    content="Gain access to detailed solutions to recent assignments given in class."
                    link="Check Assignments"
                    linkto="/menu/reviews"
                /> */}

                <MenuBar 
                    header="Past Questions ⏰"
                    content="Experience the correct way to solve questions on engineering dynamics, see past questions, correct workings and answers from the MEE206 Quiz."
                    link="See Past questions"
                    linkto="/menu/past-questions"
                />

                <MenuBar 
                    header="Reviews & Feedbacks 📊"
                    content="Check out what other amazing users like yourself have said about the MEE206 Quiz."
                    link="Read Reviews"
                    linkto="/menu/reviews"
                />

                {/* <article className={styles.articleEvent}>
                    <h1 style={h1style}>THE MEE206 TOURNAMENT</h1>
                    <p style={estyles}>Coming soon</p>
                    <Link style={ButtonStyle}>Coming soon</Link>
                </article> */}
            </div>
            <Copyright />
        </div>
    );
}

export default PastQuestions;