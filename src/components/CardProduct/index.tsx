import { ConversionReal } from "../../utils/conversion-real";
import styles from "./CardProduct.module.scss";

import { LiaStarSolid } from "react-icons/lia";

interface CardProdutcsProps{
    imageProduct:string,
    nameProduct:string,
    valorProduct:number;
    nota:number;
    onClick?: () => void;
}

export function CardProdutcs({imageProduct, nameProduct, valorProduct,nota , onClick}: CardProdutcsProps){
    const valorInReais = ConversionReal(valorProduct);

    return(
        <div 
            className={styles.CardProdutcs}
            onClick={onClick}
            >
            <div className={styles.backgroundImage}>
                <img src={imageProduct} alt="image products" />
            </div>
            <div className={styles.infos}>
                <p className={styles.nameProduct}>{nameProduct}</p>
                <div className={styles.nota}>
                    <LiaStarSolid className={styles.star} /> 
                    <p>{nota}/5</p>
                </div>
                <p className={styles.valorProduct}>${valorInReais}</p>
            </div>
        </div>
    )
}