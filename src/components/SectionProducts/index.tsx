import styles from "./SectionProducts.module.scss"

import { Button } from "../Button"
import { CardProdutcs } from "../CardProduct"
import { useContext } from "react";
import { TypeContext } from "../../context/TypeProvider";
import { useNavigate } from "react-router-dom";

interface ProductInfo {
    image: string;
    name: string;
    valor: number;
    nota: number;
    id: number;
}

interface SectionProductsProps{
    title:string,
    products: ProductInfo[];
}

export function SectionProdutcs({title, products}: SectionProductsProps){
    const navigate= useNavigate();
    const {setId} = useContext(TypeContext);

    const handleChangeId = (value: number) => {
        setId(value)
        navigate('../../Pages/ProductDetail')
    }

    console.log(setId)
    
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
                        onClick={() => handleChangeId(product.id)}
                    />
                ))}
            </div>
            <Button text="View All"/>
        </section>
    )
}