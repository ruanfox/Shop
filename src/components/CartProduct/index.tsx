import { useContext, useEffect, useState } from "react";
import styles from "./CartProduct.module.scss"

import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { TypeContext } from "../../context/TypeProvider";
import { ConversionReal } from "../../utils/conversion-real";

interface CartProductProps{
    id: number,
    name: string,
    size: string,
    color: string,
    price: number,
    quantity:number,
    idCart:number
}

export function CartProduct({ name, size, color, price, quantity, idCart}: CartProductProps){
    const {remove, updateQuantity,productCart , setProductCart} = useContext(TypeContext);
    const [newQuantity, setNewQuantity] = useState<number>(quantity);
   
    useEffect(() => {
        setNewQuantity(quantity)
    },[quantity])

    const handleChangeQuantityUpdate = (quantityUpdate: number) => {
        if (quantityUpdate >= 1) {
            setNewQuantity(quantityUpdate);
            updateQuantity(idCart, quantityUpdate);
        }
    }

    const handleChangeRemoveItem = () => {
        remove(idCart)
        setProductCart(productCart -1)
    }
    
    return(
        <div className={styles.cartProduct}>
            <div className={styles.imgProduct}>
                
            </div>
            <div className={styles.containerInformation}>
                <div className={styles.information}>
                    <h2>{name}</h2>
                    <p>Size: <span>{size}</span></p>
                    <p>Color: <span>{color}</span></p>
                    <p className={styles.valor}>${ConversionReal(price)}</p>
                </div>
                <div className={styles.amountProduct}>
                    <RiDeleteBinFill
                    onClick={() => handleChangeRemoveItem()}
                    className={styles.bin}
                    />
                    <div className={styles.amout}>
                        <IoAddOutline 
                        onClick={() => handleChangeQuantityUpdate(newQuantity + 1)}
                        className={styles.add}/>
                        <p>{newQuantity}</p>
                        <IoRemoveOutline
                        onClick={() => handleChangeQuantityUpdate(newQuantity - 1)}
                        className={styles.remove}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}