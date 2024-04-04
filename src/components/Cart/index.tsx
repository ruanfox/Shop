import { CartProduct } from "../CartProduct";
import { Divisor } from "../Divider";
import styles from "./Cart.module.scss"

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Cart(){
    return(
        <div className={styles.cart}>
            <Divisor />
            <div className={styles.reoutesPages}>
                <div className={styles.routes}>
                    <p>Home</p>
                    <MdOutlineKeyboardArrowRight className={styles.arrow}/>
                </div>
                <div>
                    <p>Cart</p>
                </div>
            </div>
            <h1>YOUR CART</h1>
            <div className={styles.container}>
                <div className={styles.ContainerCartProduct}>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>
                <div className={styles.order}>
                    <h2>Order Summary</h2>
                    <div className={styles.valores}>
                        <div>
                            <h2>Subtotal</h2>
                            <p>$565</p>
                        </div>
                        <div className={styles.discount}>
                            <h2>Discount (-20%)</h2>
                            <p>-$113</p>
                        </div>
                        <div>
                            <h2>Delivery Fee</h2>
                            <p>$15</p>
                        </div>
                        <Divisor />
                        <div className={styles.total}> 
                            <h2>Total</h2>
                            <p>$467</p>
                        </div>
                    </div>
    
                    <form>
                        <input type="text" placeholder="Add promo code"/>
                        <button>Apply</button>
                    </form>
                    <button className={styles.checkout}>
                        Go to Checkout
                        <FaArrowRight className={styles.arrow}/>
                    </button>
                </div>
            </div>
        </div>
    )
}