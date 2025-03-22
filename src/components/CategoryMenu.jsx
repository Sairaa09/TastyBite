import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice";

const CategoryMenu = () => {
  const categoryImgs = [
    { category: "All", categoryImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wAB5pOnJQHt_62ruvGT0vx0lSbZQn6ILnw&s" },
    { category: "Lunch", categoryImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyYlwAjSh5kKfR_EgB_H6BmZEN9xYqsDzIQ&s" },
    { category: "Breakfast", categoryImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8urB392Au0zJHRxoFGcPn-eYmL-6yqGpew&s" },
    { category: "Dinner", categoryImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0XQ0-cwPx8ELwP7WweKmPXaLw9kV-LHBRA&s" },
    { category: "Snacks", categoryImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHaBFa7FiRkyfh-CHih30XycNALHqciQDUQ&s" },
  ];

  const [category, setcategory] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setcategory(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  let dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <h3 className="theme text-3xl pt-8 text-center font-medium">
        Find the best food
      </h3>
        {/* food categories */}
      <div className="flex justify-center items-center gap-3  py-8 flex-wrap  theme">
        <div
          className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
            selectedCategory === "All" ? "bg-[#1b1b1b]" : ""
          } `}
          onClick={() => dispatch(setCategory("All"))}
        >
          <div className={`w-20 h-20 overflow-hidden rounded-full `}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3wAB5pOnJQHt_62ruvGT0vx0lSbZQn6ILnw&s"
              alt=""
              className={`w-20 h-20 object-cover rounded-full hover:scale-110 transition-all duration-500 cursor-pointer `}
            />
          </div>
          <p className="font-medium pr-2">All</p>
        </div>

        {category.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
              selectedCategory === item ? "bg-[#1b1b1b]" : ""
            } `}
            onClick={() => dispatch(setCategory(item))}
          >
            <div className={`w-20 h-20 overflow-hidden rounded-full `}>
              <img
                src={
                  categoryImgs.find((img) => img.category === item)
                    ?.categoryImg || "default.png"
                }
                alt=""
                className={`w-20 h-20 object-cover rounded-full hover:scale-110 transition-all duration-500 cursor-pointer `}
              />
            </div>
            <p className="font-medium pr-2">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryMenu;
