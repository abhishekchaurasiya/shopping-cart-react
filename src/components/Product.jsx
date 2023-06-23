import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart")
  }

  const removeToCart = () => {
    dispatch(remove(item.id));
    toast.error("Item remove from Cart")
  }

  return (
    <div className='flex flex-col justify-between items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] gap-3 p-4 mt-10 ml-5 rounded-xl
   hover:scale-110 transition duration-300 ease-in hover:shadow-[0_8px_35px_rgb(0,0,0,0.12)]'
    >
      <div>
        <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1' >
          {`${item.title}`}
        </p>
      </div>
      <div>
        <p className='w-40 text-gray-400 text-left font-normal text-[10px]'>
        {`${item.description.split(" ").slice(0, 10).join(" ")}...`}</p>
      </div>
      <div className='h-[80px]'>
        <img src={item.image} className='w-full h-full' />
      </div>
      <div className='flex justify-evenly gap-6 items-center w-full mt-4'>
        <div>
          <p className=' text-green-600 font-semibold text-[15px]'>${item.price}</p>
        </div>
        {
          cart.some((cartItem) => cartItem.id === item.id) ?
            (
                <button
                className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-2 uppercase 
                text-[10px] hover:bg-gray-700 hover:text-white transition duration-500 ease-in'
                onClick={removeToCart}> Remove Item
              </button>
            ) :
            (
              <button className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-2 uppercase 
                text-[10px] hover:bg-gray-700 hover:text-white transition duration-500 ease-in' 
                onClick={addToCart}>
                Add to Cart
              </button>
            )
        }

      </div>
    </div>
  )
}

export default Product
