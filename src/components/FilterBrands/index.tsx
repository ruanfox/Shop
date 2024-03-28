import styles from "./FilterBrands.module.scss"

import versace from "./image/versace.svg"
import zara from "./image/zara.svg"
import gucci from "./image/gucci.svg"
import prada from "./image/prada.svg"
import kalvinKlein from "./image/kalvinklein.svg"


export function FilterBrands() {
    return (
        <section className={styles.marcas}>
        <div  className={styles.marcas1}>
            <img src={versace} alt="" />
            <img src={zara} alt="" />
            <img src={gucci} alt="" />
            <img src={prada} alt="" />
            <img src={kalvinKlein} alt="" />
        </div>
    </section>
    )
}