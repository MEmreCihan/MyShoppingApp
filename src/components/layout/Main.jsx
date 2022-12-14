import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getAllProducts } from "../../helper/api-helper";
import Card from "../UI/Card";
import Cart from "../cart/Cart";

const Main = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((x) => setAllProducts(x.data.products));
  }, []);

  return (
    <div className="bg-gray-100 flex flex-wrap items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <p className="justify-center text-9xl text-green-600">ANASAYFA</p>
          }
        ></Route>
        <Route
          path="/products"
          element={allProducts.map((product, i) => (
            <Card
              key={i}
              id={product.id}
              img={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          ))}
        ></Route>
        <Route
          path={`/products:${props.selectedProducts.category}`}
          element={props.selectedProducts.map((product, i) => (
            <Card
              key={i}
              id={i}
              img={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          ))}
        ></Route>
        <Route path="/my-cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
};

export default Main;