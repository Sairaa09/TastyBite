import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/Slices/CartSlice";
import backIcon from "../assets/back.svg";

const Payment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { items } = location.state || { items: [] };
  const totalAmount = () => {
    let totalPrice = 0;
    items.map((item) => {
      totalPrice += item.qty * item.price;
    });
    return totalPrice;
  };
  const handlePayment = (e) => {
    e.preventDefault();

    if (items.length > 0) {
      dispatch(clearCart());
      navigate("/success");
    }
  };

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center theme ">
      {/* left side  */}
      <div
        className={`w-1/2 flex flex-col items-center justify-start  gap-12 mb-4 lg:h-screen pt-16 transition-all duration-1000
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-50"
          }`}
      >
        <div className="flex items-center justify-center gap-2">
          <img
            src={backIcon}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />

          <span
            className="bg-orange-300 text-amber-800 rounded-sm text-sm font-medium p-1 px-2.5  cursor-pointer md:block"
            onClick={() => navigate("/")}
          >
            Back
          </span>
        </div>
        <div>
          <p className="font-medium text-white text-xl">Pay</p>
          <h2 className="font-bold text-2xl">Rs.{totalAmount()}</h2>
        </div>
        <div className="w-full lg:pl-55 flex flex-col justify-end gap-3">
          {items.length > 0 &&
            items.map((item, index) => (
              <div
                key={index}
                className="flex  justify-between items-center text-white  border border-gray-600 pb-2 border-x-0 border-t-0 mr-10"
              >
                <span className="font-medium">{item.name}</span>
                <span className="font-medium">Rs.{item.price}</span>
              </div>
            ))}
        </div>
      </div>

      {/* right side */}
      <div
        className={`w-full lg:w-1/2  h-screen flex  justify-center items-start  border border-l-gray-600 border-y-0 border-r-0 `}
      >
        <form
          className={`flex flex-col items-start  justify-center gap-4 mt-16 transition-all duration-1000
          ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-50"
          }`}
          onSubmit={handlePayment}
        >
          <h1 className="text-[#FE9E2B] font-medium text-xl hidden lg:block">
            Pay With Card
          </h1>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-white text-sm font-medium">Email</span>
            <input
              type="email"
              required
              placeholder="Email"
              className="border border-white w-full px-2 py-2 rounded-md text-white"
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-white text-sm font-medium ">
              Card information
            </span>
            <input
              type="number"
              pattern="[0-9\s]{13,19}"
              maxLength="19"
              placeholder="1234 1234 1234 1234"
              required
              className="border border-white text-white  w-full px-2 py-2 rounded-tl-md rounded-tr-md mt-2 "
            />
            <div>
              <input
                type="date"
                className="border border-white w-1/2 px-2 py-2 rounded-bl-md text-white border-t-0 "
                required
              />
              <input
                type="number"
                placeholder="CVC"
                className="border border-white border-t-0 border-l-0 text-white w-1/2 px-2 py-2 rounded-br-md"
                maxLength={4}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-white text-sm font-medium">
              Cardholder name
            </span>
            <input
              type="text"
              placeholder="Full name on card"
              className="border border-white w-full px-2 py-2 rounded-md text-white"
              required
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <span className="text-white text-sm font-medium">
              Country or region
            </span>
            <select
              name="country"
              required
              className="border border-white w-full px-2 py-2 rounded-md text-white bg-[#0F0F0F]"
            >
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BR">Brazil</option>
              <option value="BG">Bulgaria</option>
              <option value="CA">Canada</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
              <option value="GR">Greece</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IT">Italy</option>
              <option value="JP">Japan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="MY">Malaysia</option>
              <option value="MX">Mexico</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NZ">New Zealand</option>
              <option value="NG">Nigeria</option>
              <option value="NO">Norway</option>
              <option value="PK">Pakistan</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="QA">Qatar</option>
              <option value="RU">Russia</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SG">Singapore</option>
              <option value="ZA">South Africa</option>
              <option value="KR">South Korea</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="VN">Vietnam</option>
              <option value="YE">Yemen</option>
            </select>
          </div>

          <button
            className="w-full bg-blue-600 text-blue-300 font-medium text-center py-2 rounded-md text-lg my-4 cursor-pointer"
            type="submit"
          >
            Pay
          </button>
          <div className="flex gap-3 px-4 text-gray-500 text-sm">
            <p>
              Powered by <b>stripe</b>
            </p>
            <span className=" h-full border border-gray-400"></span>
            <p className="flex gap-4">
              <span>Terms</span>
              <span>Privacy</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
