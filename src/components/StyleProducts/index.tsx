import styles from "./StyleProducts.module.scss"

export function StyleProducts(){
    return(
        <section className={styles.style}>
        <h1>BROWSE BY DRESS STYLE</h1>
        <div className={styles.part1}>
            <div className={styles.casual}>
                <h2>Casual</h2>
            </div>
            <div className={styles.formal}>
                <h2>Formal</h2>
            </div>
        </div>
        <div className={styles.part2}>
            <div className={styles.party}>
                <h2>Party</h2>
            </div>
            <div className={styles.gym}>
                <h2>Gym</h2>
            </div>
        </div>
    </section>
    )
}