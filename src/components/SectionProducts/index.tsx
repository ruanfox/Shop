import styles from "./SectionProducts.module.scss"

import { Button } from "../Button"
import { CardProdutcs } from "../CardProduct"

interface ProductInfo {
    image: string;
    name: string;
    valor: number;
    nota: number;
}

interface SectionProductsProps{
    title:string,
    products: ProductInfo[];
}

export function SectionProdutcs({title, products}: SectionProductsProps){
    return(
        <section className={styles.SectionProducts}>
            <h1>{title}</h1>
            <div className={styles.productsNewarrivals}>
            {products.map((product, index) => (
                    <CardProdutcs
                        key={index}
                        imageProduct={product.image}
                        nameProduct={product.name}
                        valorProduct={product.valor}
                        nota={product.nota}
                    />
                ))}
            </div>
            <Button text="View All"/>
        </section>
    )
}