import styles from "./ProductReview.module.scss"

import { LiaStarSolid } from "react-icons/lia";
import { FaCircleCheck } from "react-icons/fa6";
import { IoEllipsisHorizontal } from "react-icons/io5";

export function ProductReview(){
    return(
        <div className={styles.ProductReview}>
                <div className={styles.evaluation}>
                    <div className={styles.containerStar}>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                    </div>
                    <IoEllipsisHorizontal />
                </div>
                <div className={styles.name}>
                    <h2>Sarah M.</h2>
                    <FaCircleCheck className={styles.check}/>
                </div>                   
                <div className={styles.comment}>
                    <p>"{"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."}"</p>
                </div>
                <div className={styles.date}>
                    <p>Posted on August 14, 2023</p>
                </div>
        </div>
    )
}