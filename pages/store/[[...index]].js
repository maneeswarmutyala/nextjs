import Products from "./../../components/products/products";
const Store = (props) => {
  return (
    <>
      <Products products= {props?.products} count={props?.count}/>
    </>
  );
};


export async function getServerSideProps() {
  let response = await fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((products) => {
      return products;
    });
  return {
    props: {
      products: response,
      count : response.length
    },
  };
}

export default Store;