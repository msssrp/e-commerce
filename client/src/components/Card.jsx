import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
const Card = ({ item }) => {
  const { _id, name, image, price, description } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user, setCartTrigger, cartTrigger } = useContext(AuthContext);
  const handlerHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handlerAddtoCart = async (item) => {
    const cartItem = {
      productId: item._id,
      name: item.name,
      email: user.email,
      price: item.price,
      image: item.image,
      quantity: 1,
    };
    console.log(cartItem);
    if (user && user.email) {
      axios
        .post("http://localhost:8080/carts", cartItem)
        .then(() => {
          Swal.fire({
            title: "Product added in cart",
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          setCartTrigger(cartTrigger + 1);
        })
        .catch(() => {
          Swal.fire({
            title: "Please login before add product to cart",
            position: "center",
            icon: "warning",
            showCancelButton: true,
            showConfirmButton: false,
            confirmButtonText: "Login now",
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#D33",
            timer: 1500,
          });
        });
    }
  };
  return (
    <div className="card shadow-md relative mr-5 md:my-5">
      <div
        className="rating z-[1000] gap-1 right-2 top-2 absolute p-4 heartStar bg-red"
        onClick={handlerHeartClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={`${isHeartFilled ? "white" : "none"}`}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <Link>
        <figure>
          <img
            src={image}
            alt={name}
            className="hover:scale-105 transition-all duration-300 md:h-72 h-[250px] w-auto"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link>
          <h2 className="card-title">{name}</h2>
        </Link>
        <div className="overflow-hidden max-h-[48px] md:max-h-[70px] md:relative md:mb-[10px]">
          <p className="m-0">{description}</p>
        </div>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">{price}</h5>
          <button
            className="btn bg-red text-white"
            onClick={() => handlerAddtoCart(item)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
