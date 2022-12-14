import { useEffect, useState } from "react";
import { getCategories, getProductsOfCategory } from "../../helper/api-helper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";

import SearchInput from "../UI/SearchInput";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const Header = (props) => {
  const [categories, setCategories] = useState([]);

  const totalAmount = useSelector((state) => state.cartSlice.totalAmount);

  useEffect(() => {
    getCategories().then((x) => setCategories(x.data));
  }, []);

  const showProductsOfCategory = (x) => {
    getProductsOfCategory(x).then((x) =>
      props.onSelectedProducts(x.data.products)
    );
  };

  return (
    <header className="bg-amber-400 p-7 overflow-hidden">
      <div className="flex justify-between items-center mb-1">
        <span>
          <Link to={"/MyShoppingApp/"}>
            <p className="h-10 font-semibold text-lg">Home</p>
          </Link>
        </span>
        <SearchInput />
        <div className="flex gap-5">
          <div>
            <Link className="flex gap-1 font-semibold text-lg items-center">
              <MdAccountCircle className="text-2xl"></MdAccountCircle>My account
            </Link>
          </div>
          <div>
            <Link to={"/my-cart"} className="flex gap-1 font-semibold text-lg items-center">
              <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
              <span>{`(${totalAmount})`}</span>
              My cart
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories.map((x, i) => (
          <SwiperSlide key={i} className="rounded-md text-xl font-semibold">
            <Link
              onClick={() => showProductsOfCategory(x)}
              to={`/products:${x}`}
              className="first-letter:uppercase "
            >
              {x}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Header;
