import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Pdf(props) {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Set up the document title
    const title = "Lokesh Mart";
    doc.setTextColor("#507687");
    const textWidth = doc.getTextWidth(title);
    const xPos = (doc.internal.pageSize.width - textWidth) / 2;
    const yPos = 20;
    doc.setFontSize(20);
    doc.text(title, xPos, yPos);

    // Set up the 'Bill to' section
    doc.setFont("Helvetica", "bold");
    doc.setTextColor("#181C14");
    doc.setFontSize(12);
    doc.text("Bill to:", 15, 40);
    
    // Define Bill to table data
    const billToData = [
      { label: "Name", value: props.Tinvoice },
      { label: "Email", value: props.Temail },
      { label: "Address", value: props.Tadress },
    ];

    // Add the 'Bill to' table
    autoTable(doc, {
      head: [["Label", "Value"]],
      body: billToData.map(item => [item.label, item.value]),
      startY: 45, // Start below the 'Bill to:' text
      margin: { top: 10, left: 15, right: 15 }, // Add margins
      theme: 'grid',
    });

    // Move down to add the 'Bill from' section
    const billFromY = doc.autoTable.previous.finalY + 10; // 10 units below the previous table
    doc.text("Bill from:", 120, billFromY); // Positioning Bill from text

    // Define Bill from table data
    const billFromData = [
      { label: "Name", value: props.Finvoice },
      { label: "Email", value: props.Femail },
      { label: "Address", value: props.Fadress },
    ];

    // Add the 'Bill from' table
    autoTable(doc, {
      head: [["Label", "Value"]],
      body: billFromData.map(item => [item.label, item.value]),
      startY: billFromY + 5, // Start below the 'Bill from:' text
      margin: { top: 10, left: 120, right: 15 }, // Adjust margin
      theme: 'grid',
    });

    // Save the PDF
    doc.save("tables.pdf");
  };

  return (
    <>
      <button onClick={handleDownload} className="bg-pink-600">
        Download PDF
      </button>
    </>
  );
}
