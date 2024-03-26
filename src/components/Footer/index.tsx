import styles from "./Footer.module.scss";

import twitter from "./image/twitter.svg";
import facebook from "./image/facebook.svg";
import instagram from "./image/instagram.svg";
import github from "./image/github.svg";

import visa from "./image/visa.svg";
import masterCard from "./image/masterCard.svg";
import payPal from "./image/payPal.svg";
import applePay from "./image/applePay.svg";
import googlePay from "./image/googlePay.svg";

export function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.offers}>
                <h1>STAY UPTO DATE ABOUT<br/>OUR LATEST OFFERS</h1>
                <form className={styles.formOfers}>
                    <input type="text"  placeholder="Enter your email address"/>
                    <button>Subscribe to Newsletter</button>
                </form>
            </div>

            <div className={styles.footerInfo}>
                <div className={styles.footerBox1}>
                    <h1>SHOP.CO</h1>
                    <p>We have clothes that suits your style and <br/>which you’re proud to wear. From <br/>women to men.</p>
                    <div className={styles.social}>
                        <img src={twitter} alt="image twitter" />
                        <img src={facebook} alt="image facebook" />
                        <img src={instagram} alt="image instagram" />
                        <img src={github} alt="image github" />
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className={styles.footerBox}>
                    <h2>HELP</h2>
                    <p>Customer Support</p>
                    <p>DElivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={styles.footerBox}>
                    <h2>FAQ</h2>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div className={styles.footerBox}>
                    <h2>RESOURCES</h2>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>Youtube Playlist</p>
                </div>
            </div>
            <div className={styles.divider}>
            </div>
            <div className={styles.payment}>
                <div className={styles.payment2}>
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>

                    <div className={styles.payment3}>
                        <img src={visa} alt="image visa" />
                        <img src={masterCard} alt="image mastercard" />
                        <img src={payPal} alt="image payPal" />
                        <img src={applePay} alt="image applePay" />
                        <img src={googlePay} alt="image googlePay" />
                    </div>
                </div>
            </div>
        </div>
    )
}