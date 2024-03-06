/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import Container from "./Container"
import Image from '../assets/1.webp'
import { FaCartShopping } from "react-icons/fa6";
import { MdLibraryAdd } from "react-icons/md";



const SingleProduct = () => {
  return (
  <div>
    
        <div className="w-[300px] rounded-md shadow-xl p-5  ">
            <div className="border-b border-solid bottom-2 border-border">

        <img src={Image} alt="" className="py-16 mx-auto " />
            </div>
        <p className="py-6 font-bold">HP 250 G8 Core i3 11th Gen 15.6" 4GB RAM 1TB HDD Laptop</p>
        <ul className='px-4 pb-6 space-y-2 list-disc border-b border-solid bottom-2 border-border'>
            <li>Processor: Intel Core i3-1115G4 (6MB Cache, 3.00 GHz up to 4.10 GHz)</li>
            <li>RAM: 4GB DDR4 3200MHz, Storage: 1TB HDD</li>
            <li>Display: 15.6" FHD (1920 x 1080)</li>
            <li>Features: Full-Size island-style keyboard, Type-C</li>
        </ul>
        <div className="py-6 text-center">

        <span className="text-xl font-bold text-icon">55,000৳</span>
        </div>
        <div className="w-64 ">
        <button className="flex items-center  justify-center w-full py-2 text-xl font-bold text-blue-900 bg-[#f5f6fc] rounded-md gap-x-2 hover:text-white hover:bg-blue-800 "><FaCartShopping/> Buy Now</button>
        <button className="flex items-center justify-center w-full py-2 text-base font-bold bg-[#f5f6fc] rounded-md gap-x-2  hover:bg-[#f5f6fc] mt-5 "><MdLibraryAdd/> Add to cart </button>

        </div>
        </div>
        
     
  </div>
  )
}

export default SingleProduct