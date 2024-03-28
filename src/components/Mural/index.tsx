import { Button } from "../Button"
import styles from "./Mural.module.scss"

export function Mural() {
    return(
        <section className={styles.mural}>
        <div className={styles.info}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <Button text="Shop Now"/>
            <div className={styles.quant}>
                <div>
                    <h2>200+</h2>
                    <p>International Brands</p>
                </div>
                <div className={styles.divisoria}></div>
                <div>
                    <h2>2,000+</h2>
                    <p>High-Quality Products</p>
                </div>
                <div className={styles.divisoria}></div>
                <div>
                    <h2>30,000+</h2>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    </section>
    )
}