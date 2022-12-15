import { cartActions } from "../../store/cartSlice";
import { toggleActions } from "../../store/toggleSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const { id, img, title, category, description, price } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(toggleActions.toggle(true));
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
