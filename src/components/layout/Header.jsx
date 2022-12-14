import { useEffect, useState } from "react";
import { getCategories, getProductsOfCategory } from "../../helper/api-helper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector } from "react-redux";

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
    <header className="bg-orange-200 p-6 overflow-hidden">
      <div className="flex  justify-between items-center">
        <span>
          <Link to={"/"}>
            <img alt="" src="/logo192.png" className="h-10" />
          </Link>
        </span>
        <div className="flex gap-1 ">
          <input
            className="rounded-xl w-96 h-8 border-solid border-red-600"
            placeholder="Search product or category"
          />
          <BiSearchAlt className="text-3xl text-slate-600" />
        </div>
        <div className="flex gap-5">
          <div>
            <Link className="flex gap-1">
              <MdAccountCircle className="text-2xl"></MdAccountCircle>My account
            </Link>
          </div>
          <div>
            <Link to={"/my-cart"} className="flex gap-1">
              <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
              <span>{totalAmount}</span>
              My cart
            </Link>
          </div>
        </div>
      </div>
      {/* swipper (slides per view) kullan */}
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
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
          <SwiperSlide key={i}>
            <Link
              onClick={() => showProductsOfCategory(x)}
              to={`/products:${x}`}
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
