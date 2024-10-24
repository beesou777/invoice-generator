import React, { createContext, useState } from "react";

// Create the context with a default value of an empty object
export const counterContext = createContext({});

export const CounterProvider = ({ children }) => {
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [invoice, setInvoice] = useState(1);
  const [Tinvoice, setTinvoice] = useState("");
  const [Temail, setTemail] = useState("");
  const [Tadress, setTadress] = useState("");
  const [Finvoice, setFinvoice] = useState("");
  const [Femail, setFemail] = useState("");
  const [Fadress, setFadress] = useState("");

  // Provide the context value as an object
  return (
    <counterContext.Provider
      value={{
        tax,
        setTax,
        discount,
        setDiscount,
        invoice,
        setInvoice,
        Tinvoice,
        setTinvoice,
        Temail,
        setTemail,
        Tadress,
        setTadress,
        Finvoice,
        setFinvoice,
        Femail,
        setFemail,
        Fadress,
        setFadress,
      }}
    >
      {children}
    </counterContext.Provider>
  );
};
