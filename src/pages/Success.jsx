import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import backImg from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
const Success = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  const navigate = useNavigate();

  return (
    <div className=" h-screen  theme">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          {" "}
          <BeatLoader color="#FE9E2B" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
          <button
            className="fixed top-5 left-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={backImg} alt="" />
          </button>
          <h2 className="text-3xl font-medium">Order Successful!</h2>
          <p className="text-white">Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
