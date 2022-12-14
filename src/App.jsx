import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import { useState } from "react";

function App() {
  const [productsByCategory, setProductsByCategory] = useState([]);

  const selectedProductsHandler = (x) => {
    setProductsByCategory(x);
  };

  return (
    <div className="min-h-[100vh] grid grid-rows-[max-content_auto_max-content]">
      <Header onSelectedProducts={selectedProductsHandler}/>
      <Main selectedProducts={productsByCategory}/>
      <Footer />
    </div>
  );
}

export default App;
