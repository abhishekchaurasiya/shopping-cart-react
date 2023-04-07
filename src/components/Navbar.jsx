import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import logo from "../assets/logoImage.png"
import { useSelector } from 'react-redux'

const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className=''>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink>
          <div className=' ml-20'>
            <img src={logo} width={150} className='text-white' />
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 space-x-6 mr-10">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className='relative '>
              <FaShoppingCart className='text-[22px]' />
              {
                cart.length > 0 &&
                <span className=' absolute bg-green-700 -top-1 -right-2 flex text-xs justify-center items-center w-5 h-5 rounded-full
                 animate-bounce text-white'>
                  {cart.length}
                </span>
              }


            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
