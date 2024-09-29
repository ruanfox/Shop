import styles from "./Home.module.scss";


import { SectionProdutcs } from "../../components/SectionProducts";

import { StyleProducts } from "../../components/StyleProducts";
import { FilterBrands } from "../../components/FilterBrands";
import { Mural } from "../../components/Mural";
import { FeedBack } from "../../components/FeedBack";
import { Divisor } from "../../components/Divider";
import { useProducts } from "../../hooks/useProducts";

export function Home(){

    const {data} = useProducts();
    
    const lastFourNewArrivals = data?.slice(-4).map(product => ({
        image: product.image_url[0],
        name: product.name,
        valor: product.price,        
        nota: product.quality,        
        id: product.id
    })) || [];

    const topSelling = data?.slice(3).map(product => ({
        image: product.image_url[0], 
        name: product.name,
        valor: product.price,        
        nota: product.quality,        
        id: product.id
    })) || [];

    return(

        <main className={styles.home}>

            <Mural />

            <FilterBrands />

            <div className={styles.containerMargin}>
                <SectionProdutcs
                    title="NEW ARRIVALS"
                    products={lastFourNewArrivals}
                />
            </div>
            
            <div className={styles.divider}>
                <Divisor />
            </div>

            <div className={styles.containerMargin}>
                <SectionProdutcs 
                    title="TOP SELLING"
                    products={topSelling}
                />
            </div>

            <StyleProducts />

            <FeedBack />

        </main>
    )
}