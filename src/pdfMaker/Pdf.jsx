import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Pdf(props) {
  const handleDownload = () => {
    const doc = new jsPDF();
    console.log(props)
    // Invoice Header (Title, Invoice #, Amount Due)
    const title = "xyz"; // Your company name
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.text(title, 15, 20); // Title
    doc.setFontSize(10);
    doc.setTextColor("#888");
    doc.text(`Invoice #: ${props.invoice}`, 15, 28); // Invoice number
    doc.setTextColor("#507687");
    doc.setFontSize(16);
    doc.text(`Amount Due:`, 160, 20);
    doc.setFontSize(20);
    doc.setTextColor("#4CAF50");
    doc.text(`$ ${props.subTotal}`, 160, 30); // Amount due

    // Billing Information Section
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.setFont("Helvetica", "bold");
    doc.text("Billed to:", 15, 45);
    doc.text("Billed From:", 120, 45);
    doc.text("Date Of Issue:", 120, 75);

    // Billing to information
    doc.setFont("Helvetica", "normal");
    doc.text(props.Tinvoice, 15, 50);
    doc.text(props.Tadress, 15, 55);
    doc.text(props.Temail, 15, 60);

    // Billing from information
    doc.text(props.Finvoice, 120, 50);
    doc.text(props.Fadress, 120, 55);
    doc.text(props.Femail, 120, 60);

    // Date of issue
    doc.text(props.dateOfIssue, 120, 80);

    // Table for invoice items
    const itemsData = props.items.map(item => [
      item.quantity,
      item.description,
      `$ ${item.price}`,
      `$ ${item.price * item.quantity}`,
    ]);

    autoTable(doc, {
      head: [["QTY", "DESCRIPTION", "PRICE", "AMOUNT"]],
      body: itemsData,
      startY: 90, // Position below the billing info
      margin: { left: 15, right: 15 },
      theme: 'grid',
    });

    // Totals Section
    const finalY = doc.autoTable.previous.finalY + 10; // Final Y after the table

    doc.text("SUBTOTAL", 140, finalY);
    doc.text(`$ ${props.subTotal}`, 170, finalY);
    doc.text("TAX", 140, finalY + 10);
    doc.text(`$ ${props.tAmout}`, 170, finalY + 10);
    doc.text("DISCOUNT", 140, finalY + 20);
    doc.text(`$ ${props.DAmout}`, 170, finalY + 20);
    doc.setFont("Helvetica", "bold");
    doc.text("TOTAL", 140, finalY + 30);
    doc.text(`$ ${props.subTotal + props.tAmout - props.DAmout}`, 170, finalY + 30);

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <>
      <button onClick={handleDownload} className="bg-blue-600 text-white p-2">
        Download Invoice PDF
      </button>
    </>
  );
}
