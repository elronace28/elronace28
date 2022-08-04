import { Container, TextField, ToggleButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from "react-hook-form";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { PDFDocument, rgb } from "pdf-lib";
import {
  //   Autocomplete,
    Button,
  //   // FormGroup,
    Stack,
    styled,
  //   TextareaAutosize,
  //   ToggleButton,
  // } from "@mui/material";
  // import {
  //   // Checkbox,  
  //   FormControl,
  //   FormControlLabel,
  //   FormLabel,
  //   Radio,
  //   RadioGroup,
  //   TextField,
  } from "@mui/material";
  import FilePresentIcon from "@mui/icons-material/FilePresent";
  import { purple } from "@mui/material/colors";
  import { Link } from "react-router-dom";


  const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      "&:hover": {
        backgroundColor: purple[700],
      },   
      }));

// PDF COORDINATE
const Generatepdf = async (data) => {
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

  let fileName = `EARF_${data.lastName},${data.firstName} ${data.middleName}.pdf`;

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

  let header = date + "(" + time + ")";
  firstPage.drawText(header, {
    x: 105,
    y: 641,
    size: 7,
  });
 
  //Employee Number*
    firstPage.drawText(data.employeeNumber, {
      x: 160,
      y: 706,
      size: 8,
    },
  )
  // Ticket Number
    firstPage.drawText(data.ticketNumber, {
      x: 420,
      y: 731.5,
      size: 6.5,
    },
  )
  //Last Name
  firstPage.drawText(data.lastName, {
    x: 160,
    y: 685,
    size: 8,
  },

)
//Last Name
firstPage.drawText(data.firstName, {
  x: 280,
  y: 685,
  size: 8,
},
)
firstPage.drawText(data.middleName, {
  x: 420,
  y: 685,
  size: 8,
},
)
let fullName = `${data.firstName} ${data.middleName} ${data.lastName} `;
if (fullName) {
  firstPage.drawText(fullName.toUpperCase(), {
    x: 130,
    y: 115,
    size: 6,
  });
}
firstPage.drawText(data.emailInput, {
  x: 150,
  y: 674.5,
  size: 6,
},
)
firstPage.drawText(data.departmentInput, {
  x: 150,
  y: 667,
  size: 6,
},
)
firstPage.drawText(data.contactNumber, {
  x: 387,
  y: 674,
  size: 6,
},
)
firstPage.drawText(data.jobTitle, {
  x: 387,
  y: 667,
  size: 6,
},
)
 // Workstation: To be filled by BUH
 firstPage.drawText(data.windowsDesktop, {
  x: 210,
  y: 626.5,
  size: 6,
},
)
firstPage.drawText(data.windowsLaptop, {
  x: 210,
  y: 619,
  size: 6,
},
)
firstPage.drawText(data.appleMac, {
  x: 210,
  y: 612,
  size: 6,
},
)
// Justification
firstPage.drawText(data.justificationInput, {
  x: 147,
  y: 601,
  size: 6,
},
)
// Enterprise Access Request
firstPage.drawText(data.ntLogin, {
  x: 210,
  y: 582,
  size: 6,
},
)
firstPage.drawText(data.emailId, {
  x: 210,
  y: 575,
  size: 6,
},
)
firstPage.drawText(data.fileServerAccess, {
  x: 210,
  y: 567,
  size: 6,
},
)
firstPage.drawText(data.vpnInput, {
  x: 210,
  y: 559,
  size: 6,
},
)
//Remarks
firstPage.drawText(data.remarksTextArea, {
  x: 370,
  y: 535,
  size: 6,
},
)
//Metro Manila
firstPage.drawText(data.locationRadioButton, {
  x: 434.5,
  y: 660,
  size: 6,
},
)
  console.log(data)

  const svgPath = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 18 18" version="1.1">
 <g id="surface1">
 <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 15.90625 3.535156 L 6.1875 13.253906 L 2.09375 9.15625 L 1.28125 9.96875 L 5.78125 14.46875 L 6.1875 14.851562 L 6.589844 14.46875 L 16.71875 4.34375 Z M 15.90625 3.535156 "/>
 </g>
 </svg>`;
  //Radio Button New Account
  var arraynewaccount = [];
  var newAccountRadioButton = document.querySelectorAll(
    "input[name=newAccountRadio]:checked"
  );
  for (
    var newAccount = 0;
    newAccount < newAccountRadioButton.length;
    newAccount++
  ) {
    arraynewaccount.push(newAccountRadioButton[newAccount].value);
  }
  //Yes
  if (arraynewaccount.includes("yesRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 284.5,
      y: 716.5,
      scale: 0.7,
    });
    //No
  } else if (arraynewaccount.includes("noRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 386.5,
      y: 716.5,
      scale: 0.7,
    });
  }
  //Select Converge and Subsidiary Radio Button
  var arraycon = [];
  var selectRadioButton = document.querySelectorAll(
    "input[name=selectRadioButton]:checked"
  );
  for (
    var selectConvergeOrSubsidiary = 0;
    selectConvergeOrSubsidiary < selectRadioButton.length;
    selectConvergeOrSubsidiary++
  ) {
    arraycon.push(selectRadioButton[selectConvergeOrSubsidiary].value);
  }
  //Converge
  if (arraycon.includes("convergeRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 387.5,
      y: 731.8,
      scale: 0.6,
    });
    //Subsidiary
  } else if (arraycon.includes("subsidiaryRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 387.5,
      y: 724.3,
      scale: 0.6,
    });
  }
  //Location Radio Button
  var arrayloc = [];
  var locRadioButton = document.querySelectorAll(
    "input[name=locationRadioButton]:checked"
  );
  for (
    var locationRadio = 0;
    locationRadio < locRadioButton.length;
    locationRadio++
  ) {
    arrayloc.push(locRadioButton[locationRadio].value);
  }
//Metro Manila
  if (arrayloc.includes("Metro Manila")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 388.5,
      y: 667,
      scale: 0.5,
    });

    //Others
  } else if (arrayloc.includes("Other Location")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 388.5,
      y: 660,
      scale: 0.5,
    });
  }
  //Enter Location
  //Others
  const location = document.getElementById("othersAutoComplete");
  if (arrayloc.includes("Other Location")) {// value="" yung kinukuha
    firstPage.drawText(location.value, {
      x: 387,
      y: 643,
      size: 7,
    });
  }

  
  // Yes or No Popup Alert
  var result = window.confirm("Are You Sure?");
  if (result === false) {
    return;
  }
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  var fileDownload = require("js-file-download");
  fileDownload(pdfBytes, fileName, "application/pdf");
  if (pdfBytes == null) {
    return false;
  }
};
function Default() {

  const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      if (register === "") {
      }
      console.log(watch("example"));

      //PDF Trigger Download File
  const onClick=(data) => Generatepdf(data);
  if (Generatepdf === true) {
    return false;
  }



  
  return ( 
    <div>
      <div>
      <ToggleButton><Link to='Operations' className='btn'>IT Opearation (EARF)</Link></ToggleButton>

</div>
<Container>
<form onSubmit={handleSubmit(onClick)}>
<div className="header">
<h1>Employee Account Request Form</h1>
<Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3 },
            }}
          >
            <TextField
              type="number"
              color="secondary"
              label="Employee Number"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              style={{ color: "red" }}
              {...register("employeeNumber", {
                required: true,
                maxLength: 20,
                pattern: /[0-9]{5}/,
              })}
              
            />
            {errors?.employeeNumber?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.employeeNumber?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",

              "& > :not(style)": { m: 3 },
            }}
          >
            <Stack spacing={2} direction="row">
              <ColorButton
                variant="contained"
                type="submit"
                id="copyBtn"
                endIcon={<FilePresentIcon />}
              >
                Generate PDF
              </ColorButton>
            </Stack>
          </Box>
          </div>
    </form>
    </Container>
    </div>
   
  )

  }
export default Default
