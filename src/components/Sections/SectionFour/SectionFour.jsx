import React from "react";
import styles from "../SectionFour/SectionFour.module.scss";

const SectionFour = () => {
  return (
    <div>
      <div className={styles.boxEntry}>
        <div className={styles.containerEntry}>
          <div className={styles.topBox}>
            <h1>Best Sellers</h1>
            <h5></h5>
          </div>
          <div className={styles.bottomBox}>
            <div className={styles.imgWriteBox}>
              <div className={styles.imgBox}></div>
              <p>DYMO LABELWRITER 450 TURBO THERMAL LABEL PRINTER</p>
              <h5>$410.00</h5>
              <button>ADD TO CARD</button>
            </div>
            <div className={styles.imgWriteBox1}>
              <div className={styles.imgBox}></div>
              <p>DYMO LABELWRITER 450 TURBO THERMAL LABEL PRINTER</p>
              <h5>$410.00</h5>
              <button>ADD TO CARD</button>
            </div>
            <div className={styles.imgWriteBox2}>
              <div className={styles.imgBox}></div>
              <p>DYMO LABELWRITER 450 TURBO THERMAL LABEL PRINTER</p>
              <h5>$410.00</h5>
              <button>ADD TO CARD</button>
            </div>
            <div className={styles.imgWriteBox3}>
              <div className={styles.imgBox}></div>
              <p>DYMO LABELWRITER 450 TURBO THERMAL LABEL PRINTER</p>
              <h5>$410.00</h5>
              <button>ADD TO CARD</button>
            </div>
            <div className={styles.imgWriteBox4}>
              <div className={styles.imgBox}></div>
              <p>DYMO LABELWRITER 450 TURBO THERMAL LABEL PRINTER</p>
              <h5>$410.00</h5>
              <button>ADD TO CARD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
