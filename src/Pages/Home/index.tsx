import styles from "./Home.module.scss";

import { Button } from "../../components/Button";
import { SectionProdutcs } from "../../components/SectionProducts";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


import versace from "./image/versace.svg"
import zara from "./image/zara.svg"
import gucci from "./image/gucci.svg"
import prada from "./image/prada.svg"
import calvinKlein from "./image/kalvinklein.svg"

import productImage1 from "./image/productImage1.svg"
import productImage2 from "./image/productImage2.svg"
import productImage3 from "./image/productImage3.svg"
import productImage4 from "./image/productImage4.svg"
import { StyleProducts } from "../../components/StyleProducts";
import { CardFeedback } from "../../components/CardFeedback";


export function Home(){
    const newArrivals = [
        {
            image: productImage1,
            name: "Product 1",
            valor: 10,
            nota: 4.5
        },
        {
            image: productImage2,
            name: "Product 2",
            valor: 20,
            nota: 4.2
        },
        {
            image: productImage3,
            name: "Product 3",
            valor: 15,
            nota: 4.7
        },
        {
            image: productImage4,
            name: "Product 4",
            valor: 25,
            nota: 4.8
        }
    ];

    return(
        <div className={styles.home}>
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

            <section className={styles.marcas}>
                <div  className={styles.marcas1}>
                    <img src={versace} alt="" />
                    <img src={zara} alt="" />
                    <img src={gucci} alt="" />
                    <img src={prada} alt="" />
                    <img src={calvinKlein} alt="" />
                </div>
            </section>

            <SectionProdutcs
                title="NEW ARRIVALS"
                products={newArrivals}
            />

            <SectionProdutcs 
                title="TOP SELLING"
                products={newArrivals}
            />

            <StyleProducts />

            <section className={styles.feedback}>
                <div className={styles.titlePage}>
                    <h1>OUR HAPPY CUSTOMERS</h1>
                    <div className={styles.pagina}>
                        <FaArrowLeft className={styles.arrow}/>
                        <FaArrowRight className={styles.arrow}/>
                    </div>
                </div>

                <CardFeedback />
                
            </section>
        </div>
    )
}