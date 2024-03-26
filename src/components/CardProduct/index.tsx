import styles from "./CardProduct.module.scss";

import { LiaStarSolid } from "react-icons/lia";

interface CardProdutcsProps{
    imageProduct:string,
    nameProduct:string,
    valorProduct:number;
    nota:number;
    
}

export function CardProdutcs({imageProduct, nameProduct, valorProduct,nota}: CardProdutcsProps){
    return(
        <div className={styles.CardProdutcs}>
            <div className={styles.backgroundImage}>
                <img src={imageProduct} alt="image products" />
            </div>
            <div className={styles.infos}>
                <p className={styles.nameProduct}>{nameProduct}</p>
                <div className={styles.nota}>
                    <LiaStarSolid className={styles.star} /> 
                    <p>{nota}/5</p>
                </div>
                <p className={styles.valorProduct}>${valorProduct}</p>
            </div>
        </div>
    )
}