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
    <div className="card card-compact relative pt-5 w-64 bg-base-100 h-80 shadow-xl gap-2 m-4">
      <figure>
        <img src={props.img} alt={props.category} className="h-20 mt-1" />
      </figure>
      <div className="card-body">
        <h2 className="card-title first-letter:uppercase">{props.title}</h2>
        <div className="line-clamp-2">{props.description}</div>
        <div className="card-actions absolute right-5 bottom-5 justify-end items-center">
          <h3 className="card-title ">{`$${props.price}`}</h3>
          <button className="btn btn-warning hover:bg-amber-500" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
