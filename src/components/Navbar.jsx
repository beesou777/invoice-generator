import { useContext } from "react";
import React, { useState } from "react";
import { counterContext } from "/src/context/Context";

export default function Navbar({formattedDate}) {
  const value = useContext(counterContext);
  const [quantity, setQuantity] = useState(1); // State for quantity

  

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    value.setInvoice(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between mt-10 ml-10 mr-10 mb-4">
        <div>
          <div>
            <p className="text-base font-semibold">
              Current Date:{" "}
              <span className="font-normal text-sm">{formattedDate}</span>
            </p>
          </div>

          <div>
            <p className="text-base font-semibold flex gap-2 items-center mt-3">
              Due Date:
              <span className="">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="bg-semiBlack p-2 font-normal text-sm rounded-md"
                />
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">
            Invoice Number:
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity} // Controlled value from state
              step="1"
              onChange={handleQuantityChange} // Handle input change
              className="ml-2 p-2 rounded-md h-10 w-20 bg-semiBlack focus:border-semiBlue focus:outline-none focus:border-4 focus:rounded-md focus:delay-300"
            />
          </p>
        </div>
      </div>
      <hr className="border-t-2 border-hrColor w-11/12 ml-8" />
    </>
  );
}
