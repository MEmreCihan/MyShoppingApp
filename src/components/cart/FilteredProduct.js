import { useSelector } from "react-redux";
import Card from "../UI/Card";

const FilteredProduct = () => {
  const selector = useSelector((state) => state.filterSlice.filteredProduct);
  console.log(selector);

  const hasProduct = useSelector((state) => state.filterSlice.hasProduct);

  return (
    <div>
      {hasProduct &&
        selector.map((product, i) => (
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
      {!hasProduct && <p className="text-2xl font-sans font-semibold">Oops, no product in stock!</p>}
    </div>
  );
};

export default FilteredProduct;
