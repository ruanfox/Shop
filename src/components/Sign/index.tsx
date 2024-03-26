import styles from "./Sign.module.scss";

export function Sign() {
    return(
        <div className={styles.sign}>
            <p>Sign up and get 20% off to your first order. <button>Sign Up Now</button></p>
        </div>
    )
}