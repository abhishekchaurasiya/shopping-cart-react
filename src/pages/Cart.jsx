import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from "../components/CartItem"

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(1);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, currnetVal) => acc + currnetVal.price, 0))
  }, [cart])


  return (
    <div className='grid xs:grid-col-1 sm:grid-cols-1 md:grid-col-2 lg:grid-col-2 max-w-full m-auto h-full bg-slate-600'>
        {
          cart.length > 0 ?
            (<div className=' flex justify-evenly h-full bg-slate-600'>
              <div>
                {
                  cart.map((item, index) => {
                    return <CartItem item={item} key={item.id} itemIndex={index} />
                  })
                }
              </div>

              <div className='flex flex-col mt-20'>
                <div className=''>
                  <p className='text-[#2cc340] font-semibold text-lg'>Your Cart</p>
                  <p className='text-[#2cc340]  text-[35px] font-bold'>Summary</p>
                  <p className='text-[#2cc340] font-semibold mt-1'>Total Items:
                    <span className='ml-1 text-slate-300'>
                      {cart.length}
                    </span> </p>
                </div>

                <div className='mt-[250px] '>
                  <p className=' text-[#2cc340] font-semibold mt-1'>Total Amount:
                    <span className=' font-bold text-slate-300   ml-1'> ${Math.floor(totalAmount).toFixed(2)}</span> </p>
                  <button className=' bg-green-600 py-2 px-10 rounded-md text-white mt-4'>
                    Checkout Now
                  </button>
                </div>

              </div>

            </div>) :
            (<div className='flex flex-col justify-center items-center bg-black w-[100vw] h-[100vh] mt-0 fixed'>
              <h1 className='text-slate-600 font-bold text-[20px] underline'>Cart Empty</h1>
              <NavLink to={"/"}>
                <button className=' bg-green-600 py-2 px-12 rounded-md text-white mt-4 hover:bg-slate-700 transition duration-300 ease-in hover:font-bold'>
                  Shop Now
                </button>
              </NavLink>
            </div>)
        }
      </div>
  )
}

export default Cart
