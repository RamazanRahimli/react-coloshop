import React from "react";
import styles from "../Header/Header.module.scss";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.withBox}>
          <div className={styles.topBox}>
            <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
            <div className={styles.writeBox}>
              <p>USD</p>
              <p>English</p>
              <p>My Account</p>
            </div>
          </div>
          </div>
          <div className={styles.withBoxBottom}>
          <div className={styles.bottomBox}>
            <div className={styles.leftBox}>
              <h2>LOGO <p>SHOP</p> </h2>
            </div>
            <div className={styles.mediumBox}>
              <nav>
                <ul>
                  <li><a href="/">HOME</a></li>
                  <li><a href="/basket">Basket</a></li>
                  <li><a href="/Wishlist">Wishlist</a></li>
                  <li><a href="/DashBoard">DashBoard</a></li>
                  <li><a href="">BLOG</a></li>
                  <li><a href="">CONTACT</a></li>
                </ul>
              </nav>
            </div>
            <div className={styles.rightBox}>
              <p><CiSearch /></p>
              <p><IoPerson /></p>
              <p className={styles.shopBox}><FaShoppingCart /></p>
              <h5><GiHamburgerMenu /></h5>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
