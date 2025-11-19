import React, { useEffect, useState } from "react";

export default function ReaderPDF() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
      {
        title: "12 życiowych zasad — Antidotum na chaos",
        author: "Jordan B. Peterson",
        pdf: "/ksiazki/12 życiowych zasad- Antidotum na chaos -- Jordan B. Peterson -- ( WeLib.org ).pdf",
      },
      {
        title: "Advanced Security Testing with Kali Linux",
        author: "Daniel Dieterle",
        pdf: "/ksiazki/_OceanofPDF.com_Advanced_Security_Testing_with_Kali_Linux_-_Daniel_Dieterle.pdf",
      },
      {
        title:'Kali Linux Penetration Testing Bible',
        author:"Gus Khawaja",
        pdf: "/ksiazki/AnyConv.com__Kali Linux Penetration Testing Bible -- Gus Khawaja -- ( WeLib.org ).pdf",
      }
    ]);
  }, []);

  const openPDF = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "monospace",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        minHeight: "100vh",
      }}
    >
      {books.map((book, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem" }}>{book.title}</h1>
          <h2 style={{ fontSize: "1.2rem", color: "#fff", marginTop: "10px" }}>
            {book.author}
          </h2>

          <button
            onClick={() => openPDF(book.pdf)}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#000",
              color: "#FF0000",
              border: "2px solid #FF0000",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FF0000";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#000";
              e.target.style.color = "#FF0000";
            }}
          >
            Otwórz książkę w przeglądarce
          </button>
        </div>
      ))}
    </div>
  );
}
