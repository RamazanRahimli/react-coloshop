import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../SectionProduct/SectionProduct.module.scss";
import { CiHeart } from "react-icons/ci";

const SectionProduct = () => {
  const [data, setData] = useState([]);

  const [seachItem, SetSearchItem] = useState("");

  const getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res.data.products);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const addToCart = () => {
    axios.post("https://66530e8d813d78e6d6d70cae.mockapi.io/project/basket");
  };
  const Wishlist = () => {
    axios.post("https://66530e8d813d78e6d6d70cae.mockapi.io/project/wishlist");
  };

  const sortedDataAZ = () => {
    const sorted = [...data].sort((a, b) => a.price - b.price);
    setData(sorted);
  };
  const sortedDataZA = () => {
    const sorted = [...data].sort((a, b) => b.price - a.price);
    setData(sorted);
  };

  const handleSearchChange = (item) => {
    SetSearchItem(item.target.value);
  };
  const FilterData = data.filter((item) =>
    item.title.toLowerCase().includes(seachItem.toLowerCase())
  );

  return (
    <div>
      <div className={styles.boxEntry}>
        <div className={styles.containerEntry}>
          <div className={styles.topBox}>
            <h1>New Arrivals</h1>
            <h5></h5>
            <div className={styles.categryBox}>
              <p>
                <a href="">ALL</a>
              </p>
              <p>
                <a href="">WOMENS</a>
              </p>
              <p>
                <a href="">ACCESSORIES</a>
              </p>
              <p>
                <a href="">MEN'S</a>
              </p>
            </div>
          </div>
          <div className={styles.searchBox}>
            <button onClick={sortedDataAZ}>Qiymet azdan-coxa</button>
            <button onClick={sortedDataZA}>Qiymet coxdan-aza</button>
            <input
              type="text"
              placeholder="Seach"
              onChange={handleSearchChange}
            />
          </div>
          <div className={styles.bottomBox}>
            {data &&
              FilterData.map((item) => (
                <div className={styles.productBox}>
                  <img src={item.thumbnail} alt="" />
                  <p>{item.title}</p>
                  <h5>${item.price}</h5>
                  <div className={styles.addBox}>
                    <button onClick={addToCart}>ADD TO CARD</button>
                    <p onClick={Wishlist}>
                      <CiHeart />
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProduct;
