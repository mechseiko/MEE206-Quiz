import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import ButtonStyle from './ButtonStyle';
import Header from './Header'
import Copyright from './Copyright';
import Reviewer from './Reviewer';
import styles from './Menu.module.css'

const Reviews = () =>  {
    const [feedback, setFeedback] = useState('');
    const [showFeedbackForm, setShowFeedbackForm] = useState(true)
    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };
    
    const handleSendFeedback = async (e) => {
        e.preventDefault();
        if (!feedback.trim()) {
            alert('Please enter your feedback before sending.');
            setShowFeedbackForm(true)
            return;
        }
        
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_zh0vj84',
                    template_id: 'template_12cdgqn',
                    user_id: '9nHCjbJ8w8yQTswge',
                    template_params: {
                        message: feedback,
                        to_email: 'mechseiko@gmail.com',
                    },
                }),
            });

            if (response.ok) {
                setFeedback('');
                setShowFeedbackForm(false)
                alert('Thank you for submitting your feedback to us💞. We will analayze your report to determine how it can help us to improve!');
            } else {
                alert('Failed to send feedback. Please try again.');
                setShowFeedbackForm(true)
            }
        } catch (error) {
            console.error('Error sending feedback:', error);
            alert('An error occurred. Please try again later.');
            setShowFeedbackForm(true)
        }
    };
    return (
        <div>
            <Header />
            <div className={styles.reviewContainer}>
                <h1>Reviews & Feedbacks 📊</h1>
                <hr />
                <Reviewer
                    name="HON. Tranquil - President NIMechEOAU"
                    review="Wow!, Well done!"
                />
                <Reviewer
                    name="Comrade Akkani"
                    review="This is a very good one."
                />
                <Reviewer 
                    name="DEV Shakuurr"
                    review="Let's keep building. Good initiative."
                />
                <Reviewer
                    name="DEV Bime"
                    review="A lot of people are capable of doing what you did or more, I believe they're just afraid."
                />
                <Reviewer 
                    name="Mike Media"
                    review="This is a really nice idea."
                />
                <Reviewer 
                    name="Simply Sa'ad"
                    review="I'm quite impressed by it."
                />
                <Reviewer 
                    name="Mel Mogore"
                    review="Oh wow, this is amazing SEIKO!"
                />
                {/* <Reviewer 
                    name="Mr Fx_17"
                    review="I must say, i'm proud of you sir."
                /> */}
                <Reviewer 
                    name="Iremide"
                    review="I have shared it with a number of groups that needs it, SEIKO!"
                />
                <Reviewer 
                    name="Anonymous"
                    review="First, I would like to commend you for the thought.., you actually did well by thinking of a way to solve people's problems."
                />
                <Reviewer 
                    name="Anonymous"
                    review="It's top-notch and educating, Allahumo barik brother. I'm anticipating for more next week."
                />
                <Reviewer 
                    name="Anonymous"
                    review="The setting makes sense, just like exam mode, really nice, it will prepare people like us for the future"
                />
                <Reviewer 
                    name="Anonymous"
                    review="This is so nice, well done"
                />
                {/* <Reviewer 
                    name="Anonymous"
                    review="I love your work!"
                />
                <Reviewer 
                    name="Anonymous"
                    review="Keep up the good work!"
                /> */}
                {showFeedbackForm ? (
                    <div className={styles.feedbackForm}>
                        <h2 className={styles.feedbackHeader}>📝 Leave a Feedback</h2>
                        <textarea
                            className={styles.feedbackTextarea}
                            placeholder="Type your feedback here..."
                            value={feedback}
                            onChange={handleFeedbackChange}
                        />
                        <button className={styles.feedbackButton} onClick={(e) => {
                            handleSendFeedback(e);
                        }}>
                            Send Feedback
                        </button>
                    </div>
                ) : <></>
                }
                <Link style={ButtonStyle}to={"/menu"}>Back to main menu</Link>
                <Copyright />
            </div>
        </div>
    );
}

export default Reviews;