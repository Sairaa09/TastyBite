import React, { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import CartSvg from "../assets/cart-icon.svg";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/Slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [cartActive, setcartActive] = useState(false);

  // total-quantity
  const totalQuantity = cartItems.reduce(
    (totalQty, item) => totalQty + item.qty,
    0
  );

  // total-amount
  const totalAmount = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.qty * item.price;
    });
    return totalPrice;
  };

  //  checkout button
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/payment", { state: { items: cartItems } });
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart fixed top-3 right-3 lg:right-10 z-50 cursor-pointer">
        {/* cart-icon */}
        <img
          src={CartSvg}
          className=" h-10"
          onClick={() => setcartActive(true)}
        />
        <span
          className={`bg-white text-[#FE9E2B] text-center rounded-full text-xs font-bold px-1.5 py-0.5 absolute bottom-0 right-0 ${
            totalQuantity > 0 ? "block" : "hidden"
          }`}
        >
          {totalQuantity}
        </span>
      </div>
      <div
        className={`fixed right-0 top-0 w-full sm:w-[350px] h-full theme z-50 ${
          cartActive ? "block" : "hidden"
        } transition-all duration-800`}
      >
        <div className="flex items-center justify-between px-3 py-4">
          <span className="font-bold text-xl">My Orders</span>
          <lord-icon
            src="https://cdn.lordicon.com/nqtddedc.json"
            trigger="hover"
            colors="primary:#FE9E2B"
            style={{ width: "28px", cursor: "pointer" }}
            onClick={() => setcartActive(false)}
          ></lord-icon>
        </div>
        <div className="h-[66vh] overflow-scroll flex flex-col gap-1">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ItemCard
                key={index}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.qty}
              />
            ))
          ) : (
            <h2 className="text-center text-white text-xl pt-4">
              Your cart is empty
            </h2>
          )}
        </div>

        <div className="px-3 absolute w-full bottom-6">
          <h3 className="font-semibold">Items : {cartItems.length}</h3>
          <h3 className="font-semibold">Total Amount : {totalAmount()}</h3>
          <hr className="mt-2 border-gray-800" />
          <button
            className="bg-[#FE9E2B] text-white px-2 py-1 rounded-lg font-medium text-xl w-full mt-2 cursor-pointer disabled:bg-orange-300 disabled:cursor-not-allowed"
            onClick={handleCheckout}
            disabled={!cartItems?.length}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
