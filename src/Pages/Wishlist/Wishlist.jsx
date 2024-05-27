import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import styles from '../../components/Sections/SectionProduct/SectionProduct.module.scss'

const Wishlist = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://66530e8d813d78e6d6d70cae.mockapi.io/project/wishlist')
        .then((res)=>
        setData(res.data))
    }
    useEffect(()=>{getData()},[])

    const DeleteItem = (item) => {
        axios.delete(`https://66530e8d813d78e6d6d70cae.mockapi.io/project/wishlist/${item}`)
        setTimeout(() => {
            getData()
        }, 500);
    }


  return (
    <div>
      <Header/>

      
      <div className={styles.bottomBox}>
            {data &&
              data.map((item) => (
                <div className={styles.productBox}>
                  <img src={item.thumbnail} alt="" />
                  <p>{item.title}</p>
                  <h5>${item.price}</h5>
                  <div className={styles.addBox}>
                    <button onClick={()=>DeleteItem(item.id)}>Delete</button>
                  </div>
                </div>
              ))}
          </div>
    </div>
  )
}

export default Wishlist
