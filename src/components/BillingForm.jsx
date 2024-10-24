import React, { useContext } from "react";
import { counterContext } from "/src/context/Context";

export default function BillingForm() {
  const value = useContext(counterContext);

  // Individual handlers for each field
  const handleTinvoice = (e) => {
    value.setTinvoice(e.target.value);
  };

  const handleTemail = (e) => {
    value.setTemail(e.target.value);
  };

  const handleTadress = (e) => {
    value.setTadress(e.target.value);
  };

  const handleFinvoice = (e) => {
    value.setFinvoice(e.target.value);
  };

  const handleFemail = (e) => {
    value.setFemail(e.target.value);
  };

  const handleFadress = (e) => {
    value.setFadress(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between mx-10 mt-5">
        {/* Bill to Section */}
        <div className="flex col flex-col gap-2 w-1/2">
          <label htmlFor="" className="text-base font-semibold">
            Bill to:
          </label>
          <div className="w-full">
            <input
              type="text"
              placeholder="Who is this invoice to?"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleTinvoice}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email address"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleTemail}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Billing address"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleTadress}
            />
          </div>
        </div>

        {/* Bill from Section */}
        <div className="flex col flex-col gap-2 w-1/2 ml-6">
          <label htmlFor="" className="text-base font-semibold">
            Bill from:
          </label>
          <div className="w-full">
            <input
              type="text"
              placeholder="Who is this invoice from?"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleFinvoice}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Email address"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleFemail}
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Billing address"
              className="bg-semiBlack p-2 font-normal text-sm rounded-md border border-gray-300 focus:border-pink-800 focus:outline-none w-full"
              onChange={handleFadress}
            />
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-hrColor w-11/12 ml-8 mt-10" />
    </>
  );
}
