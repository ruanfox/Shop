import styles from "./Header.module.scss";

import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUserCircle2 } from "react-icons/lu";

import Vector from "./image/Vector.svg";

export function Header() {
    const handleClick = () => {
        console.log('O item está à venda!');
    };

    return(
        <div className={styles.header}>
            <h1>Shop.co</h1>
            <div className={styles.busca}>
                <div className={styles.shop}>
                <p>Shop</p>
                <img className={styles.vector} src={Vector} alt="image vector" />
                </div>
                <p onClick={handleClick}>On Sale</p>
                <p>New Arrivals</p>
                <p>Brands</p>
            </div>

            <form className={styles.input}>
                <input type="text" className={styles.search} placeholder="Search for products..." />
                <button type="submit" className={styles.button}><IoSearch className={styles.searchimg} /></button>
            </form>

            <div className={styles.shoppingUser}>
                <div className={styles.shopping}>
                    <button>
                        <PiShoppingCartSimpleBold className={styles.shoppingCart}/>
                    </button>
                </div>
                <div className={styles.user}>
                    <button>
                    <LuUserCircle2 className={styles.userCircle }/>
                    </button>
                </div>
            </div>
        </div>
    )
}