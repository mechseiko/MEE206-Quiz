import {Link} from 'react-router-dom'
import styles from './PastQuestions.module.css'

const pastQuestionsWeek = ({week, src, alt}) =>  {
    return (
        <Link to={"/menu/past-questions/" + week}><img className={styles.weekImage} src={src} alt={alt} /></Link>
    );
}
export default pastQuestionsWeek;