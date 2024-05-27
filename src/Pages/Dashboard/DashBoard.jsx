import React, { useEffect, useState } from "react";
import styles from "../Dashboard/Dashboard.module.scss";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useFormik } from "formik";

const DashBoard = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://66530e8d813d78e6d6d70cae.mockapi.io/project/basket")
      .then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);

  const DeleteItem = (item) => {
    axios.delete(
      `https://66530e8d813d78e6d6d70cae.mockapi.io/project/basket/${item}`
    );
    setTimeout(() => {
      getData();
    }, 500);
  };

  const formik = useFormik({
    initialValues: {
        thumbnail: '',
        title: '',
        email: '',
    },
    onSubmit: values => {
       axios.post(`https://66530e8d813d78e6d6d70cae.mockapi.io/project/basket` , values)
       setTimeout(() => {
        getData()
       }, 500);
    },
});


  return (
    <div>
    <Header />




    <div className={styles.containerDash}>

        <form onSubmit={formik.handleSubmit}>
            <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.thumbnail}
            />
             <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
             <input
                id="price"
                name="price"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.price}
            />
            

            <button type="submit" className={styles.btn}>Submit</button>
        </form>


        <div className={styles.dash}>
            {data && data.map((item) => (
                <div className={styles.dashCards}>
                    <img src={item.thumbnail} alt="" />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <button onClick={() => DeleteItem(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
</div>
  );
};

export default DashBoard;
