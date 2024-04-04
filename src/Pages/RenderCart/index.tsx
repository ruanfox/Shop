import styles from "./RenderCart.module.scss"

import { Cart } from "../../components/Cart";

export function RenderCart(){
    return(
        <div className={styles.renderCart}>
            
            <Cart />
        </div>
    )
}