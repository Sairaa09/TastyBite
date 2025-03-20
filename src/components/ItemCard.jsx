import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart,incrementQuantity,decrementQuantity } from '../redux/Slices/CartSlice'
import { toast } from "react-hot-toast"; 
const ItemCard = ({id,img,name,price,quantity}) => {
    const dispatch = useDispatch()
  return (
   <>
    <div className='flex justify-between bg-[#1b1b1b] px-2 py-1 mt-2'>
       <div className='flex gap-3'>
       <img src={img} alt="" className='w-20 h-18 object-cover rounded-lg ' />
        <div className='flex flex-col gap-2 leading-5'>
            <h2 className='text-white '>{name}</h2>
            <span>Rs.{price}</span>
        </div>
       </div>

       <div className='flex flex-col items-end'>
        <span>
        <lord-icon
    src="https://cdn.lordicon.com/skkahier.json"
    trigger="hover"
    colors="primary:#e4e4e4"
    style={{width:"20px", cursor:"pointer"}}
    onClick={()=>{dispatch(removeFromCart({id,name,img,price,quantity}));
    toast(`${name}`, {
        icon: '👋',
      });
}}
   
    >
</lord-icon>
        </span>
         <div className='flex items-center gap-1'>
            <span>
            <lord-icon
    src="https://cdn.lordicon.com/sbnjyzil.json"
    trigger="hover"
    colors="primary:#e4e4e4,secondary:#e4e4e4"
    style={{width:"25px",cursor:"pointer"}}
    onClick={()=>  dispatch(incrementQuantity({id}) )}
    >
</lord-icon>
            </span>
            <span className='text-lg mb-2'>{quantity}</span>
            <span>
            <lord-icon
    src="https://cdn.lordicon.com/rypcsrlk.json"
    trigger="hover"
    colors="primary:#e4e4e4,secondary:#e4e4e4"
    style={{width:"25px",cursor:"pointer"}}
    onClick={()=> quantity>1? dispatch(decrementQuantity({id})): (quantity=0)}
    >
</lord-icon> 
            </span>
         </div>
       </div>
    </div>
   
   </>
    
  )
}

export default ItemCard