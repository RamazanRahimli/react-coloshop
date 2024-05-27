import React from "react";
import styles from "../SectionFifty/SectionFiftty.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fatruck } from "@fortawesome/free-solid-svg-icons";

const SectionFifty = () => {
  return (
    <div>
      <div className={styles.boxEntry}>
        <div className={styles.containerEntry}>
          <div className={styles.logoWriteBox}>
          <div className={styles.logoWriteBox}>
          <FontAwesomeIcon icon="fatruck" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFifty;