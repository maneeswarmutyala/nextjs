import styles from "./products.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
const Products = (props) => {
  const { products, count } = props;
  const [list, setList] = useState(products);
  const getNextPageData = (page) => {
    console.log(page, products);
    setList(products.splice(0, 8));
  };
  const getPagination = () => {
    const paginationCount = parseInt((count / 8).toFixed());
    const tempArray = [...Array(paginationCount)];
    return (
      <>
        {tempArray.map((item, index) => {
          return (
            <button key={index + 1} onClick={() => getNextPageData(index + 1)}>
              {index + 1}
            </button>
          );
        })}
      </>
    );
  };
  useEffect(() => {
    if (!products?.length > 0) {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((products) => setList(products));
    } else {
      setList(list.splice(0, 8));
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className={styles.products}>
          {list?.map((product) => {
            return (
              <div className={styles.item} key={product.title}>
                <Image src={product.image} width={200} height={200} />
                <div>
                  <p>{product.title}</p>
                  <p>Price : ${product?.price}</p>
                  <p>Rating : {product?.rating?.rate}</p>
                  <button>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
        {getPagination()}
      </div>
    </>
  );
};
export default Products;
