import React, { useState } from 'react';
//import pdf from public folder
import file from './sample.pdf'
import { Document, Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();




export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }



  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />

      </Document>
      
    </div>
  );
}