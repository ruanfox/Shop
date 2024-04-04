import { Divisor } from "../../components/Divider"
import styles from "./ProductDetail.module.scss"

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { IoRemoveOutline } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import adjustments from "./image/Adjustments.svg"
import { SectionProdutcs } from "../../components/SectionProducts";

import productImage1 from "./image/productImage1.svg"
import productImage2 from "./image/productImage2.svg"
import productImage3 from "./image/productImage3.svg"
import productImage4 from "./image/productImage4.svg"
import { ProductReview } from "../../components/ProductReview";

export function ProductDetail(){

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
                    <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                    <div className={styles.evaluention}>
                        <LiaStarSolid  className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <LiaStarSolid className={styles.star}/>
                        <p>4.5/5</p>
                    </div>
                    <div className={styles.value}>
                        <p>$260</p>
                    </div>
                    <div className={styles.description}>
                        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    </div>
                    <Divisor />
                    <div className={styles.selectColor}>
                        <h2>Select Color</h2>
                        <div className={styles.color}>
                            <div className={styles.color1}></div>
                            <div className={styles.color2}></div>
                            <div className={styles.color3}></div>
                        </div>
                    </div>
                    <Divisor />
                    <div className={styles.chooseSize}>
                        <h2>Choose Size</h2>
                        <div className={styles.size}>
                            <button>Small</button>
                            <button>Medium</button>
                            <button>Large</button>
                            <button>X-Large</button>
                        </div>
                    </div>
                    <Divisor />
                    <div className={styles.cart}>
                        <div className={styles.quantidadeProduto}>
                            <button><IoAddOutline className={styles.quant}/></button>
                            <p>1</p>
                            <button><IoRemoveOutline className={styles.quant}/></button>
                        </div>

                        <button className={styles.addCart}>Add to Cart</button>
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

            <SectionProdutcs 
                title="YOU MIGHT ALSO LIKE"
                products={newArrivals}
            />
            
        </div>
    )
}