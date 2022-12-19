import { getAllProducts } from "../../helper/api-helper";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filterSlice";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((x) => setAllProducts(x.data.products));
  }, []);

  const filterBySearch = () => {
    const searchKey = inputRef.current.value.trim().toLowerCase();
    if(searchKey.length === 0) {
      return;
    }
    const filteredProduct = allProducts.filter(
      (product) =>
        product.category.includes(searchKey) ||
        product.title.toLowerCase().includes(searchKey)
    );
    dispatch(filterActions.filter(filteredProduct));
  };

  const searchHandler = (event) => {
    event.preventDefault();
    filterBySearch();

    inputRef.current.value = "";
  };
  return (
    <form>
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          ref={inputRef}
          typeof="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Products, Categories..."
          required
        />
        <button
          onClick={searchHandler}
          className="text-gray absolute right-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Link to={"/filteredProducts"}>Search</Link>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
