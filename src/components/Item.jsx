import { useContext, useEffect } from "react";
import React, { useState } from "react";
import CurrencyImg from "/src/images/currency.svg"; // Ensure this path is correct
import { RiDeleteBinLine } from "react-icons/ri";
import { counterContext } from "/src/context/Context";
import PropTypes from 'prop-types';
export default function Item({items,setItems,tAmout,setTamout,DAmout,setDamout,sum}) {
  
  const value = useContext(counterContext);

  

  const handleAdd = () => {
    setItems([...items, { name: "", description: "", quantity: 1, price: 0 }]); 
  };

  const handleChange = (e, i) => {
    const updatedItems = [...items];
    const { name, value } = e.target;
    updatedItems[i] = { ...updatedItems[i], [name]: value }; // Update specific item properties
    setItems(updatedItems);
  };

  const handleDelete = (i) => {
    const updatedItems = [...items];
    updatedItems.splice(i, 1); // Remove the specified index
    setItems(updatedItems);
  };

  

  useEffect(() => {
    const taxPercent = Number(value.tax) / 100;
    setTamout(taxPercent * sum);

    const discountPercent = Number(value.discount) / 100;
    setDamout(discountPercent * sum);
  }, [sum, value.tax, value.discount]); // Dependency array to update when sum, tax, or discount changes

  return (
    <>
      <div className="w-11/12 mt-2 rounded-lg mx-8">
        <div className="flex justify-between">
          <div>
            <p className="text-base font-semibold">ITEM</p>
          </div>
          <div className="w-80">
            <ul className="flex justify-evenly">
              <li className="text-base font-semibold">QTY</li>
              <li className="text-base font-semibold">PRICE/RATE</li>
              <li className="text-base font-semibold">ACTION</li>
            </ul>
          </div>
        </div>
        <hr className="border-t-2 border-hrColor my-2" />
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex justify-between w-full">
              <div className="w-7/12">
                <input
                  type="text"
                  name="name"
                  placeholder="Item name"
                  value={item.name}
                  onChange={(e) => handleChange(e, i)}
                  className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full mb-1"
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Item description"
                  value={item.description}
                  onChange={(e) => handleChange(e, i)}
                  className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
                />
              </div>

              <div className="w-80">
                <ul className="flex justify-evenly text-base font-semibold">
                  <li>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleChange(e, i)}
                      className="p-2 rounded-md h-10 w-14 bg-semiBlack focus:border-gray-400 focus:outline-none"
                    />
                  </li>
                  <li className="flex items-center bg-semiBlack">
                    <div className="bg-semiBlack w-8 rounded-full h-8 ml-2 flex justify-center items-center border-black border-2">
                      <img src={CurrencyImg} alt="CurrencyImage" />
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleChange(e, i)}
                      className="p-2 rounded-md h-10 w-24 bg-transparent focus:outline-none"
                    />
                  </li>
                  <li>
                    <div
                      className="w-10 h-10 bg-redColor flex justify-center items-center rounded-md hover:bg-redHColor ml-2 cursor-pointer"
                      onClick={() => handleDelete(i)}
                    >
                      <RiDeleteBinLine className="text-white" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-t-2 border-hrColor my-2" />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handleAdd}
          className="bg-blue-400 w-24 h-12 rounded-lg text-white font-bold text-sm hover:bg-blue-500 mx-10"
        >
          Add items
        </button>

        {/* Totals Section */}
        <div className="float-right w-7/12 h-44 mr-5 mt-20">
          <div className="flex justify-between mx-5 my-2">
            <label htmlFor="" className="text-base font-semibold">
              Subtotal:
            </label>
            <p>&#x930;&#x941; {sum}.00</p>
          </div>

          <div className="flex justify-between mx-5 my-2">
            <label htmlFor="" className="text-base font-semibold">
              Discount:
            </label>
            <p>
              ( {value.discount}%) &#x930;&#x941; {DAmout}
            </p>
          </div>

          <div className="flex justify-between mx-5 my-2">
            <label htmlFor="" className="text-base font-semibold">
              Tax:
            </label>
            <p>
              ( {value.tax}%) &#x930;&#x941; {tAmout}
            </p>
          </div>
          <hr className="border-t-2 border-hrColor mx-5" />

          <div className="flex justify-between mx-5 my-2 text-base font-semibold">
            <label htmlFor="">Total:</label>
            <p>&#x930;&#x941; {sum + tAmout - DAmout}</p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-hrColor my-2" />
      <div className="flex flex-col p-4 mb-10">
        <label htmlFor="notes" className="mb-2 font-semibold">
          Notes:
        </label>
        <textarea
          id="notes"
          rows="3"
          cols="50"
          className="bg-semiBlack p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          placeholder="Thanks for your business!"
          defaultValue=""
        />
      </div>
    </>
  );
}

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    total: PropTypes.number,
    
  })).isRequired,
  setItems: PropTypes.func.isRequired,
};