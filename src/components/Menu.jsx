import React from 'react';
import Header from './Header';
import MenuBar from './MenuBar';
import Copyright from './Copyright';
// import { Link } from 'react-router-dom';
// import styles from './Menu.module.css'
// import ButtonStyle from './ButtonStyle';

function PastQuestions() {
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
            </div>
            <Copyright />
        </div>
    );
}

export default PastQuestions;