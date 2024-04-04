import { Divisor } from "../../components/Divider"
import { FilterProducts } from "../../components/FilterProducts"

import styles from "./Category.module.scss"

import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export function CategoryPage() {
    return(
        <div className={styles.categoryPage}>
            <Divisor />
            <div className={styles.categoryPage1}>
                <div className={styles.filters}>
                    <section className={styles.titleFilter}>
                        <p>Home</p>
                        <MdOutlineKeyboardArrowRight  className={styles.arrow}/>
                        <p>Casual</p>
                    </section>
                    <FilterProducts />
                </div>
                
                <section className={styles.products}>
                    <div className={styles.titleFilter}>
                        <h1>Casual</h1>
                        <p>Showing 1-10 of 100 Products Sort by: Most Popular</p>
                    </div>
                    <div className={styles.containerProducts}>
                        
                    </div>
                </section>
            </div>
            <Divisor />
            <section className={styles.pagination}>
                <button className={styles.previous}>
                    <IoMdArrowBack className={styles.arrow}/>
                    Previous
                </button>
                <div className={styles.pages}>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>2</p>
                    </div>
                    <div>
                        <p>3</p>
                    </div>
                    <div>
                        <p>...</p>
                    </div>
                    <div>
                        <p>8</p>
                    </div>
                    <div>
                        <p>9</p>
                    </div>
                    <div>
                        <p>10</p>
                    </div>
                </div>
                <button className={styles.next}>
                    Next
                    <IoMdArrowForward className={styles.arrow}/>
                </button>
            </section>
        </div>
    )
}