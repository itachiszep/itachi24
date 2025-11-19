import dynamic from "next/dynamic";
import React from "react";

const PDFViewer = dynamic(() => import("./readerpdf.client"), {
  ssr: false
});

export default function Wrapper() {
  return <PDFViewer />;
}
