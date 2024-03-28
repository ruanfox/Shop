import styles from "./Header.module.scss";

import { IoSearch } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUserCircle2 } from "react-icons/lu";

import Vector from "./image/Vector.svg";
import { useState } from "react";


export function Header() {
    const [SelectItem, setSelectItem] = useState('');

    const handleClick = (item: string) => {
        setSelectItem(item)
    };

    return(
        <div className={styles.header}>
            <h1>Shop.co</h1>
            <div className={styles.busca}>
                <div className={styles.shop}>
                <p>Shop</p>
                <img className={styles.vector} src={Vector} alt="image vector" />
                </div>
                <p className={SelectItem === 'On Sale' ? styles.selected : ''} onClick={() => handleClick('On Sale')}>On Sale</p>
                <p className={SelectItem === 'New Arrivals' ? styles.selected : ''} onClick={() => handleClick('New Arrivals')}>New Arrivals</p>
                <p className={SelectItem === 'Brands'? styles.selected : ''} onClick={() => handleClick('Brands')}>Brands</p>
            </div>

            <form className={styles.input}>
                <input type="text" className={styles.search} placeholder="Search for products..." id="searchInput"/>
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