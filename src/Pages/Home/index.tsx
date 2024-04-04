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
import { Divisor } from "../../components/Divider";

import axios from "axios";
import { useEffect, useState } from "react";


export function Home(){
    const [Product, setProducts] = useState([]);

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

    useEffect(() => {
        axios
        .get("https://dummyjson.com/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error))
        .finally(console.log);
    }, [])

    console.log(Product, "Product")

    console.log(Product)

    return(

        <main className={styles.home}>

            <Mural />

            <FilterBrands />

            <div className={styles.containerMargin}>
                <SectionProdutcs
                    title="NEW ARRIVALS"
                    products={newArrivals}
                />
            </div>
            
            <div className={styles.divider}>
                <Divisor />
            </div>

            <div className={styles.containerMargin}>
                <SectionProdutcs 
                    title="TOP SELLING"
                    products={newArrivals}
                />
            </div>

            <StyleProducts />

            <FeedBack />

        </main>
    )
}