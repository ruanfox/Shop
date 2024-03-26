import styles from "./CardFeedback.module.scss"

import { LiaStarSolid } from "react-icons/lia";
import { FaCircleCheck } from "react-icons/fa6";

export function CardFeedback(){
    return(
        <div className={styles.cardFeedback}>
            <div className={styles.containerCardFeedback}>
                <div className={styles.containerStar}>
                    <LiaStarSolid className={styles.star}/>
                    <LiaStarSolid className={styles.star}/>
                    <LiaStarSolid className={styles.star}/>
                    <LiaStarSolid className={styles.star}/>
                    <LiaStarSolid className={styles.star}/>
                </div>
                <div className={styles.name}>
                    <h2>Sarah M.</h2>
                    <FaCircleCheck className={styles.check}/>
                </div>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </div>
    )
}