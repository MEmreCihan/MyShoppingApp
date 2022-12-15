import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Modal from "./components/layout/Modal";

import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleActions } from "./store/toggleSlice";

function App() {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const dispatch = useDispatch();

  const isAdded = useSelector((state) => state.toggleSlice.productIsAdded);
  console.log(isAdded);
  
  if(isAdded){
    setTimeout(() => {
      dispatch(toggleActions.toggle(false));
    },1000)
  }

  const selectedProductsHandler = (x) => {
    setProductsByCategory(x);
  };

  return (
    <Fragment>
      {isAdded && <Modal />}
      <div className="min-h-[100vh] grid grid-rows-[max-content_auto_max-content]">
        <Header onSelectedProducts={selectedProductsHandler} />
        <Main selectedProducts={productsByCategory} />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
