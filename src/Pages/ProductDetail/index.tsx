import { Divisor } from "../../components/Divider";
import styles from "./ProductDetail.module.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import adjustments from "./image/Adjustments.svg";
import { ProductReview } from "../../components/ProductReview";
import { useContext, useState } from "react";
import { TypeContext } from "../../context/TypeProvider";
import { useProducts } from "../../hooks/useProducts";
import { Button } from "../../components/Button";
import { ColorBox } from "../../components/ColorBox";
import { ConversionReal } from "../../utils/conversion-real";

const colors = {
    green: '#00C12B',
    red: '#F50606',
    yellow: '#F5DD06',
    orange: '#F57906',
    babyBlue: '#06CAF5',
    blue: '#063AF5',
    purple: '#7D06F5',
    pink: '#F506A4',
    white: '#FFFFFF',
    black: '#000000',
}


export function ProductDetail() {
    const { id, add, productCart, setProductCart} = useContext(TypeContext);
    const { data } = useProducts();
    const [ selectedSize , setSelectedSize] = useState<string>();
    const [selectedColor, setSelectedColor] = useState<string>();
    const [ quantity, setQuantity ] = useState<number>(0)
    
    const selectedProduct = data?.find((product) => product.id === id);

    const valorInReais = selectedProduct ? ConversionReal(selectedProduct.price) : 0;


    const handleChangeFilterSize = (size: string) => {
        setSelectedSize(size)
    }

    const handleChangeSelectedColor = (color: string) => {
        setSelectedColor(color)
    }

    const handleChangeAddCart = () => {
        if (selectedProduct && selectedSize && selectedColor) {
            setProductCart(productCart + 1);
    
            add({
                idCart: productCart,
                name: selectedProduct.name,
                image: selectedProduct.image_url[0],
                price: selectedProduct.price,
                quantity: quantity,
                size: selectedSize,
                color: selectedColor,
                id: selectedProduct.id
            });
        }
    
    }

    return(
        <div className={styles.productDetail}>
            <Divisor />
            <div className={styles.reoutesPages}>
                <div className={styles.routes}>
                    <p>Home</p>
                    <MdOutlineKeyboardArrowRight className={styles.arrow}/>
                </div>
                <div className={styles.routes}>
                    <p>Shop</p>
                    <MdOutlineKeyboardArrowRight className={styles.arrow}/>
                </div>
                <div className={styles.routes}>
                    <p>Men</p>
                    <MdOutlineKeyboardArrowRight className={styles.arrow}/>
                </div>
                <div className={styles.routes}>
                    <p>T-Shirsts</p>
                </div>

            </div>

            <section className={styles.product}>
                <div className={styles.secondary}>
                    <div className={styles.ImgProduct}>
                    
                    </div>
                    <div className={styles.ImgProduct}>
                    
                    </div>
                    <div className={styles.ImgProduct}>

                    </div>
                </div>
                <div className={styles.mainImg}>

                </div>
            
                <div className={styles.descriptionProduct}>
                    <h1>{selectedProduct?.name}</h1>
                    <div className={styles.evaluention}>
                        <LiaStarSolid  className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <p>{selectedProduct?.quality}</p>
                    </div>
                    <div className={styles.value}>
                        <p>${valorInReais}</p>
                    </div>
                    <div className={styles.description}>
                        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    </div>
                    <Divisor />
                    <div className={styles.selectColor}>
                        <h2>Select Color</h2>
                        <div className={styles.color}>
                            {
                                selectedProduct?.color.map((color, index) => (
                                    <ColorBox
                                        key={index}
                                        style={{backgroundColor: colors[color as keyof typeof colors]}}
                                        onClick={() => handleChangeSelectedColor(color)}
                                        classeName={selectedColor === color ? styles.selectedColor : ""}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Divisor />
                    <div className={styles.chooseSize}>
                        <h2>Choose Size</h2>
                        <div className={styles.size}>
                            {
                                selectedProduct?.size.map((size, index) => (
                                    <Button 
                                        key={index}
                                        text={size}
                                        onClick={() => handleChangeFilterSize(size)} 
                                        className={selectedSize === size ? styles.selected : ''}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <Divisor />
                    <div className={styles.cart}>
                        <div className={styles.quantidadeProduto}>
                            <button><IoAddOutline 
                                className={styles.quant}
                                onClick={() => setQuantity(quantity + 1)}
                            /></button>
                            <p>{quantity}</p>
                            <button><IoRemoveOutline 
                                className={styles.quant}
                                onClick={() => setQuantity(quantity -1)}
                            /></button>
                        </div>

                        <button
                            className={styles.addCart}
                            onClick={() => handleChangeAddCart()}
                            >Add to Cart
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.options}>
                <p>Product Details</p>
                <p>Rating & Reviews</p>
                <p>FAQs</p>
            </section>
            <Divisor />
            <section className={styles.informations}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <h2>All Reviews</h2>    
                        <p>({451})</p>
                    </div>
                    <div className={styles.filters}>
                        <button className={styles.adjustments}>
                            <img src={adjustments} alt="" />
                        </button>

                        <button className={styles.latest}>
                            Latest
                            <IoIosArrowDown className={styles.arrow}/>
                        </button>

                        <button className={styles.review}>
                            Write a Review
                        </button>
                    </div>
                </div>
                
                <div className={styles.render}>
                    <ProductReview />
                    <ProductReview />
                    <ProductReview />
                </div>
                <div className={styles.LoadReviews}>
                    <button className={styles.loadReviews}>Load More Reviews</button>
                </div>
            </section>
            
        </div>
    )
}