import { Chip, Radio, RadioGroup, FormControlLabel, } from "@mui/material";
import { FormLabel } from "react-bootstrap";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


function ConvergeOrSubsidiary({ register,  errors }) {

  return (

//   Select Converge or Sub
<div>
<FormLabel sx={{ m: 1 }}>
Select(Converge and Subsidiary)
</FormLabel>


<RadioGroup
  aria-labelledby="selectRadioButton"
  name="selectRadioButton"
  defaultValue="selectRadioButton"
  sx={{ m: 3, width: '170px' }}
  >


{errors?.selectRadioButton?.type === "required" && (
  <Chip label="This field is required" 
  style={{ color: "red"}} 
  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
   }/>
)}
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
</div>

);
}

export default ConvergeOrSubsidiary; 