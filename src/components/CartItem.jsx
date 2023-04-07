import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md"
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from cart!")
  };


  return (
    <div>
      <div className='flex items-center gap-x-12 mt-9 bg-[#110f19] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-5 px-5 rounded-md hover:shadow-[0_8px_35px_rgb(0,0,0,0.22)]  hover:scale-105 transition duration-300 ease-in '>
        <div>
          <img src={item.image} width={200} className='rounded-md'/>
        </div>
        <div>
          <div className='flex flex-col justify-center items-center gap-y-3 mr-5'>
            <h1 className='text-white font-semibold text-lg w-40 mt-1'>
              {item.title}
            </h1>
            <h4 className='w-40 text-gray-400  font-normal text-[10px]'>
              {`${item.description.split(" ").slice(0, 10).join(" ")}...`}
            </h4>
          </div>

          <div className='flex justify-between items-center mt-5 mr-5'>
            <p className=' text-[#04da1f] font-semibold text-[15px]'>${item.price}</p>
            <div
              onClick={removeFromCart}
              className=' cursor-pointer bg-[#045a50] rounded-full p-2 '
            ><MdDelete className='text-[25px] text-white' /></div>
          </div>
        </div>
      </div>
      <div className=' border-2 border-gray-300 mt-6 mb-16'></div>
    </div>
  )
}

export default CartItem
