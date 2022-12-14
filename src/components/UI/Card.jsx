import { cartActions } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const { id, img, title, category, description, price } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isAdded]);

  const addToCartHandler = () => {
    setIsAdded(true);
    dispatch(
      cartActions.addToCart({
        id,
        img,
        title,
        description,
        category,
        price,
      })
    );
  };
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl h-80 gap-2 m-4">
      {isAdded && <LoadingSpinner />}
      <figure>
        <img src={props.img} alt={props.category} className="h-20 mt-1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end items-center">
          <h3 className="card-title ">{`$${props.price}`}</h3>
          <button className="btn btn-primary" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
