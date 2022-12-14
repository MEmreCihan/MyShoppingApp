import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { toggleActions } from "../../store/toggleSlice";

const Cart = () => {
  const myCart = useSelector((state) => state.cartSlice.products);
  const totalPrice = useSelector((state) => state.cartSlice.totalPrice);
  const dispatch = useDispatch();

  const increaseProductHandler = (id, price) => {
    dispatch(
      cartActions.addToCart({
        id: id,
        price: price,
      })
    );
  };

  const removeProductHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const orderHandler = () => {
    dispatch(toggleActions.toggleOrder(true));
    dispatch(cartActions.removeAllProducts());
  };

  return (
    <Fragment>
      {myCart.length === 0 ? (
        <p className="text-2xl font-sans font-semibold">
          Your cart is empty, add product.
        </p>
      ) : (
        <div className="flex flex-col justify-center items-center bg-amber-400 mt-2">
          <h1 className="flex text-4xl text-black">My Cart</h1>
          <ul className="flex flex-wrap items-center justify-center">
            {myCart.map((item) => (
              <li key={item.id}>
                <div className="card card-compact w-64 bg-base-100 shadow-xl h-80 gap-2 m-4">
                  <figure>
                    <img
                      src={item.img}
                      alt={item.category}
                      className="h-20 mt-1"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between items-center">
                      <h3 className="card-title ">{`$${item.price}`}</h3>
                      <div className="flex gap-2 items-center justify-end">
                        <button
                          className="btn btn-warning hover:bg-amber-500"
                          onClick={() => removeProductHandler(item.id)}
                        >
                          -
                        </button>
                        <p className="text-xl">{`(${item.amount})`}</p>
                        <button
                          className="btn btn-warning hover:bg-amber-500"
                          onClick={() => {
                            increaseProductHandler(item.id, item.price);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className=" card-actions justify-around bg-white items-center m-2 rounded-lg ">
            <p className="text-2xl ">{`Total Price: $${totalPrice}`}</p>
            <button
              className="btn btn-warning m-2 hover:bg-amber-500"
              onClick={orderHandler}
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cart;
