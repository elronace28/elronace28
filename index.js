//Radio Button parent child
function myFunction(type, option) {
  let radio = document.getElementById(type);
  let text = document.getElementById(option);
  if (radio.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
    return;
  }
}

//PDF COORDINATE
const { degrees, PDFDocument, StandardFonts, rgb } = PDFLib;

async function modifyPdf() {
  // Fetch an existing PDF document
  const url =
    "https://www.dl.dropboxusercontent.com/s/kmdee75w44goksm/EARF_Template.pdf";
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();
  const names2 = document.getElementById("middleName1");
  const names = document.getElementById("lastName1");
  const names1 = document.getElementById("firstName1");
  let fileName = `EARF_${names.value},${names1.value} ${names2.value}.pdf`;

  let reqdate = new Date();

  // Get full date.
  let date =
    reqdate.getDate() +
    "/" +
    (reqdate.getMonth() + 1) +
    "/" +
    reqdate.getFullYear();

  // Get full time.
  let hrs = reqdate.getHours();
  let min = reqdate.getMinutes();
  //let sec = reqdate.getSeconds();
  let ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;

  let time = hrs + ":" + min + " " + ampm;

  let header = date + " " + "(" + time + ")";
  firstPage.drawText(header, {
    x: 105,
    y: 641,
    size: 7,
    font: helveticaFont,
  });

  //Employee Account Request Form
  //Employee Number
  const employeenumber = document.getElementById("employeenumber");
  firstPage.drawText(employeenumber.value, {
    x: 160,
    y: 706,
    size: 8,
    font: helveticaFont,
  });
  //Ticket No.
  const ticket = document.getElementById("ticketno");
  firstPage.drawText(ticket.value, {
    x: 420,
    y: 731.5,
    size: 6.5,
    font: helveticaFont,
  });
  //Last Name
  firstPage.drawText(names.value, {
    x: 160,
    y: 685,
    size: 8,
    font: helveticaFont,
  });
  //First Name

  firstPage.drawText(names1.value, {
    x: 280,
    y: 685,
    size: 8,
    font: helveticaFont,
  });
  //Middle Name

  firstPage.drawText(names2.value, {
    x: 420,
    y: 685,
    size: 8,
    font: helveticaFont,
  });
  //Email
  const email = document.getElementById("email");
  firstPage.drawText(email.value, {
    x: 150,
    y: 674.5,
    size: 6,
    font: helveticaFont,
  });
  //Department
  const department = document.getElementById("department");
  firstPage.drawText(department.value, {
    x: 150,
    y: 667,
    size: 6,
    font: helveticaFont,
  });
  //Contact Number
  const contactnumber = document.getElementById("contactnumber");
  firstPage.drawText(contactnumber.value, {
    x: 387,
    y: 674,
    size: 6,
    font: helveticaFont,
  });
  //JobTitle Number
  const jobtitle = document.getElementById("jobtitle");
  firstPage.drawText(jobtitle.value, {
    x: 387,
    y: 667,
    size: 6,
    font: helveticaFont,
  });
  //Workstation:to be filled by BUH
  //Windows Desktop
  const desktop = document.getElementById("desktop");
  firstPage.drawText(desktop.value, {
    x: 210,
    y: 626.5,
    size: 6,
    font: helveticaFont,
  });

  //Windows Laptop
  const laptop = document.getElementById("laptop");
  firstPage.drawText(laptop.value, {
    x: 210,
    y: 619,
    size: 6,
    font: helveticaFont,
  });

  //Apple MAC
  const apple = document.getElementById("applemac");
  firstPage.drawText(apple.value, {
    x: 210,
    y: 612,
    size: 6,
    font: helveticaFont,
  });

  //Justification
  const justify = document.getElementById("justification");
  firstPage.drawText(justify.value, {
    x: 140,
    y: 601,
    size: 6,
    font: helveticaFont,
  });

  //Enterprise Access Request
  //NT Login
  const ntlogin = document.getElementById("ntLogin");
  firstPage.drawText(ntlogin.value, {
    x: 250,
    y: 582,
    size: 6,
    font: helveticaFont,
  });

  //Email ID
  const emailid = document.getElementById("emailid");
  firstPage.drawText(emailid.value, {
    x: 250,
    y: 575,
    size: 6,
    font: helveticaFont,
  });

  //File Server Access
  const fsa = document.getElementById("fsa");
  firstPage.drawText(fsa.value, {
    x: 250,
    y: 567,
    size: 6,
    font: helveticaFont,
  });

  //VPN
  const vpn = document.getElementById("vpn");
  firstPage.drawText(vpn.value, {
    x: 250,
    y: 559,
    size: 6,
    font: helveticaFont,
  });

  //Remarks On Application
  const remarks = document.getElementById("remarks");
  firstPage.drawText(remarks.value, {
    x: 370,
    y: 535,
    size: 6,
    font: helveticaFont,
  });

  //Applications
  //BSS Checkbox
  const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
  <g id="surface1">
  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 15.90625 3.535156 L 6.1875 13.253906 L 2.09375 9.15625 L 1.28125 9.96875 L 5.78125 14.46875 L 6.1875 14.851562 L 6.589844 14.46875 L 16.71875 4.34375 Z M 15.90625 3.535156 "/>
  </g>
  </svg>`;

  var arraybss = [];
  var checkboxes = document.querySelectorAll("input[name=bss-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arraybss.push(checkboxes[i].value);
  }

  //VIEW BSS
  if (arraybss.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 543.5,
      scale: 0.5,
    });
  }
  //ADD BSS
  if (arraybss.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //EDIT BSS
  if (arraybss.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //DELETE BSS
  if (arraybss.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //EXPORT BSS
  if (arraybss.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //IMPORT BSS
  if (arraybss.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //ADMIN BSS
  if (arraybss.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //Radio Button Location
  var arrayloc = [];
  var radioButton = document.querySelectorAll("input[name=location]:checked");
  for (var i = 0; i < radioButton.length; i++) {
    arrayloc.push(radioButton[i].value);
  }
  //METRO MANILA
  if (arrayloc.includes("Metro Manila")) {
    {
      firstPage.drawSvgPath(svgPath, {
        color: rgb(0, 0, 0),
        x: 388.5,
        y: 667,
        scale: 0.5,
      });
    }
    //OTHERS
  } else if (arrayloc.includes("others")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 388.5,
      y: 660,
      scale: 0.5,
    });
  }
  //Enter Location
  const location = document.getElementById("otherlocation");
  if (arrayloc.includes("others")) {
    firstPage.drawText(location.value, {
      x: 387,
      y: 643,
      size: 7,
      font: helveticaFont,
    });
  }

  //Metro Manila
  const location1 = document.getElementById("loc");
  if (arrayloc.includes("Metro Manila")) {
    firstPage.drawText(location1.value, {
      x: 434.5,
      y: 660,
      size: 6,
      font: helveticaFont,
    });
  }
  //Radio Button New Account
  var arraynewaccount = [];
  var radioButton = document.querySelectorAll("input[name=account]:checked");
  for (var i = 0; i < radioButton.length; i++) {
    arraynewaccount.push(radioButton[i].value);
  }

  //Yes
  if (arraynewaccount.includes("Yes")) {
    {
      firstPage.drawSvgPath(svgPath, {
        color: rgb(0, 0, 0),
        x: 284.5,
        y: 716.5,
        scale: 0.7,
      });
    }

    //No
  } else if (arraynewaccount.includes("No")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 386.5,
      y: 716.5,
      scale: 0.7,
    });
  }

  //Radio Button Converge and Subsidiary
  var arraycon = [];
  var radioButton = document.querySelectorAll("input[name=radio1]:checked");
  for (var i = 0; i < radioButton.length; i++) {
    arraycon.push(radioButton[i].value);
  }

  //Converge
  if (arraycon.includes("Converge")) {
    {
      firstPage.drawSvgPath(svgPath, {
        color: rgb(0, 0, 0),
        x: 387.5,
        y: 731.8,
        scale: 0.6,
      });
    }

    //Subsidiary
  } else if (arraycon.includes("Subsidiary")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 387.5,
      y: 724.3,
      scale: 0.6,
    });
  }

  //OSS Checkbox
  var arrayoss = [];
  var checkboxes = document.querySelectorAll("input[name=oss-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arrayoss.push(checkboxes[i].value);
  }

  //VIEW OSS
  if (arrayoss.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 536,
      scale: 0.5,
    });
  }
  //ADD OSS
  if (arrayoss.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 536,
      scale: 0.5,
    });
  }

  //EDIT OSS
  if (arrayoss.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 536,
      scale: 0.5,
    });
  }

  //DELETE OSS
  if (arrayoss.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 536,
      scale: 0.5,
    });
  }

  //EXPORT OSS
  if (arrayoss.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 536,
      scale: 0.5,
    });
  }

  //IMPORT OSS
  if (arrayoss.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 536,
      scale: 0.5,
    });
  }

  //ADMIN OSS
  if (arrayoss.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 536,
      scale: 0.5,
    });
  }

  //SSP Checkbox
  var arrayssp = [];
  var checkboxes = document.querySelectorAll("input[name=ssp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arrayssp.push(checkboxes[i].value);
  }

  //VIEW SSP
  if (arrayssp.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 529,
      scale: 0.5,
    });
  }
  //ADD SSP
  if (arrayssp.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EDIT SSP
  if (arrayssp.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 529,
      scale: 0.5,
    });
  }

  //DELETE SSP
  if (arrayssp.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EXPORT SSP
  if (arrayssp.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 529,
      scale: 0.5,
    });
  }

  //IMPORT SSP
  if (arrayssp.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 529,
      scale: 0.5,
    });
  }

  //ADMIN SSP
  if (arrayssp.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 529,
      scale: 0.5,
    });
  }

  //OTRS Checkbox
  var arrayotrs = [];
  var checkboxes = document.querySelectorAll(
    "input[name=otrs-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayotrs.push(checkboxes[i].value);
  }

  //VIEW OTRS
  if (arrayotrs.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 522,
      scale: 0.5,
    });
  }
  //ADD OTRS
  if (arrayotrs.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 522,
      scale: 0.5,
    });
  }

  //EDIT OTRS
  if (arrayotrs.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 522,
      scale: 0.5,
    });
  }

  //DELETE OTRS
  if (arrayotrs.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 522,
      scale: 0.5,
    });
  }

  //EXPORT OTRS
  if (arrayotrs.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 522,
      scale: 0.5,
    });
  }

  //IMPORT OTRS
  if (arrayotrs.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 522,
      scale: 0.5,
    });
  }

  //ADMIN OTRS
  if (arrayotrs.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 522,
      scale: 0.5,
    });
  }

  //USP Checkbox
  var arrayusp = [];
  var checkboxes = document.querySelectorAll("input[name=usp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arrayusp.push(checkboxes[i].value);
  }

  //VIEW USP
  if (arrayusp.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 514.5,
      scale: 0.5,
    });
  }
  //ADD USP
  if (arrayusp.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //EDIT USP
  if (arrayusp.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //DELETE USP
  if (arrayusp.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //EXPORT USP
  if (arrayusp.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //IMPORT USP
  if (arrayusp.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //ADMIN USP
  if (arrayusp.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //iBASS Checkbox
  var arrayiBASS = [];
  var checkboxes = document.querySelectorAll(
    "input[name=ibass-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayiBASS.push(checkboxes[i].value);
  }

  //VIEW iBASS
  if (arrayiBASS.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 507.5,
      scale: 0.5,
    });
  }
  //ADD iBASS
  if (arrayiBASS.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //EDIT iBASS
  if (arrayiBASS.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //DELETE iBASS
  if (arrayiBASS.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //EXPORT iBASS
  if (arrayiBASS.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //IMPORT iBASS
  if (arrayiBASS.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //ADMIN iBASS
  if (arrayiBASS.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //DOCSIS Checkbox
  var arrayDOCSIS = [];
  var checkboxes = document.querySelectorAll(
    "input[name=docsis-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayDOCSIS.push(checkboxes[i].value);
  }

  //VIEW DOCSIS
  if (arrayDOCSIS.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 500.5,
      scale: 0.5,
    });
  }
  //ADD DOCSIS
  if (arrayDOCSIS.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //EDIT DOCSIS
  if (arrayDOCSIS.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //DELETE DOCSIS
  if (arrayDOCSIS.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //EXPORT DOCSIS
  if (arrayDOCSIS.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //IMPORT DOCSIS
  if (arrayDOCSIS.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //ADMIN DOCSIS
  if (arrayDOCSIS.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //U2000 Checkbox
  var arrayU2000 = [];
  var checkboxes = document.querySelectorAll(
    "input[name=u2000-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayU2000.push(checkboxes[i].value);
  }

  //VIEW U2000
  if (arrayU2000.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 493.5,
      scale: 0.5,
    });
  }
  //ADD U2000
  if (arrayU2000.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //EDIT U2000
  if (arrayU2000.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //DELETE U2000
  if (arrayU2000.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //EXPORT U2000
  if (arrayU2000.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //IMPORT U2000
  if (arrayU2000.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //ADMIN U2000
  if (arrayU2000.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //AVSystem Checkbox
  var arrayAVsystem = [];
  var checkboxes = document.querySelectorAll(
    "input[name=avsystem-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayAVsystem.push(checkboxes[i].value);
  }

  //VIEW AVSystem
  if (arrayAVsystem.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 486,
      scale: 0.5,
    });
  }
  //ADD AVSystem
  if (arrayAVsystem.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 486,
      scale: 0.5,
    });
  }

  //EDIT AVSystem
  if (arrayAVsystem.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 486,
      scale: 0.5,
    });
  }

  //DELETE AVSystem
  if (arrayAVsystem.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 486,
      scale: 0.5,
    });
  }

  //EXPORT AVSystem
  if (arrayAVsystem.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 486,
      scale: 0.5,
    });
  }

  //IMPORT AVSystem
  if (arrayAVsystem.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 486,
      scale: 0.5,
    });
  }

  //ADMIN AVSystem
  if (arrayAVsystem.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 486,
      scale: 0.5,
    });
  }

  //MRTG Checkbox
  var arrayMRTG = [];
  var checkboxes = document.querySelectorAll(
    "input[name=mrtg-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayMRTG.push(checkboxes[i].value);
  }

  //VIEW MRTG
  if (arrayMRTG.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 479,
      scale: 0.5,
    });
  }
  //ADD MRTG
  if (arrayMRTG.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 479,
      scale: 0.5,
    });
  }

  //EDIT MRTG
  if (arrayMRTG.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 479,
      scale: 0.5,
    });
  }

  //DELETE MRTG
  if (arrayMRTG.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 479,
      scale: 0.5,
    });
  }

  //EXPORT MRTG
  if (arrayMRTG.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 479,
      scale: 0.5,
    });
  }

  //IMPORT MRTG
  if (arrayMRTG.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 479,
      scale: 0.5,
    });
  }

  //ADMIN MRTG
  if (arrayMRTG.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 479,
      scale: 0.5,
    });
  }

  //CORIANT Checkbox
  var arrayCORIANT = [];
  var checkboxes = document.querySelectorAll(
    "input[name=coriant-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayCORIANT.push(checkboxes[i].value);
  }

  //VIEW CORIANT
  if (arrayCORIANT.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 472,
      scale: 0.5,
    });
  }
  //ADD CORIANT
  if (arrayCORIANT.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 472,
      scale: 0.5,
    });
  }

  //EDIT CORIANT
  if (arrayCORIANT.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 472,
      scale: 0.5,
    });
  }

  //DELETE CORIANT
  if (arrayCORIANT.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 472,
      scale: 0.5,
    });
  }

  //EXPORT CORIANT
  if (arrayCORIANT.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 472,
      scale: 0.5,
    });
  }

  //IMPORT CORIANT
  if (arrayCORIANT.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 472,
      scale: 0.5,
    });
  }

  //ADMIN CORIANT
  if (arrayCORIANT.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 472,
      scale: 0.5,
    });
  }

  //Facebook Checkbox
  var arrayFacebook = [];
  var checkboxes = document.querySelectorAll(
    "input[name=facebook-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayFacebook.push(checkboxes[i].value);
  }

  //VIEW Facebook
  if (arrayFacebook.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 464.5,
      scale: 0.5,
    });
  }
  //ADD Facebook
  if (arrayFacebook.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //EDIT Facebook
  if (arrayFacebook.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //DELETE Facebook
  if (arrayFacebook.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //EXPORT Facebook
  if (arrayFacebook.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //IMPORT Facebook
  if (arrayFacebook.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //ADMIN Facebook
  if (arrayFacebook.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //Youtube Checkbox
  var arrayYoutube = [];
  var checkboxes = document.querySelectorAll(
    "input[name=youtube-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayYoutube.push(checkboxes[i].value);
  }

  //VIEW Youtube
  if (arrayYoutube.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 457.5,
      scale: 0.5,
    });
  }
  //ADD Youtube
  if (arrayYoutube.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //EDIT Youtube
  if (arrayYoutube.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //DELETE Youtube
  if (arrayYoutube.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //EXPORT Youtube
  if (arrayYoutube.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //IMPORT Youtube
  if (arrayYoutube.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //ADMIN Youtube
  if (arrayYoutube.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //IT Ticketing Tool Checkbox
  var arrayITTicketingTool = [];
  var checkboxes = document.querySelectorAll(
    "input[name=it-ticketing-tool-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayITTicketingTool.push(checkboxes[i].value);
  }

  //VIEW IT Ticketing Tool
  if (arrayITTicketingTool.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 450.5,
      scale: 0.5,
    });
  }
  //ADD IT Ticketing Tool
  if (arrayITTicketingTool.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //EDIT IT Ticketing Tool
  if (arrayITTicketingTool.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //DELETE IT Ticketing Tool
  if (arrayITTicketingTool.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //EXPORT IT Ticketing Tool
  if (arrayITTicketingTool.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //IMPORT IT Ticketing Tool
  if (arrayITTicketingTool.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //ADMIN IT Ticketing Tool
  if (arrayITTicketingTool.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //TPD Ticketing Tool Checkbox
  var arrayTPDTicketingTool = [];
  var checkboxes = document.querySelectorAll(
    "input[name=tpd-ticketing-tool-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayTPDTicketingTool.push(checkboxes[i].value);
  }

  //VIEW TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 443,
      scale: 0.5,
    });
  }
  //ADD TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 443,
      scale: 0.5,
    });
  }

  //EDIT TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 443,
      scale: 0.5,
    });
  }

  //DELETE TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 443,
      scale: 0.5,
    });
  }

  //EXPORT TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 443,
      scale: 0.5,
    });
  }

  //IMPORT TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 443,
      scale: 0.5,
    });
  }

  //ADMIN TPD Ticketing Tool
  if (arrayTPDTicketingTool.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 443,
      scale: 0.5,
    });
  }

  //HCM Checkbox
  var arrayHCM = [];
  var checkboxes = document.querySelectorAll("input[name=hcm-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arrayHCM.push(checkboxes[i].value);
  }

  //VIEW HCM
  if (arrayHCM.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 436,
      scale: 0.5,
    });
  }
  //ADD HCM
  if (arrayHCM.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 436,
      scale: 0.5,
    });
  }

  //EDIT HCM
  if (arrayHCM.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 436,
      scale: 0.5,
    });
  }

  //DELETE HCM
  if (arrayHCM.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 436,
      scale: 0.5,
    });
  }

  //EXPORT HCM
  if (arrayHCM.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 436,
      scale: 0.5,
    });
  }

  //IMPORT HCM
  if (arrayHCM.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 436,
      scale: 0.5,
    });
  }

  //ADMIN HCM
  if (arrayHCM.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 436,
      scale: 0.5,
    });
  }

  //ERP Checkbox
  var arrayERP = [];
  var checkboxes = document.querySelectorAll("input[name=erp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arrayERP.push(checkboxes[i].value);
  }

  //VIEW ERP
  if (arrayERP.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 428.8,
      scale: 0.5,
    });
  }
  //ADD ERP
  if (arrayERP.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //EDIT ERP
  if (arrayERP.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //DELETE ERP
  if (arrayERP.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //EXPORT ERP
  if (arrayERP.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //IMPORT ERP
  if (arrayERP.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //ADMIN ERP
  if (arrayERP.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //Nap Locator Checkbox
  var arrayNapLocator = [];
  var checkboxes = document.querySelectorAll(
    "input[name=naplocator-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayNapLocator.push(checkboxes[i].value);
  }

  //VIEW Nap Locator
  if (arrayNapLocator.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 421.5,
      scale: 0.5,
    });
  }
  //ADD Nap Locator
  if (arrayNapLocator.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //EDIT Nap Locator
  if (arrayNapLocator.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //DELETE Nap Locator
  if (arrayNapLocator.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //EXPORT Nap Locator
  if (arrayNapLocator.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //IMPORT Nap Locator
  if (arrayNapLocator.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //ADMIN Nap Locator
  if (arrayNapLocator.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //Gsuite Checkbox
  var arrayGsuite = [];
  var checkboxes = document.querySelectorAll(
    "input[name=gsuite-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayGsuite.push(checkboxes[i].value);
  }

  //VIEW Gsuite
  if (arrayGsuite.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 414.5,
      scale: 0.5,
    });
  }
  //ADD Gsuite
  if (arrayGsuite.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //EDIT Gsuite
  if (arrayGsuite.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //DELETE Gsuite
  if (arrayGsuite.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //EXPORT Gsuite
  if (arrayGsuite.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //IMPORT Gsuite
  if (arrayGsuite.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //ADMIN Gsuite
  if (arrayGsuite.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //Domain Controller Checkbox
  var arrayDomainController = [];
  var checkboxes = document.querySelectorAll(
    "input[name=domain-controller-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayDomainController.push(checkboxes[i].value);
  }

  //VIEW Domain Controller
  if (arrayDomainController.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 407.3,
      scale: 0.5,
    });
  }
  //ADD Domain Controller
  if (arrayDomainController.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //EDIT Domain Controller
  if (arrayDomainController.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //DELETE Domain Controller
  if (arrayDomainController.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //EXPORT Domain Controller
  if (arrayDomainController.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //IMPORT Domain Controller
  if (arrayDomainController.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //ADMIN Domain Controller
  if (arrayDomainController.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //OSS User Management Checkbox
  var arrayOSSUserManagement = [];
  var checkboxes = document.querySelectorAll(
    "input[name=oss-user-mangement-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayOSSUserManagement.push(checkboxes[i].value);
  }

  //VIEW OSS User Management
  if (arrayOSSUserManagement.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 400.1,
      scale: 0.5,
    });
  }
  //ADD OSS User Management
  if (arrayOSSUserManagement.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //EDIT OSS User Management
  if (arrayOSSUserManagement.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //DELETE OSS User Management
  if (arrayOSSUserManagement.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //EXPORT OSS User Management
  if (arrayOSSUserManagement.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //IMPORT OSS User Management
  if (arrayOSSUserManagement.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //ADMIN OSS User Management
  if (arrayOSSUserManagement.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //Vcenter Checkbox
  var arrayVcenter = [];
  var checkboxes = document.querySelectorAll(
    "input[name=vcenter-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayVcenter.push(checkboxes[i].value);
  }

  //VIEW Vcenter
  if (arrayVcenter.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 393.1,
      scale: 0.5,
    });
  }
  //ADD Vcenter
  if (arrayVcenter.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //EDIT Vcenter
  if (arrayVcenter.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //DELETE Vcenter
  if (arrayVcenter.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //EXPORT Vcenter
  if (arrayVcenter.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //IMPORT Vcenter
  if (arrayVcenter.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //ADMIN Vcenter
  if (arrayVcenter.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //Smart Sheet Checkbox
  var arraySmartSheet = [];
  var checkboxes = document.querySelectorAll(
    "input[name=smartsheet-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arraySmartSheet.push(checkboxes[i].value);
  }

  //VIEW Smart Sheet
  if (arraySmartSheet.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 386,
      scale: 0.5,
    });
  }
  //ADD Smart Sheet
  if (arraySmartSheet.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 386,
      scale: 0.5,
    });
  }

  //EDIT Smart Sheet
  if (arraySmartSheet.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 386,
      scale: 0.5,
    });
  }

  //DELETE Smart Sheet
  if (arraySmartSheet.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 386,
      scale: 0.5,
    });
  }

  //EXPORT Smart Sheet
  if (arraySmartSheet.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 386,
      scale: 0.5,
    });
  }

  //IMPORT Smart Sheet
  if (arraySmartSheet.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 386,
      scale: 0.5,
    });
  }

  //ADMIN Smart Sheet
  if (arraySmartSheet.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 386,
      scale: 0.5,
    });
  }

  //Tableau Checkbox
  var arrayTableau = [];
  var checkboxes = document.querySelectorAll(
    "input[name=tableau-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arrayTableau.push(checkboxes[i].value);
  }

  //VIEW Tableau
  if (arrayTableau.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 375.5,
      scale: 0.5,
    });
  }
  //ADD Tableau
  if (arrayTableau.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //EDIT Tableau
  if (arrayTableau.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //DELETE Tableau
  if (arrayTableau.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //EXPORT Tableau
  if (arrayTableau.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //IMPORT Tableau
  if (arrayTableau.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //ADMIN Tableau

  if (arrayTableau.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, fileName, "application/pdf");
}
