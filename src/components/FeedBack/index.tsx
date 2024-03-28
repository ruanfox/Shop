import styles from "./FeedBack.module.scss"

import { CardFeedback } from "../CardFeedback";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export function FeedBack() {
    return(
        <section className={styles.feedback}>
        <div className={styles.titlePage}>
            <h1>OUR HAPPY CUSTOMERS</h1>
            <div className={styles.pagina}>
                <FaArrowLeft className={styles.arrow}/>
                <FaArrowRight className={styles.arrow}/>
            </div>
        </div>

        <CardFeedback />
        
        </section>
    )
}