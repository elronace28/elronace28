//Radio Button parent child Location
function toggleLocation(type, option) {
  let radio = document.getElementById(type);
  let text = document.getElementById(option);
  if (radio.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
    return;
  }
}
function validateFields() {
var arrayValidation = [
  "employeeNumber",
  "lastName",
  "firstName",
  "middleName",
  "emailInput",
  "depatmentInput",
  "jobtitleInput",
  "contactNumberInput",
  "yes",
  "converge",
  "loc",
];
return arrayValidation.map((input) => {
  const elementInput = document.querySelector(`input[name=${input}]`);
  if (elementInput) {
    if (elementInput.value == "" || elementInput.value == null) {
      //form.classList.add('.needs-validation') 
      return false;
    }
    return true;
  }
});
}
//PDF COORDINATE
const { degrees, PDFDocument, StandardFonts, rgb } = PDFLib;
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
  firstPage.drawText(header, {
    x: 105,
    y: 641,
    size: 7,
  });

  // Get the width and height of the first page
  const middleNameElement = document.getElementById("middleName");
  const lastNameElement = document.getElementById("lastName");
  const firstNameElement = document.getElementById("firstName");
  let fileName = `EARF_${lastNameElement.value},${firstNameElement.value} ${middleNameElement.value}.pdf`;
  //Array Functions
  //Employee Account Request Form
  const inputArray = [
    firstPage.drawText(employeeNumber.value, {
      x: 160,
      y: 706,
      size: 8,
    }),
  ];
  [
    firstPage.drawText(ticketNumber.value, {
      x: 420,
      y: 731.5,
      size: 6.5,
    }),
  ];
  //Full Name
  [
    firstPage.drawText(lastNameElement.value, {
      x: 160,
      y: 685,
      size: 8,
    }),
  ];
  [
    firstPage.drawText(firstNameElement.value, {
      x: 280,
      y: 685,
      size: 8,
    }),
  ];
  [
    firstPage.drawText(middleNameElement.value, {
      x: 420,
      y: 685,
      size: 8,
    }),
  ];
  let fullName = `${firstNameElement.value} ${middleNameElement.value} ${lastNameElement.value} `;
  [
    firstPage.drawText(fullName.toUpperCase(), {
      x: 130,
      y: 115,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(emailInput.value, {
      x: 150,
      y: 674.5,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(departmentInput.value, {
      x: 150,
      y: 667,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(contactNumberInput.value, {
      x: 387,
      y: 674,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(jobtitleInput.value, {
      x: 387,
      y: 667,
      size: 6,
    }),
  ];
  //Workstation:to be filled by BUH
  [
    firstPage.drawText(desktopInput.value, {
      x: 210,
      y: 626.5,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(laptopInput.value, {
      x: 210,
      y: 619,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(appleInput.value, {
      x: 210,
      y: 612,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(justificationTextArea.value, {
      x: 147,
      y: 601,
      size: 6,
    }),
  ];
  //Enterprise Access Request
  [
    firstPage.drawText(ntLoginInput.value, {
      x: 250,
      y: 582,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(emailID.value, {
      x: 250,
      y: 575,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(fsaInput.value, {
      x: 250,
      y: 567,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(vpnInput.value, {
      x: 250,
      y: 559,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(remarksInput.value, {
      x: 370,
      y: 535,
      size: 6,
    }),
  ];
  //Other Tools
  [
    firstPage.drawText(toolsInputElement.value, {
      x: 285,
      y: 339,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(toolsInputElement1.value, {
      x: 285,
      y: 333,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(toolsInputElement2.value, {
      x: 285,
      y: 327,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(toolsInputElement3.value, {
      x: 285,
      y: 321,
      size: 6,
    }),
  ];
  [
    firstPage.drawText(toolsInputElement4.value, {
      x: 285,
      y: 315,
      size: 6,
    }),
  ];
  inputArray.forEach((input) => {
    const inputElement = document.getElementById(input);
    if (inputElement == "") {
      return false;
    }
  });
  

  //Applications
  const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
 <g id="surface1">
 <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 15.90625 3.535156 L 6.1875 13.253906 L 2.09375 9.15625 L 1.28125 9.96875 L 5.78125 14.46875 L 6.1875 14.851562 L 6.589844 14.46875 L 16.71875 4.34375 Z M 15.90625 3.535156 "/>
 </g>
 </svg>`;

  var arrayApplication = [
    "bss",
    "oss",
    "ssp",
    "otrs",
    "usp",
    "ibass",
    "docsis",
    "u2000",
    "avsystem",
    "mrtg",
    "coriant",
    "facebook",
    "youtube",
    "it-ticketing-tool",
    "tpd-ticketing-tool",
    "hcm",
    "erp",
    "naplocator",
    "gsuite",
    "domain-controller",
    "oss-user-management",
    "vcenter",
    "smartsheet",
    "tableau",
  ];
  let actionsStartingYCoordinate = 550.5;
  arrayApplication.forEach((type, index) => {
    let yCoordinateInterval = 7;
    //console.log(yCoordinateInterval);
    if (index >= 4 && index <= 8) {
      yCoordinateInterval = yCoordinateInterval + 0.5;
    }
    if (index == 23) {
      yCoordinateInterval = yCoordinateInterval + 3.5;
    }
    //console.log(yCoordinateInterval);
    actionsStartingYCoordinate =
      actionsStartingYCoordinate - yCoordinateInterval;
    var arrayYaxis = [];
    var actionArray = [
      "view",
      "add",
      "edit",
      "delete",
      "export",
      "import",
      "admin",
    ];
    var checkboxes = document.querySelectorAll(
      `input[name=${type}-options]:checked`
    );

    for (var i = 0; i < checkboxes.length; i++) {
      arrayYaxis.push(checkboxes[i].value);
    }
    let ActionsStartingXCoordinate = 162.5;
    actionArray.forEach((action) => {
      ActionsStartingXCoordinate = ActionsStartingXCoordinate + 26;
      //console.log(arrayYaxis.includes(action));
      if (arrayYaxis.includes(action)) {
        firstPage.drawSvgPath(svgPath, {
          color: rgb(0, 0, 0),
          x: ActionsStartingXCoordinate,
          y: actionsStartingYCoordinate,
          scale: 0.5,
        });
      }
    });
  });

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
    });
  }

  //Metro Manila
  const location1 = document.getElementById("loc");
  if (arrayloc.includes("Metro Manila")) {
    firstPage.drawText(location1.value, {
      x: 434.5,
      y: 660,
      size: 6,
    });
  }
  //Radio Button New Account
  var arraynewaccount = [];
  var newAccountRadioButton = document.querySelectorAll(
    "input[name=newAccount]:checked"
  );
  for (var i = 0; i < newAccountRadioButton.length; i++) {
    arraynewaccount.push(newAccountRadioButton[i].value);
  }

  //Yes
  if (arraynewaccount.includes("yes")) {
    {
      firstPage.drawSvgPath(svgPath, {
        color: rgb(0, 0, 0),
        x: 284.5,
        y: 716.5,
        scale: 0.7,
      });
    }

    //No
  } else if (arraynewaccount.includes("no")) {
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
  if (arraycon.includes("converge")) {
    {
      firstPage.drawSvgPath(svgPath, {
        color: rgb(0, 0, 0),
        x: 387.5,
        y: 731.8,
        scale: 0.6,
      });
    }

    //Subsidiary
  } else if (arraycon.includes("subsidiary")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 387.5,
      y: 724.3,
      scale: 0.6,
    });
  }
  //Application MS Office Checkbox
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll("input[name=msoffice]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("msOffice")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 342.5,
      scale: 0.5,
    });
  }

  //Application Instant Message check Box
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll(
    "input[name=instantmessage]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("instantMessage")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 335,
      scale: 0.5,
    });
  }

  //Application Auto CAD check Box
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll("input[name=autocad]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("autoCad")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 328,
      scale: 0.5,
    });
  }

  //Application WinSCP check Box
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll("input[name=winscp]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("winScp")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 321,
      scale: 0.5,
    });
  }

  //Application Foxit Reader check Box
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll("input[name=foxitreader]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("foxitReader")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 314,
      scale: 0.5,
    });
  }
  //Application BI Application check Box
  var arraymsapplication = [];
  var checkboxes = document.querySelectorAll(
    "input[name=biapplication]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    arraymsapplication.push(checkboxes[i].value);
  }
  if (arraymsapplication.includes("biApplication")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 307,
      scale: 0.5,
    });
  }
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, fileName, "application/pdf");
  if (pdfBytes == "") {
    return false;
  }
}
const form = document.querySelector('#overallForm');
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  
  if (validateFields()) {
    //Option for user to proceed and cancel
  var result = confirm("Are You Sure?");
  if (result == false) {
    //form.classList.add('was-validated')
    return;
  }
    
    generatePdf();
  }
})