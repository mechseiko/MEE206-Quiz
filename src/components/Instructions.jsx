import React from 'react';
import ButtonStyle from './ButtonStyle';
import styles from './Instructions.module.css'
import { Link } from 'react-router-dom';
import Copyright from './Copyright';
import Header from './Header';

const Instructions = () => {
    return (
        <div>
            <Header/>
            <div className={styles.container}>
                <h1 style={{color: "#fff",}}>Test Instructions</h1>
                <hr />
                <ol className={styles.instructionsList}>
                    <li>The Time duration for this test is 40 minutes!</li>
                    <li>There is a total of 10 sections, Each containing one(1) question.</li>
                    <li>Sections can be answered in whichever order you desire.</li>
                    <li>You can't go back to the main menu unless the section has been submitted!</li>
                    <li>You cannot go back to a section that has been submitted!</li>
                    <li>All Figures will be provided in the test page.</li>
                    <li>The timer starts immediately you click the button below. Best of luck!</li>
                </ol>
                <Link style={ButtonStyle} to={"/menu/instructions/test"}>Proceed to Test</Link>
                <p style={{color: "white",marginTop: "20px",marginBottom: "-15px",textAlign: "center",}}><i><b>Disclaimer:</b></i> This quiz is created solely for educational and personal learning purposes, it is not intended to replicate or replace any existing 
                    school systems.
                </p>
                <Copyright/>
            </div>
        </div>
    );
}

export default Instructions;