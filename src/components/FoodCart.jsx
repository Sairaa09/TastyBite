import React from "react";
import RatingSvg from "../assets/rating.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";

const FoodCart = ({
  id,
  img,
  name,
  price,
  description,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="  flex flex-col   text-white bg-[#1b1b1b] p-2 rounded-lg gap-1 ">
      {/* food-img */}
      <div className="h-[210px] overflow-hidden rounded-lg">
        <img
          src={img}
          alt=""
          className="rounded-lg w-full h-full  object-cover hover:scale-110 transition-all duration-500 cursor-grab"
        />
      </div>
      {/* food info */}

      <div className="flex justify-between pt-2 items-center">
        <h3 className="font-medium ">
          {name.length > 17 ? `${name.slice(0, 17)} ...` : name.slice(0, 20)}{" "}
        </h3>
        <span className="text-[#FE9E2B] ">Rs.{price}</span>
      </div>

      <p className="font-light text-gray-300">{description.slice(0, 50)} ...</p>

      <div className="flex items-center justify-between">
        <span className="flex">
          <img src={RatingSvg} alt="" className="w-5" />
          {rating}
        </span>

        <button
          className="cursor-pointer"
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
        >
          <lord-icon
            src="https://cdn.lordicon.com/pbrgppbb.json"
            trigger="hover"
            colors="primary:#FE9E2B"
            style={{ width: "40px", height: "40px" }}
          ></lord-icon>
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
