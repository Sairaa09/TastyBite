import React from "react";
import { useDispatch } from "react-redux";
import {setSearch} from '../redux/Slices/SearchSlice'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between  items-center px-3 md:px-20 py-4  bg-transparent backdrop-blur-3xl z-30  fixed top-0 w-full">
      {/* logo */}
      <div className="logo text-3xl font-medium cursor-pointer" onClick={()=>navigate('/')}>TastyBite</div>
      {/* searchbar */}
      <div className="search w-[40%] md:w-[50%] mr-12">
        <input type="text" placeholder='Search' className='bg-[#353333] px-5 py-2 rounded-lg w-full outline-none border-none focus:shadow-[0px_0px_2px_1px_#FE9E2B] text-white  ' onChange={(e)=>dispatch(setSearch(e.target.value))}/>
     
      </div>
    
    </nav>
  );
};

export default Navbar;
