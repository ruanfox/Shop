import { useContext } from "react";
import { useProducts } from "../../hooks/useProducts"
import { CardProdutcs } from "../CardProduct";
import styles from "./ContainerProducts.module.scss"
import { TypeContext } from "../../context/TypeProvider";
import { useNavigate } from "react-router-dom";

export function ContainerProducts(){
    const {data} = useProducts();
    const {setId} = useContext(TypeContext);
    
    const navigate= useNavigate();

    const handleChangeId = (value: number) => {
        setId(value)
        navigate('../../Pages/ProductDetail')
    }
    

    return(
        <div className={styles.containerProducts}>
            {
                data?.map( product => 
                    <CardProdutcs
                        key={product.id}
                        imageProduct={product.image_url[0]}
                        nameProduct={product.name}
                        valorProduct={product.price}
                        nota={product.quality}
                        onClick={() => handleChangeId(product.id)}
                    />
                )
            }
        </div>
    )
}