import styles from "./CartProduct.module.scss"

import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

export function CartProduct(){
    return(
        <div className={styles.cartProduct}>
            <div className={styles.imgProduct}>
                
            </div>
            <div className={styles.containerInformation}>
                <div className={styles.information}>
                    <h2>Gradient Graphic T-sgirt</h2>
                    <p>Size: <span>Large</span></p>
                    <p>Color: <span>White</span></p>
                    <p className={styles.valor}>$145</p>
                </div>
                <div className={styles.amountProduct}>
                    <RiDeleteBinFill className={styles.bin}/>
                    <div className={styles.amout}>
                        <IoAddOutline className={styles.add}/>
                        <p>{1}</p>
                        <IoRemoveOutline className={styles.remove}/>
                    </div>
                </div>
            </div>
        </div>
    )
}