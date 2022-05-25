//CHECKBOX parent child
var toggleChecks = function () {
  var isMaster = this.hasAttribute("data-master-checkbox");
  var group = this.closest("[checkbox-group]");
  var boxes = group.querySelectorAll(
    "input[type=checkbox]:not([data-master-checkbox])"
  );
  var master = isMaster
    ? this
    : group.querySelector("input[type=checkbox][data-master-checkbox]");

  if (isMaster) {
    // Set all children to the value of the parent
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = this.checked;
    }
  } else {
    // Toggle all children to the state of the master
    var checkedCount = 0;
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        checkedCount += 1;
      }
    }

    master.checked = checkedCount == boxes.length;
    master.indeterminate = !master.checked && !checkedCount == 0;
  }
};

var nodes = document.querySelectorAll("[checkbox-group] input[type=checkbox]");
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("change", toggleChecks);
}
//CHECKBOX

//Radio Button

const sizes = ["Yes", "No"];

// generate the radio groups
const group = document.querySelector("#group");
if (group) {
  group.innerHTML = sizes
    .map(
      (size) => `<div>
          <input type="radio" name="size" value="${size}" id="${size}
           ${size}">${size}
      </div>`
    )
    .join(" ");
}

// add an event listener for the change event
const checkboxButtons = document.querySelectorAll('input[name="size"]');
for (const checkboxButton of checkboxButtons) {
  checkboxButton.addEventListener("change", showSelected);
}

function showSelected(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector("#output").innerText = ` ${this.value}`;
  }
}

function myFunction(type, option) {
  let checkBox = document.getElementById(type);
  let text = document.getElementById(option);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
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

  //Employee Account Request Form
  //Employee Number
  const employeenumber = document.getElementById("employeenumber");
  firstPage.drawText(employeenumber.value, {
    x: 160,
    y: 706,
    size: 8,
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
  //Location
  const loc = document.getElementById("location");
  firstPage.drawText(loc.value, {
    x: 434,
    y: 660,
    size: 6,
    font: helveticaFont,
  });
  //Immediate Head (Buddy partner)
  const budd = document.getElementById("buddy");
  firstPage.drawText(budd.value, {
    x: 150,
    y: 653,
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

  //Applications

  //BSS Checkbox
  const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
  <g id="surface1">
  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 15.90625 3.535156 L 6.1875 13.253906 L 2.09375 9.15625 L 1.28125 9.96875 L 5.78125 14.46875 L 6.1875 14.851562 L 6.589844 14.46875 L 16.71875 4.34375 Z M 15.90625 3.535156 "/>
  </g>
  </svg>`;

  var array = [];
  var checkboxes = document.querySelectorAll("input[name=bss-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW BSS
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 543.5,
      scale: 0.5,
    });
  }
  //ADD BSS
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //EDIT BSS
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //DELETE BSS
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //EXPORT BSS
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //IMPORT BSS
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //ADMIN BSS
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 543.5,
      scale: 0.5,
    });
  }

  //OSS Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=oss-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW OSS
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 536,
      scale: 0.5,
    });
  }
  //ADD OSS
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 536,
      scale: 0.5,
    });
  }

  //EDIT OSS
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 536,
      scale: 0.5,
    });
  }

  //DELETE OSS
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 536,
      scale: 0.5,
    });
  }

  //EXPORT OSS
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 536,
      scale: 0.5,
    });
  }

  //IMPORT OSS
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 536,
      scale: 0.5,
    });
  }

  //ADMIN OSS
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 536,
      scale: 0.5,
    });
  }

  //SSP Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=ssp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW SSP
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 529,
      scale: 0.5,
    });
  }
  //ADD SSP
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EDIT SSP
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 529,
      scale: 0.5,
    });
  }

  //DELETE SSP
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EXPORT SSP
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 529,
      scale: 0.5,
    });
  }

  //IMPORT SSP
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 529,
      scale: 0.5,
    });
  }

  //ADMIN SSP
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 529,
      scale: 0.5,
    });
  }

  //SSP Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=ssp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW SSP
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 529,
      scale: 0.5,
    });
  }
  //ADD SSP
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EDIT SSP
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 529,
      scale: 0.5,
    });
  }

  //DELETE SSP
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EXPORT SSP
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 529,
      scale: 0.5,
    });
  }

  //IMPORT SSP
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 529,
      scale: 0.5,
    });
  }

  //ADMIN SSP
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 529,
      scale: 0.5,
    });
  }

  //SSP Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=ssp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW SSP
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 529,
      scale: 0.5,
    });
  }
  //ADD SSP
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EDIT SSP
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 529,
      scale: 0.5,
    });
  }

  //DELETE SSP
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 529,
      scale: 0.5,
    });
  }

  //EXPORT SSP
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 529,
      scale: 0.5,
    });
  }

  //IMPORT SSP
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 529,
      scale: 0.5,
    });
  }

  //ADMIN SSP
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 529,
      scale: 0.5,
    });
  }

  //OTRS Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=otrs-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW OTRS
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 522,
      scale: 0.5,
    });
  }
  //ADD OTRS
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 522,
      scale: 0.5,
    });
  }

  //EDIT OTRS
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 522,
      scale: 0.5,
    });
  }

  //DELETE OTRS
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 522,
      scale: 0.5,
    });
  }

  //EXPORT OTRS
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 522,
      scale: 0.5,
    });
  }

  //IMPORT OTRS
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 522,
      scale: 0.5,
    });
  }

  //ADMIN OTRS
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 522,
      scale: 0.5,
    });
  }

  //USP Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=usp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW USP
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 514.5,
      scale: 0.5,
    });
  }
  //ADD USP
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //EDIT USP
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //DELETE USP
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //EXPORT USP
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //IMPORT USP
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //ADMIN USP
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 514.5,
      scale: 0.5,
    });
  }

  //iBASS Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=ibass-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW iBASS
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 507.5,
      scale: 0.5,
    });
  }
  //ADD iBASS
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //EDIT iBASS
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //DELETE iBASS
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //EXPORT iBASS
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //IMPORT iBASS
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //ADMIN iBASS
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 507.5,
      scale: 0.5,
    });
  }

  //DOCSIS Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=docsis-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW DOCSIS
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 500.5,
      scale: 0.5,
    });
  }
  //ADD DOCSIS
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //EDIT DOCSIS
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //DELETE DOCSIS
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //EXPORT DOCSIS
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //IMPORT DOCSIS
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //ADMIN DOCSIS
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 500.5,
      scale: 0.5,
    });
  }

  //U2000 Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=u2000-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW U2000
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 493.5,
      scale: 0.5,
    });
  }
  //ADD U2000
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //EDIT U2000
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //DELETE U2000
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //EXPORT U2000
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //IMPORT U2000
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //ADMIN U2000
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 493.5,
      scale: 0.5,
    });
  }

  //AVSystem Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=avsystem-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW AVSystem
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 486,
      scale: 0.5,
    });
  }
  //ADD AVSystem
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 486,
      scale: 0.5,
    });
  }

  //EDIT AVSystem
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 486,
      scale: 0.5,
    });
  }

  //DELETE AVSystem
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 486,
      scale: 0.5,
    });
  }

  //EXPORT AVSystem
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 486,
      scale: 0.5,
    });
  }

  //IMPORT AVSystem
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 486,
      scale: 0.5,
    });
  }

  //ADMIN AVSystem
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 486,
      scale: 0.5,
    });
  }

  //MRTG Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=mrtg-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW MRTG
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 479,
      scale: 0.5,
    });
  }
  //ADD MRTG
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 479,
      scale: 0.5,
    });
  }

  //EDIT MRTG
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 479,
      scale: 0.5,
    });
  }

  //DELETE MRTG
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 479,
      scale: 0.5,
    });
  }

  //EXPORT MRTG
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 479,
      scale: 0.5,
    });
  }

  //IMPORT MRTG
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 479,
      scale: 0.5,
    });
  }

  //ADMIN MRTG
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 479,
      scale: 0.5,
    });
  }

  //CORIANT Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=coriant-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW CORIANT
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 472,
      scale: 0.5,
    });
  }
  //ADD CORIANT
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 472,
      scale: 0.5,
    });
  }

  //EDIT CORIANT
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 472,
      scale: 0.5,
    });
  }

  //DELETE CORIANT
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 472,
      scale: 0.5,
    });
  }

  //EXPORT CORIANT
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 472,
      scale: 0.5,
    });
  }

  //IMPORT CORIANT
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 472,
      scale: 0.5,
    });
  }

  //ADMIN CORIANT
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 472,
      scale: 0.5,
    });
  }

  //Facebook Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=facebook-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Facebook
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 464.5,
      scale: 0.5,
    });
  }
  //ADD Facebook
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //EDIT Facebook
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //DELETE Facebook
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //EXPORT Facebook
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //IMPORT Facebook
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //ADMIN Facebook
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 464.5,
      scale: 0.5,
    });
  }

  //Youtube Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=youtube-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Youtube
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 457.5,
      scale: 0.5,
    });
  }
  //ADD Youtube
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //EDIT Youtube
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //DELETE Youtube
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //EXPORT Youtube
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //IMPORT Youtube
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //ADMIN Youtube
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 457.5,
      scale: 0.5,
    });
  }

  //IT Ticketing Tool Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=it-ticketing-tool-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW IT Ticketing Tool
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 450.5,
      scale: 0.5,
    });
  }
  //ADD IT Ticketing Tool
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //EDIT IT Ticketing Tool
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //DELETE IT Ticketing Tool
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //EXPORT IT Ticketing Tool
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //IMPORT IT Ticketing Tool
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //ADMIN IT Ticketing Tool
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 450.5,
      scale: 0.5,
    });
  }

  //TPD Ticketing Tool Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=tpd-ticketing-tool-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW TPD Ticketing Tool
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 443,
      scale: 0.5,
    });
  }
  //ADD TPD Ticketing Tool
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 443,
      scale: 0.5,
    });
  }

  //EDIT TPD Ticketing Tool
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 443,
      scale: 0.5,
    });
  }

  //DELETE TPD Ticketing Tool
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 443,
      scale: 0.5,
    });
  }

  //EXPORT TPD Ticketing Tool
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 443,
      scale: 0.5,
    });
  }

  //IMPORT TPD Ticketing Tool
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 443,
      scale: 0.5,
    });
  }

  //ADMIN TPD Ticketing Tool
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 443,
      scale: 0.5,
    });
  }

  //HCM Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=hcm-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW HCM
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 436,
      scale: 0.5,
    });
  }
  //ADD HCM
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 436,
      scale: 0.5,
    });
  }

  //EDIT HCM
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 436,
      scale: 0.5,
    });
  }

  //DELETE HCM
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 436,
      scale: 0.5,
    });
  }

  //EXPORT HCM
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 436,
      scale: 0.5,
    });
  }

  //IMPORT HCM
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 436,
      scale: 0.5,
    });
  }

  //ADMIN HCM
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 436,
      scale: 0.5,
    });
  }

  //ERP Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll("input[name=erp-options]:checked");

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW ERP
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 428.8,
      scale: 0.5,
    });
  }
  //ADD ERP
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //EDIT ERP
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //DELETE ERP
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //EXPORT ERP
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //IMPORT ERP
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //ADMIN ERP
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 428.8,
      scale: 0.5,
    });
  }

  //Nap Locator Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=naplocator-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Nap Locator
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 421.5,
      scale: 0.5,
    });
  }
  //ADD Nap Locator
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //EDIT Nap Locator
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //DELETE Nap Locator
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //EXPORT Nap Locator
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //IMPORT Nap Locator
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //ADMIN Nap Locator
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 421.5,
      scale: 0.5,
    });
  }

  //Gsuite Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=gsuite-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Gsuite
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 414.5,
      scale: 0.5,
    });
  }
  //ADD Gsuite
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //EDIT Gsuite
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //DELETE Gsuite
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //EXPORT Gsuite
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //IMPORT Gsuite
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //ADMIN Gsuite
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 414.5,
      scale: 0.5,
    });
  }

  //Domain Controller Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=domain-controller-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Domain Controller
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 407.3,
      scale: 0.5,
    });
  }
  //ADD Domain Controller
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //EDIT Domain Controller
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //DELETE Domain Controller
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //EXPORT Domain Controller
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //IMPORT Domain Controller
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //ADMIN Domain Controller
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 407.3,
      scale: 0.5,
    });
  }

  //OSS User Management Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=oss-user-management-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW OSS User Management
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 400.1,
      scale: 0.5,
    });
  }
  //ADD OSS User Management
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //EDIT OSS User Management
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //DELETE OSS User Management
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //EXPORT OSS User Management
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //IMPORT OSS User Management
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //ADMIN OSS User Management
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 400.1,
      scale: 0.5,
    });
  }

  //Vcenter Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=vcenter-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Vcenter
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 393.1,
      scale: 0.5,
    });
  }
  //ADD Vcenter
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //EDIT Vcenter
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //DELETE Vcenter
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //EXPORT Vcenter
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //IMPORT Vcenter
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //ADMIN Vcenter
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 393.1,
      scale: 0.5,
    });
  }

  //Smart Sheet Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=smartsheet-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Smart Sheet
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 386,
      scale: 0.5,
    });
  }
  //ADD Smart Sheet
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 386,
      scale: 0.5,
    });
  }

  //EDIT Smart Sheet
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 386,
      scale: 0.5,
    });
  }

  //DELETE Smart Sheet
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 386,
      scale: 0.5,
    });
  }

  //EXPORT Smart Sheet
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 386,
      scale: 0.5,
    });
  }

  //IMPORT Smart Sheet
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 386,
      scale: 0.5,
    });
  }

  //ADMIN Smart Sheet
  if (array.includes("admin")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 342.5,
      y: 386,
      scale: 0.5,
    });
  }

  //Tableau Checkbox
  var array = [];
  var checkboxes = document.querySelectorAll(
    "input[name=tableau-options]:checked"
  );

  for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }

  //VIEW Tableau
  if (array.includes("view")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 188,
      y: 375.5,
      scale: 0.5,
    });
  }
  //ADD Tableau
  if (array.includes("add")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 214.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //EDIT Tableau
  if (array.includes("edit")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 240.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //DELETE Tableau
  if (array.includes("delete")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 265.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //EXPORT Tableau
  if (array.includes("export")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 290.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //IMPORT Tableau
  if (array.includes("import")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 316.5,
      y: 375.5,
      scale: 0.5,
    });
  }

  //ADMIN Tableau
  if (array.includes("admin")) {
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
