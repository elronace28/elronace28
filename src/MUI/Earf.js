import { degrees, PDFDocument, StandardFonts, rgb } from 'PDFLib'

async function generatePdf() { 
  // Fetch an existing PDF document
  const url =
    "https://www.dl.dropboxusercontent.com/s/kmdee75w44goksm/EARF_Template.pdf";
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  //const helveticaFont = await pdfDoc.embedFont(StandardFonts.Courier);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

//Time and Date function
  let dateNow = new Date();

  // Get full date.
  let date =
    dateNow.getDate() +
    "/" +
    (dateNow.getMonth() + 1) +
    "/" +
    dateNow.getFullYear();

  // Get full time.
  let hrs = dateNow.getHours();
  let min = dateNow.getMinutes(0);
  //let sec = dateNow.getSeconds();
  let ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  let time = hrs + ":" + min + " " + ampm;

  let header = date + " " + "(" + time + ")";
 // Serialize the PDFDocument to bytes (a Uint8Array)
 const pdfBytes = await pdfDoc.save();
const download = download1 
 // Trigger the browser to download the PDF document
 download1(pdfBytes, fileName, "application/pdf");
 if (pdfBytes == "") {
   return false;
 }
}