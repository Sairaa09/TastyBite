import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setSearch} from '../redux/Slices/SearchSlice'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [searchValue, setsearchValue] = useState("")

  useEffect(() => {
    if(searchValue===""){
      dispatch(setSearch(""))
    }
  }, [searchValue])
  
  
  return (
    <nav className="flex justify-between  items-center px-3 md:px-20 py-4  bg-transparent backdrop-blur-3xl z-30  fixed top-0 w-full">
      {/* logo */}
      <div className="logo text-3xl font-medium cursor-pointer" onClick={()=>navigate('/')}>TastyBite</div>
      {/* searchbar */}
      <div className="search w-[40%] md:w-[50%] mr-12 relative">
        <input type="text" placeholder='Search' className='bg-[#353333] px-5 py-2 rounded-lg w-full outline-none border-none focus:shadow-[0px_0px_2px_1px_#FE9E2B] text-white ' onChange={(e) => setsearchValue(e.target.value)}
 />
      
<lord-icon
    src="https://cdn.lordicon.com/wjyqkiew.json"
    trigger="hover"
    colors="primary:#ffffff,secondary:#fe9e2b"
    style={{position:"absolute",top:"3px",right:'10px'}}
    onClick={()=>dispatch(setSearch(searchValue))}
   >
</lord-icon>
      </div>
    
    </nav>
  );
};

export default Navbar;



