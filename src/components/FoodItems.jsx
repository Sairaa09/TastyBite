import React from "react";
import Items from "../data/FoodData.js";
import FoodCart from "./FoodCart";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = (name) => toast.success(`Added ${name}`);

  return (
    <div className="my-10 mb-30">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 px-5  gap-4 gap-y-7">
        {Items.filter((item) => {
          if (category === "All") {
            return item.name.toLowerCase().includes(search.toLowerCase());
          } else {
            if (category === item.category) {
              return item.name.toLowerCase().includes(search.toLowerCase());
            }
          }
        }).map((item, index) => {
          return (
            <FoodCart
              key={index}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              description={item.desc}
              rating={item.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodItems;
