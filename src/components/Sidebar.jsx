import React, { useContext } from "react";
import { FaPercent } from "react-icons/fa6";
import { counterContext } from "/src/context/Context";


export default function Sidebar() {
  const value = useContext(counterContext);
  const handleChangeTax = (e) => {
    value.setTax(e.target.value);
  };
  const handleChangeDiscount = (e) => {
    value.setDiscount(e.target.value);
  };
  return (
    <>
      <div>
        <div>
          <button className="bg-blue-400 w-full h-12 rounded-lg text-white font-bold text-sm hover:bg-blue-500 ">
            Review Invoice
          </button>
          <hr className="border-t-2 border-hrColor  my-2" />
        </div>
        <div className="mb-8">
          <label htmlFor="" className="text-base font-semibold">
            Tax rate:
          </label>
          <div className="flex items-center border-borderBlack border-2 rounded-md ">
            <input
              type="number"
              id="quantity" // Added an id for accessibility
              name="quantity" // Specify a name for form submission
              className="bg-white h-8 p-2 border border-semiBlack rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced styles
              placeholder="0.0" // Placeholder text for guidance
              min="1" // Set minimum value to 1
              step="1" // Specifies that the input should only accept whole numbers
              onChange={handleChangeTax}
            />
            <div className="pl-5">
              <FaPercent className="text-blackPercent text- " />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-base font-semibold">
            Discount rate:
          </label>
          <div className="flex items-center border-borderBlack border-2 rounded-md ">
            <input
              type="number"
              id="quantity" // Added an id for accessibility
              name="quantity" // Specify a name for form submission
              className="bg-white h-8 p-2 border border-semiBlack rounded-md focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" // Enhanced styles
              placeholder="0.0" // Placeholder text for guidance
              min="1" // Set minimum value to 1
              step="1" // Specifies that the input should only accept whole numbers
              onChange={handleChangeDiscount}
            />
            <div className="pl-5">
              <FaPercent className="text-blackPercent text- " />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
