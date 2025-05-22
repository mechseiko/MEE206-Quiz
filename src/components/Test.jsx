import React, { useState, useEffect } from 'react';
import styles from './Test.module.css'
import testData from './testData';
import { Link } from 'react-router-dom';
import ButtonStyle from './ButtonStyle';
import Copyright from './Copyright';
import Header from './Header';
import CustomAlert from './CustomAlert';
import fig1 from '../images/figures/fig1.png'
import fig2 from '../images/figures/fig2.png'
import fig3 from '../images/figures/fig3.png'
import fig4 from '../images/figures/fig4.png'
import fig5 from '../images/figures/fig5.png'
import fig6 from '../images/figures/fig6.png'
import fig7 from '../images/figures/fig7.png'
import fig8 from '../images/figures/fig8.png'
import fig9 from '../images/figures/fig9.png'
import fig10 from '../images/figures/fig10.png'

import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase'; // Import Firestore instance

const Test = () => {
    const [selectedSection, setSelectedSection] = useState(null);
    const [completedSections, setCompletedSections] = useState([]);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [userEmail, setUserEmail] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [isShowCare, setIsShowCare] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const figures = [fig1, fig2, fig3, fig4, fig5, fig6, fig7, fig8, fig9, fig10];



    // ------TIMER-----
    let [timeLeft, setTimeLeft] = useState(40 * 60 - 1)
    
    const timerStyle = {
        fontSize: "20px",
        fontWeight: "bold",
        color: timeLeft <= 10 * 60 ? "red" : "#4ca",
        textAlign: "center",
        marginTop: "10px",
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, setTimeLeft]);



    // ------EMAIL------
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value); // Update email state
    };

    const validateEmail = (email) => {
        // Simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

const handleSendAnswers = async () => {
    if (!userEmail.trim()) {
        alert('Please enter your email address.');
        return;
    }

    if (!validateEmail(userEmail)) {
        alert('Please enter a valid email address.');
        return;
    }

    const correctAnswers = testData.map((item, index) => ({
        questionNumber: index + 1,
        question: item.question,
        userAnswer: answers[index + 1] || 'No answer selected',
        correctAnswer: item.correctAns,
    }));

    try {
        // Save the email to Firestore
        await addDoc(collection(db, 'quizEmails'), {
            email: userEmail,
            timestamp: new Date(), // Add a timestamp for reference
        });

        // Send the email via EmailJS
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: 'service_zh0vj84', // Replace with your EmailJS service ID
                template_id: 'template_ol09wxr', // Replace with your EmailJS template ID
                user_id: '9nHCjbJ8w8yQTswge', // Replace with your EmailJS user ID
                template_params: {
                    user_email: userEmail,
                    correct_answers: JSON.stringify(correctAnswers, null, 2), // Send correct answers as JSON
                    from_name: 'MECHSEIKO',
                    to_name: userEmail,
                    subject: 'CORRECT ANSWERS FOR THE MEE206 QUIZ',
                    message: `Hello! Thank you for taking this week's MEE206 Quiz. Here are the correct answers:\n\n${correctAnswers
                        .map(
                            (item) =>
                                `Question ${item.questionNumber}: ${item.question}\nYour Answer: ${item.userAnswer || "No answer selected"} ${item.userAnswer === item.correctAnswer ? "✅" : "❌" }\nCorrect Answer: ${item.correctAnswer}`
                        )
                        .join('\n\n')}`,
                },
            }),
        });

        if (response.ok) {
            alert('All correct answers have been sent to your email!');
            setIsButtonVisible(false); // Hide the button after sending
            setIsShowCare(true);
        } else {
            alert('Failed to send answers. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
};



    // ---QUESTIONS-----
    const sectionSelected = (section) => {
        setSelectedSection(section); // Update the selected section
    };
    const handleAnswerChange = (event) => {
        setAnswers({
            ...answers,
            [selectedSection]: event.target.value,
        });
    };

    const handleSubmit = () => {
        // Check if the answer is correct and update the score
        const correctAnswer = testData[selectedSection - 1].correctAns;
        if (answers[selectedSection] === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        // Add the section to completed sections and return to the main menu
        setCompletedSections([...completedSections, selectedSection]);
        setSelectedSection(null);
    };

    const availableSections = Array.from({ length: 10 }, (_, i) => i + 1).filter(
        (section) => !completedSections.includes(section)
    );

    let question, option1, option2, option3, option4;

    if (selectedSection !== null) {
        question = testData[selectedSection - 1].question;
        option1 = testData[selectedSection - 1].option1;
        option2 = testData[selectedSection - 1].option2;
        option3 = testData[selectedSection - 1].option3;
        option4 = testData[selectedSection - 1].option4;
    }

    // Check if all sections are completed
    const allSectionsCompleted = completedSections.length === 10;
    const alertHeaderStyle = {
        color: "black",
    }

    return (
        <div className={styles.container}>
            {allSectionsCompleted || timeLeft <= 0 ? (
            <>
                {/* RENDER THE RESULT PAGE */}
                 {showAlert && (
                    <CustomAlert
                        alertHeaderColor = {alertHeaderStyle}
                        header = "🏆Quiz Submitted"
                        message="Don't forget to come back next week for more questions.😊"
                        closeAlertBox={() => {setShowAlert(false)}}
                    />
                )}

                <div>
                    <Header />
                    <div className={styles.resultContainer}>
                        <h2 className={styles.resultHeader}>You Scored: <p className={styles.score}>{score}</p></h2>
                        {isButtonVisible && (
                            <>
                                <p className={styles.resultDescription}>Please provide your email below. All correct answers will be sent to your Inbox ✉️</p>
                                <input
                                    className={styles.emailInput}
                                    type="email"
                                    placeholder="e.g johndoe@gmail.com"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                    required
                                />
                                <button className={styles.sendAnswersBtn} onClick={handleSendAnswers}>
                                    Send Correct Answers
                                </button>
                                <Copyright/>
                            </>
                        )}
                        {isShowCare ? (
                            <>
                                <h2 className={styles.developer}>This quiz was developed by mechseiko</h2>
                                <Link style={{color: "black", fontSize: "20px",}} to={"/tip"}>Show mechseiko you care.</Link> <br />
                                <Link style={{display: "none"}} to={"/tip"}>Show mechseiko you care.</Link> <br />
                                <Link style={{display: "none"}} to={"/tip"}>Show mechseiko you care.</Link> <br />
                                <Link style={ButtonStyle}to={"/menu"}>Back to Main menu</Link>
                            </>
                         ) : (<> </>)}
                    </div>
                </div>
                </>
            ) : selectedSection === null ? (

                // RENDER THE MAIN MENU
                <div>
                    <Header />
                    <div className={styles.sectionContainer}>
                        <h2>Available Tests</h2>
                        <div className={styles.section}>
                            {availableSections.map((section) => (
                                <button key={section} onClick={() => sectionSelected(section)}>
                                    Section {section}
                                </button>
                            ))}
                        </div>

                        <h2>Completed Tests</h2>
                        <div className={styles.section}>
                            {completedSections.map((section) => (
                                <button key={section}>Section {section}</button>
                            ))
                            }
                        </div>
                        <div style={timerStyle}>
                            <h3>{formatTime(timeLeft)}</h3>
                        </div>
                    </div>
                    <Copyright />
                </div>
            ) : (
                
                // RENDER THE QUESTION PAGE
                <div>
                    <Header />
                    <div className={styles.desktopFlex}>
                        <div className={styles.questionContainer}>
                            <div>
                                <h1 className={styles.question}>{question}</h1>
                                <div className={styles.optionContainer}>
                                    <div onClick={() => document.getElementById('option1').click()}>
                                        <input
                                            id="option1"
                                            type="radio"
                                            name="option"
                                            value={option1}
                                            onChange={handleAnswerChange}
                                        />
                                        <label htmlFor="option1">{option1}</label>
                                    </div>
                                    <div onClick={() => document.getElementById('option2').click()}>
                                        <input
                                            id="option2"
                                            type="radio"
                                            name="option"
                                            value={option2}
                                            onChange={handleAnswerChange}
                                        />
                                        <label htmlFor="option2">{option2}</label>
                                    </div>
                                    <div onClick={() => document.getElementById('option3').click()}>
                                        <input
                                            id="option3"
                                            type="radio"
                                            name="option"
                                            value={option3}
                                            onChange={handleAnswerChange}
                                        />
                                        <label htmlFor="option3">{option3}</label>
                                    </div>
                                    <div onClick={() => document.getElementById('option4').click()}>
                                        <input
                                            id="option4"
                                            type="radio"
                                            name="option"
                                            value={option4}
                                            onChange={handleAnswerChange}
                                        />
                                        <label htmlFor="option4">{option4}</label>
                                    </div>
                                </div>
                                <button className={styles.submitButton} onClick={handleSubmit}>Submit</button>
                                <div style={timerStyle}>
                                    <h3>{formatTime(timeLeft)}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.figureContainer}>
                            {selectedSection !== null && (
                                <img src={figures[selectedSection - 1]} alt={`Figure for Section ${selectedSection}`} />
                            )}
                        </div>
                    </div>
                    <Copyright />
                </div>
            )}
        </div>
    );
};

export default Test;