import { Fragment, useContext, useEffect, useState } from "react";
import { CartProduct } from "../CartProduct";
import { Divisor } from "../Divider";
import styles from "./Cart.module.scss"

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TypeContext } from "../../context/TypeProvider";
import { Discount } from "../../utils/discount";
import { ConversionReal } from "../../utils/conversion-real";


export function Cart(){
    const { items, setAmount, amount } = useContext(TypeContext);
    const [delivery, setDelivery] = useState<number>(0)
    
    useEffect(() => {
        if(amount != 0){
            setDelivery(1000)
        }
        const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setAmount(total)
    },[items, setAmount, setDelivery, amount])
    
    const discount = Discount(amount)

    const valueTotal = (amount + delivery) - discount;

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
                    {
                        items.map((item, index) => (
                            <Fragment>
                                <CartProduct
                                id={item.id}
                                name={item.name}
                                size={item.size}
                                color={item.color}
                                price={item.price}
                                quantity={item.quantity}
                                idCart={item.idCart}
                            />
                            {index != items.length - 1 && <Divisor />}
                            </Fragment>
                        ))
                    }
                </div>
                <div className={styles.order}>
                    <h2>Order Summary</h2>
                    <div className={styles.valores}>
                        <div>
                            <h2>Subtotal</h2>
                            <p>${ConversionReal(amount)}</p>
                        </div>
                        <div className={styles.discount}>
                            <h2>Discount (-20%)</h2>
                            <p>-${ConversionReal(discount)}</p>
                        </div>
                        <div>
                            <h2>Delivery</h2>
                            <p>${ConversionReal(delivery)}</p>
                        </div>
                        <Divisor />
                        <div className={styles.total}> 
                            <h2>Total</h2>
                            <p>${ConversionReal(valueTotal)}</p>
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