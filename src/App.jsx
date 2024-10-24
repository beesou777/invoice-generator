import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BillingForm from "./components/BillingForm";
import Item from "./components/Item";
import { counterContext } from "/src/context/Context";

// Import PDF components from react-pdf
import { PDFViewer } from "@react-pdf/renderer";
import Pdf from "./pdfMaker/Pdf";

function App() {
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [invoice, setInvoice] = useState(1);
  const [Tinvoice, setTinvoice] = useState("");
  const [Temail, setTemail] = useState("");
  const [Tadress, setTadress] = useState("");
  const [Finvoice, setFinvoice] = useState("");
  const [Femail, setFemail] = useState("");
  const [Fadress, setFadress] = useState("");

  return (
    <>
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
        <div className="w-screen bg-customTomato flex justify-center gap-6">
          <div className="w-7/12 bg-whiteColor mt-8 rounded-lg">
            <Navbar />
            <BillingForm />
            <Item />
          </div>
          <div className="w-64 h-72 mt-8">
            <Sidebar />
          </div>
        </div>

        <Pdf
          tax={tax}
          discount={discount}
          invoice={invoice}
          Tinvoice={Tinvoice}
          Temail={Temail}
          Tadress={Tadress}
          Finvoice={Finvoice}
          Femail={Femail}
          Fadress={Fadress}
        />

        {/* <div className="pdf-viewer mt-8">
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <Pdf
              tax={tax}
              discount={discount}
              invoice={invoice}
              Tinvoice={Tinvoice}
              Temail={Temail}
              Tadress={Tadress}
              Finvoice={Finvoice}
              Femail={Femail}
              Fadress={Fadress}
            />
          </PDFViewer>
        </div> */}
      </counterContext.Provider>
    </>
  );
}

export default App;
