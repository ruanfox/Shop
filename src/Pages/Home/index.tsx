import styles from "./Home.module.scss";


import { SectionProdutcs } from "../../components/SectionProducts";


import productImage1 from "./image/productImage1.svg"
import productImage2 from "./image/productImage2.svg"
import productImage3 from "./image/productImage3.svg"
import productImage4 from "./image/productImage4.svg"

import { StyleProducts } from "../../components/StyleProducts";
import { FilterBrands } from "../../components/FilterBrands";
import { Mural } from "../../components/Mural";
import { FeedBack } from "../../components/FeedBack";


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

            <Mural />

            <FilterBrands />

            <SectionProdutcs
                title="NEW ARRIVALS"
                products={newArrivals}
            />

            <div className={styles.divider}></div>

            <SectionProdutcs 
                title="TOP SELLING"
                products={newArrivals}
            />

            <StyleProducts />

            <FeedBack />

        </div>
    )
}