import { useProducts } from "../../hooks/useProducts"
import { CardProdutcs } from "../CardProduct";
import styles from "./ContainerProducts.module.scss"

export function ContainerProducts(){
    const {data} = useProducts();
    console.log(data)
    return(
        <div className={styles.containerProducts}>
            {
                data?.map((data, index) => (
                    <CardProdutcs
                        key={index}
                        imageProduct={data.image_url[0]}
                        nameProduct={data.name}
                        valorProduct={data.price}
                        nota={data.quality}
                />
                ))
            }
        </div>
    )
}