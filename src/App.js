// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFDocument, rgb } from "pdf-lib";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import {
  Autocomplete,
  Button,
  // Menu,
  // MenuItem,
  // Paper,
  Stack,
  styled,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  TextareaAutosize,
  // Toolbar,
} from "@mui/material";
import {
  // Checkbox,  
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Applications from "./Components/Applications";

// import CancelIcon from '@mui/icons-material/Cancel';


//Other Select Location
const otherLocations = [
  { label: "Laguna" },
  { label: "Pampanga" },
  { label: "Pasig" },
  { label: "Rizal" },
  { label: "Antipolo" },
  { label: "Bulacan" },
];

//Button style for Generate PDF
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));


//PDF COORDINATE
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

  //Applications
  var arrayApplication = [
    "bss",//name
    "oss",
    "ssp",
    "otrs",
    "usp",
    "ibas",
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
    if (index === 23) {
      yCoordinateInterval = yCoordinateInterval + 3.5;
    }
    //console.log(yCoordinateInterval);
    actionsStartingYCoordinate =
      actionsStartingYCoordinate - yCoordinateInterval;
    var arrayYaxis = [];
    var actionArray = [
      "view",//value
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

  // Productivity Tools 
  var arrayProductivity = [
    'msoffice', //name
    'instantmessage',
    'autocad',
    'winscp',
    'foxitreader',
    'biapplication',
  ];
  let actionsStartingYCoordinates = 349.5;
  arrayProductivity.forEach((type, index) => {
    let yCoordinateInterval = 7;

    if (index >= 4 && index <= 8) {
      yCoordinateInterval = yCoordinateInterval + 0.5;
    }
    if (index === 23) {
      yCoordinateInterval = yCoordinateInterval + 3.5;
    }
    actionsStartingYCoordinates =
      actionsStartingYCoordinates - yCoordinateInterval;
    var arrayYaxis = [];
    var actionArray = [
      'msOffice', //value
      'instantMessage',
      'autoCad',
      'winScp',
      'foxitReader',
      'biApplication',
    ];
    var checkboxes = document.querySelectorAll(
      `input[name=${type}]:checked`
    );
    for (var i = 0; i < checkboxes.length; i++) {
      arrayYaxis.push(checkboxes[i].value);
    }
    actionArray.forEach((action) => {
      //console.log(arrayYaxis.includes(action));
      if (arrayYaxis.includes(action)) {
        firstPage.drawSvgPath(svgPath, {
          color: rgb(0, 0, 0),
          x: 265.5,
          y: actionsStartingYCoordinates,
          scale: 0.5,
        });
      }
    });
  });
 
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

function App() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  if (register === "") {
  }
  console.log(watch("example"));
 
  // Other Location Auto Complete
  // Location Radio Button
  const [value2, setValue2] = useState("");

  //PDF Trigger Download File
  const onClick=(data) => Generatepdf(data);
  if (Generatepdf === true) {
    return false;
  }

  return (
    
    <form onSubmit={handleSubmit(onClick)}>
      <div className="header">
        
      {/* <div className="addTools">
       <Button 
       endIcon={<NoteAddIcon/>}
       >
        Add Input
        </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "20%" },
              
            }}
          >
            <TextField label='Enter Here' /> 
            </Box>
         </div> */}
        <Box
          sx={{
            display: "block",
            width: "100%",
            alignItems: "center",
            padding: "20px",
            bgcolor: "background.default",
            color: "text.primary",
            
          }}
        >
        
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
              alignItems: "center",
              "& > :not(style)": { m: 3 },
            }}
          >
            <TextField
              type="text"
              color="secondary"
              label="Ticket Number"
              {...register("ticketNumber", {
              })}
            />
          </Box>
          <h2>Full Name</h2>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "35%" },
            }}
          >
            <TextField
              type="text"
              color="secondary"
              label="Last Name"
              {...register("lastName", {
                required: true,
                min: 1,
                pattern: /^[ A-Za-z ]{5}/,
              })}
            />
            {errors?.lastName?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.lastName?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
            {errors?.lastName?.type === "min" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Enter some characters
              </p>
            )}

            <TextField
              type="text"
              color="secondary"
              label="First Name"
              {...register("firstName", {
                required: true,
                min: 4,
                pattern: /^[A-Za-z ]{4,32}/,
              })}
            />
            {errors?.firstName?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
            {errors?.firstName?.type === "min" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Enter some characters
              </p>
            )}

            <TextField
              type="text"
              color="secondary"
              label="Middle Name"
              {...register("middleName", {
                required: true,
                min: 1,
                pattern: /^[A-Za-z ]{1,32}/,
              })}
            />
            {errors?.middleName?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.middleName?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
            {errors?.middleName?.type === "min" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Enter some characters
              </p>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "50%" },
            }}
          >
            <TextField
              type="email"
              color="secondary"
              placeholder="@example.com"
              label="Email"
              {...register("emailInput", {
                required: true,
                // pattern: /^[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/
              })}
            />
            {errors?.emailInput?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.emailInput?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Invalid Email Address
              </p>
            )}

            <TextField
              type="text"
              color="secondary"
              label="Department"
              {...register("departmentInput", {
                required: true,
                pattern: /^[A-Za-z ]{2,32}/,
              })}
            />
            {errors?.departmentInput?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.departmentInput?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "50%" },
            }}
          >
            <TextField
              inputProps={{ pattern: "[0-9]{10,11}" }}
              type="number"
              color="secondary"
              placeholder="09********"
              label="Contact Number"
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
              }
              style={{ color: "red" }}
              {...register("contactNumber", {
                required: true,
                maxLength: 11,
                pattern: /[0-9]{10}/,
              })}
            />
            {errors?.contactNumber?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.contactNumber?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
            {errors?.contactNumber?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}

            <TextField
              inputProps={{ pattern: "[A-Za-z ]{1,32}" }}
              type="text"
              color="secondary"
              label="Job Title"
              {...register("jobTitle", {
                required: true,
                pattern: /^[A-Za-z ]{5,32}/,
              })}
            />
            {errors?.jobTitle?.type === "required" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}This field is required
              </p>
            )}
            {errors?.jobTitle?.type === "pattern" && (
              <p style={{ color: "red" }}>
                {<WarningAmberIcon />}Please match the Requested Format
              </p>
            )}
          </Box>
          <div>
            <FormControl>
              <FormLabel sx={{ m: 1 }}>
                <h3>New Account?</h3>
              </FormLabel>
              {/* New Account? */}
              <RadioGroup
                aria-labelledby="newAccountRadio"
                defaultValue="newAccountRadio"
                sx={{ m: 1 }}
              >
                {errors?.newAccountRadio?.type === "required" && (
                  <p style={{ color: "red" }}>
                    {<WarningAmberIcon />}This field is required
                  </p>
                )}
                <FormControlLabel
                  value="yesRadioButton"
                  color="secondary"
                  control={<Radio />}
                  label="Yes"
                  {...register("newAccountRadio", { required: true })}
                />

                <FormControlLabel
                  value="noRadioButton"
                  color="secondary"
                  control={<Radio />}
                  label="No"
                  {...register("newAccountRadio", { required: true })}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Select Converge or Sub */}
          <div>
            <FormControl>
              <FormLabel sx={{ m: 2 }}>
                Select(Converge and Subsidiary)
              </FormLabel>
              {errors?.selectRadioButton?.type === "required" && (
                <p style={{ color: "red" }}>
                  {<WarningAmberIcon />}This field is required
                </p>
              )}
              <RadioGroup
                aria-labelledby="selectRadioButton"
                name="selectRadioButton"
                defaultValue="selectRadioButton"
                sx={{ m: 2 }}
                className=""
              >
                <FormControlLabel
                  value="convergeRadioButton"
                  control={<Radio />}
                  name="selectRadioButton"
                  label="Converge"
                  id="converge"
                  {...register("selectRadioButton", { required: true })}
                />
                <FormControlLabel
                  value="subsidiaryRadioButton"
                  control={<Radio />}
                  name="selectRadioButton"
                  label="Subsidiary"
                  id="subsidiary"
                  {...register("selectRadioButton", { required: true })}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Location Radio Button */}
          <h2>Location</h2>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="locationRadioButton"
                name="locationRadioButton"
                defaultValue="locationRadioButton"
              >
                {errors?.locationRadioButton?.type === "required" && (
                <p style={{ color: "red" }}>
                  {<WarningAmberIcon />}This field is required
                </p>
              )}
                <FormControlLabel
                  control={<Radio />}
                  sx={{ m: 1 }}
                  value="Metro Manila"
                  label="Metro Manila"
                  {...register("locationRadioButton", { required: true })}
                  checked={value2 === "Metro Manila"}
                  onChange={(locationRadioButton) =>
                    setValue2(locationRadioButton.currentTarget.value)
                  }
                 
                />

                <FormControlLabel
                  control={<Radio />}
                  sx={{ m: 1 }}
                  value="Other Location"
                  label="Others"
                  {...register("locationRadioButton", { required: true })}
                  checked={value2 === "Other Location"}
                  onChange={(locationRadioButton) =>
                    setValue2(locationRadioButton.currentTarget.value)
                  }
                  
                />

                {value2 === "Other Location" && (
                  <Autocomplete
                    disablePortal
                    id="othersAutoComplete"
                    name = 'othersAutoComplete'
                    options={otherLocations}
                    sx={{ m: 1, width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Location" 
                      {...register("othersAutoComplete", { required: true })}
                     
                      />
                    )}
                  />
                )}
                {errors?.othersAutoComplete?.type === "required" && (
                        <p style={{ color: "red" }}>
                          {<WarningAmberIcon />}This field is required
                        </p>
                      )}
              </RadioGroup>
            </FormControl>
          </div>

         <h1>Workstation: To be filled by BUH</h1>
         <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
            {/* Workstation: To be filled by BUH */}
            <TextField
              label="Windows Desktop"
              {...register("windowsDesktop", {})}
            />
             <TextField
              label="Windows Laptop"
              {...register("windowsLaptop", {})}
            />
             <TextField
              label="MAC Apple"
              {...register("appleMac", {})}
            />
          </Box>
          {/* Justification */}
          <h3>Justification(if any)</h3>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2 },
            }}
          >
          <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      type ="text"
      name="justificationInput"
      placeholder="Input Here"
      style={{ width: 200 }}
      {...register("justificationInput", {})}
    />
    </Box>
          <h2>Enterprise Access Request</h2>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
            {/* Enterprise Access Request */}
            <TextField
              label="NT Login"
              {...register("ntLogin", {})}
            />
            </Box>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
          
            
             <TextField
              label="Email ID"
              {...register("emailId", {})}
            /> 
             </Box>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
             <TextField
              label="File Server Access"
              {...register("fileServerAccess", {})}
            />
            </Box>
            <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
            <TextField
              label="VPN"
              {...register("vpnInput", {})}
            />
          </Box>
          {/* Remarks */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3 },
            }}
          >
          <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Remarks"
      style={{ m:2 ,width: 200 }}
      {...register("remarksTextArea", {})}
    />
    </Box>
    <Applications/>

{/* <Toolbar>
      <Button
        variant="outlined"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       Add Inputs +
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onSubmit={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
        <Button  onClick={handleClose}></Button>
        <TextField label='Enter Tools (Optional)' 
         {...register("toolsInputs", {
        })}
        /> 
        </MenuItem>
        <MenuItem>
        <TextField label='Enter Tools (Optional)' 
        {...register("toolsInputs1", {
       })}
       />
      </MenuItem>
      </Menu>

    </Toolbar> */}

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
      
        </Box>
      </div>
    </form>
  );
  
}

export default App; 