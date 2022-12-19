import { useSelector } from "react-redux";
import Card from "../UI/Card";

const FilteredProduct = () => {
  const selector = useSelector((state) => state.filterSlice.filteredProduct);
  console.log(selector);
  return selector.map((product, i) => (
    <Card
      key={i}
      id={product.id}
      img={product.images[0]}
      title={product.title}
      description={product.description}
      category={product.category}
      price={product.price}
    />
  ));
};

export default FilteredProduct;
