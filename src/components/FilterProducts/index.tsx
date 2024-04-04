import styles from "./FilterProducts.module.scss"

import { MdKeyboardArrowUp, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Divisor } from "../Divider";

import grad from "./image/Frame.svg"
import { Button } from "../Button";

export function FilterProducts() {
    return(
        <section className={styles.Filters}>
                <div className={styles.filters}>
                    <h2>Filters</h2>
                    <img src={grad} alt="" />
                </div>
                <Divisor />
                <div className={styles.model}>
                    <div className={styles.title}>
                        <p>T-shirts</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Shorts</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Shirts</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Hoodie</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Jeans</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
                <Divisor />
                <div className={styles.price}>
                    <div className={styles.title}>
                        <h2>Price</h2>
                        <MdKeyboardArrowUp />
                    </div>
                </div>
                <Divisor />
                <div className={styles.colors}>
                    <div className={styles.title}>
                        <h2>Colors</h2>
                        <MdKeyboardArrowUp />
                    </div>
                    <div className={styles.colors1}>
                        <div className={styles.green}></div>
                        <div className={styles.red}></div>
                        <div className={styles.yellow}></div>
                        <div className={styles.orange}></div>
                        <div className={styles.babyBlue}></div>
                    </div>
                    <div className={styles.colors2}>
                        <div className={styles.blue}></div>
                        <div className={styles.purple}></div>
                        <div className={styles.pink}></div>
                        <div className={styles.white}></div>
                        <div className={styles.black}> </div>
                    </div>
                </div>
                <Divisor />
                <div className={styles.size}>
                    <div className={styles.title}>
                        <h2>Size</h2>
                        <MdKeyboardArrowUp />
                    </div>

                    <Button text="XX-Small"/>
                    <Button text="X-Small"/>
                    <Button text="Small"/>
                    <Button text="Medium"/>
                    <Button text="Large"/>
                    <Button text="X-Large"/>
                    <Button text="XX-Large"/>
                    <Button text="3X-Large"/>
                    <Button text="4X-large"/>

                </div>
                <Divisor />
                <div className={styles.dressStyle}>
                    <div className={styles.title}>
                        <h2>Dress Style</h2>
                        <MdKeyboardArrowUp />
                    </div>
                    <div>
                        <p>Casual</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Formal</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Party</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                    <div>
                        <p>Gym</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
                <Button text="Apply Filter" />
            </section>
    )
}