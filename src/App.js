import Applications from "./Components/Applications";
import Numbers from "./Components/Numbers";
import Info from "./Components/Info";
import NewAccount from "./Components/NewAccount";
import ConvergeOrSubsidiary from "./Components/ConvergeOrSubsidiary";
import ImmidiateHead from "./Components/ImmidiateHead";
import Locations from "./Components/Locations";
import EAR from "./Components/EAR";
import GadgetTools from "./Components/GadgetTools";

import { PDFDocument, rgb } from "pdf-lib";
import { useForm, useFieldArray } from "react-hook-form";
import "./App.css";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import {
  TextField,
} from "@mui/material";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CancelIcon from '@mui/icons-material/Cancel';








//PDF COORDINATE
const Generatepdf = async (data) => {
  // Fetch an existing PDF document
  const url =
    "https://www.dl.dropboxusercontent.com/s/b9grgxgseytqubs/EARF_Template.pdf";
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
    y: 637,
    size: 8,
  });
 
  //Employee Number*
    firstPage.drawText(data.employeeNumber, {
      x: 160,
      y: 705,
      size: 9,
    },
  )
  // Ticket Number
    firstPage.drawText(data.ticketNumber, {
      x: 422,
      y: 729.5,
      size: 6.5,
    },
  )
  //Last Name
  firstPage.drawText(data.lastName, {
    x: 145,
    y: 685,
    size: 10,
  },

)
//First Name
firstPage.drawText(data.firstName, {
  x: 235,
  y: 685,
  size: 10,
},
)
//Middle Name
firstPage.drawText(data.middleName, {
  x: 410,
  y: 685,
  size: 10,
},
)
let fullName = `${data.firstName} ${data.middleName} ${data.lastName} `;
if (fullName) {
  firstPage.drawText(fullName.toUpperCase(), {
    x: 143.5,
    y: 136,
    size: 7,
  });
}
firstPage.drawText(data.emailInput, {
  x: 140,
  y: 672,
  size: 7,
},
)
firstPage.drawText(data.departmentInput, {
  x: 140,
  y: 663,
  size: 7,
},
)
firstPage.drawText(data.contactNumber, {
  x: 425,
  y: 671,
  size: 7,
},
)
firstPage.drawText(data.jobTitle, {
  x: 420,
  y: 663,
  size: 7,
},
)
firstPage.drawText(data.immidiateHead, {
  x: 140,
  y: 647,
  size: 7,
},
)
let immidiateHead = `${data.immidiateHead} `
firstPage.drawText(immidiateHead.toUpperCase(), {
  x: 120,
  y: 270,
  size: 7,
},
)
 // Workstation: To be filled by BUH
 firstPage.drawText(data.windowsDesktop, {
  x: 202,
  y: 620.5,
  size: 7,
},
)
firstPage.drawText(data.windowsLaptop, {
  x: 202,
  y: 612.5,
  size: 7,
},
)
firstPage.drawText(data.appleMac, {
  x: 202,
  y: 605,
  size: 7,
},
)
// Justification
firstPage.drawText(data.justificationInput, {
  x: 138,
  y: 595,
  size: 6,
},
)
// Enterprise Access Request
firstPage.drawText(data.ntLogin, {
  x: 202,
  y: 576.4,
  size: 7,
},
)
firstPage.drawText(data.emailId, {
  x: 202,
  y: 568.5,
  size: 7,
},
)
firstPage.drawText(data.fileServerAccess, {
  x: 202,
  y: 560,
  size: 7,
},
)
firstPage.drawText(data.vpnInput, {
  x: 202,
  y: 551,
  size: 7,
},
)
firstPage.drawText(data.ossRemarks, {
  x: 367,
  y: 522.9,
  size: 5,
},
)
firstPage.drawText(data.sspRemarks, {
  x: 367,
  y: 515.9,
  size: 5,
},
)
firstPage.drawText(data.otrsRemarks, {
  x: 367,
  y: 508.5,
  size: 5,
},
)
firstPage.drawText(data.uspRemarks, {
  x: 367,
  y: 501.5,
  size: 5,
},
)
firstPage.drawText(data.ibasRemarks, {
  x: 367,
  y: 494,
  size: 5,
},
)
firstPage.drawText(data.docsisRemarks, {
  x: 367,
  y: 487,
  size: 5,
},
)
firstPage.drawText(data.u2000Remarks, {
  x: 367,
  y: 479.5,
  size: 5,
},
)
firstPage.drawText(data.avsystemRemarks, {
  x: 367,
  y: 472,
  size: 5,
},
)
firstPage.drawText(data.mrtgRemarks, {
  x: 367,
  y: 465,
  size: 5,
},
)
firstPage.drawText(data.coriantRemarks, {
  x: 367,
  y: 457.5,
  size: 5,
},
)
firstPage.drawText(data.facebookRemarks, {
  x: 367,
  y: 450,
  size: 5,
},
)
firstPage.drawText(data.youtubeRemarks, {
  x: 367,
  y: 442.5,
  size: 5,
},
)
firstPage.drawText(data.itTicketingToolRemarks, {
  x: 367,
  y: 435,
  size: 5,
},
)
firstPage.drawText(data.tpdTicketingToolRemarks, {
  x: 367,
  y: 427.5,
  size: 5,
},
)
firstPage.drawText(data.hcmRemarks, {
  x: 367,
  y: 420,
  size: 5,
},
)
firstPage.drawText(data.erpRemarks, {
  x: 367,
  y: 413,
  size: 5,
},
)
firstPage.drawText(data.gsuiteRemarks, {
  x: 367,
  y: 406,
  size: 5,
},
)
firstPage.drawText(data.domainControllerRemarks, {
  x: 367,
  y: 398.5,
  size: 5,
},
)
firstPage.drawText(data.ossUserManageMentRemarks, {
  x: 367,
  y: 391,
  size: 5,
},
)
firstPage.drawText(data.vcenterRemarks, {
  x: 367,
  y: 383.5,
  size: 5,
},
)
firstPage.drawText(data.smartSheetRemarks, {
  x: 367,
  y: 376,
  size: 5,
},
)

const obj = (`${data.otherTools}`)
const myJSON = JSON.stringify(obj);
document.getElementsByName(obj).innerHTML = myJSON;
  firstPage.drawText(obj, {
    x: 285,
    y: 348,
    size: 7,
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
      x: 285.5,
      y: 715.5,
      scale: 0.8,
    });
    //Modify
  } else if (arraynewaccount.includes("noRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 395.5,
      y: 715.6,
      scale: 0.8,
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
      x: 395.5,
      y: 731,
      scale: 0.7,
    });
    //Subsidiary
  } else if (arraycon.includes("subsidiaryRadioButton")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 387.5,
      y: 724.3,
      scale: 0.7,
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
      x: 395.5,
      y: 664,
      scale: 0.7,
    });

    //Others
  } else if (arrayloc.includes("Other Location")) {
    firstPage.drawSvgPath(svgPath, {
      color: rgb(0, 0, 0),
      x: 395.5,
      y: 656,
      scale: 0.7,
    });
  }
  //Enter Location
  //Others
  const location = document.getElementById("othersAutoComplete");
  if (arrayloc.includes("Other Location")) {// value="" yung kinukuha
    firstPage.drawText(location.value, {
      x: 390,
      y: 638,
      size: 8,
    });
  }

  //Applications
  var arrayApplication = [         
    "oss",//name
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
    "gsuite",
    "domain-controller",
    "oss-user-management",
    "vcenter",
    "smartsheet",
    "tableau",
  ];
  let actionsStartingYCoordinate = 537.5;
  arrayApplication.forEach((type, index) => {
    let yCoordinateInterval = 7.2;
    //console.log(yCoordinateInterval);
    if (index >= 1 && index <= 6) {
      yCoordinateInterval = yCoordinateInterval + 0.3;
    }
    if (index === 21) {
      yCoordinateInterval = yCoordinateInterval +3;
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
    let ActionsStartingXCoordinate = 155.5;
    actionArray.forEach((action,index) => {
      let xCoordinateInterval = 5;

      ActionsStartingXCoordinate = ActionsStartingXCoordinate + 33;
      //console.log(arrayYaxis.includes(action));
      if (index >= 1 && index <= 6) {
        xCoordinateInterval = xCoordinateInterval + 0.5;
      }
      ActionsStartingXCoordinate = 
      ActionsStartingXCoordinate - xCoordinateInterval;
      if (arrayYaxis.includes(action)) {
        firstPage.drawSvgPath(svgPath, {
          color: rgb(0, 0, 0),
          x: ActionsStartingXCoordinate,
          y: actionsStartingYCoordinate,
          scale: 0.6,
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
  let actionsStartingYCoordinates = 360;
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
  
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      toolList: [{  value: "", name: "otherTools: " }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "toolList"
    
  });
  // Specify Tools 
  
  
  if (register === "") {
  }
  console.log(watch('toolList'));
 
  //PDF Trigger Download File  
  const onClick=(data) => Generatepdf(data);
  if (Generatepdf === true) {
    return false;
  }

  
  return (
    
    <form onSubmit={handleSubmit(onClick)}>
<Grid container spacing={3} alignItems="center">
{Array.from(Array(1)).map((_, index) => (
  <Grid item  xs="auto" key={index}>

      <div className="header">
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
          <Numbers 
          register={register}
          errors={errors} />
          
          <h2>Full Name</h2>
          <Info
          register={register}
          errors={errors}/>

          <ImmidiateHead
          register={register}
          errors={errors}/>
                 
          <NewAccount 
          register={register}
          errors={errors}/>

          <ConvergeOrSubsidiary 
          register={register}
          errors={errors}/>
          
          <h2>Location</h2>
          <Locations
          register={register}
          errors={errors}/>

         <h1>Workstation: To be filled by BUH</h1>
         <GadgetTools
          register={register}/>

          <h2>Enterprise Access Request</h2>
          <EAR
          register={register}/>
         
          {/* Specify Tools */}
        <h3>Other Tools (Please specify)</h3>
        
              {fields.map((item, index) => {
               return (
          <ul key={item.id}>
            
            <TextField 
              type="text"
              color="secondary"
              label='Input Here (Optional)'
              defaultValue={`${item.otherTools}`}
              {...register(`toolList.${index}.value`,{
              })}
            />
              {fields.length > 1 && 
              (
              <IconButton color='error' onClick={() => remove(index)}>
                <CancelIcon />
              </IconButton>
              )}
               
           </ul>
              );
              })}
      <section>
              {fields.length -1 <= 8 && (
            <IconButton 
                  color='success'
                  onClick={() => {
                  append({ otherTools: ""});
                 }}
              > Add Tools
              <NoteAddIcon/>
            </IconButton>
         )}
      </section>
    {/* Applications Table */}
          <Applications 
          register={register} />
          
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": { m: 3 },
            }}
            >
            <Stack spacing={2} direction="row">
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                // onClick={handleChange}
                endIcon={<FilePresentIcon />}
                > 
                Generate PDF
              </Button>
            </Stack>
          </Box>
    </Box> 
      </div>
  </Grid>
        ))}
</Grid>
    </form>
    
  );
  
}

export default App; 