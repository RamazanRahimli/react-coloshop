import React from "react";
import styles from "../SectionTwo/SectionTwo.module.scss";

const SectionTwo = () => {
  return (
    <div>
      <div className={styles.boxentry}>
        <div className={styles.containerEntry}>
          <div className={styles.imgBox}>
            <div className={styles.writeBox}>WOMEN'S</div>
          </div>
          <div className={styles.imgBox1}>
            <div className={styles.writeBox}>ACCESSORIES'S</div>
          </div>
          <div className={styles.imgBox2}>
            <div className={styles.writeBox}>MEN'S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
