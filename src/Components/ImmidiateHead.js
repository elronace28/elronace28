import { Autocomplete, Chip, TextField } from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

function ImmidiateHead({ register,  errors }) {
    
  const immidiateHead = [
        { label: "Steven Maverick Paradeza" },
        { label: "Jominee Mangaser" },
        { label: 'Fregie A. Chanjueco'},
        { label: "Erwin M. Apolonio" },
        { label: "Sir Budds" },
      ];
    return (
  
 <Autocomplete 
 id="immidiateHead"
 freeSolo
 name = 'immidiateHead'
 options={immidiateHead}
 sx={{ m: 2, width: 520 }}
 renderInput={(params) => (
   <TextField {...params}  label={errors?.immidiateHead ? "Immidiate Head!" : 'Immidiate Head' } 
         color='success'
         error={errors?.immidiateHead}
         helperText= {errors?.immidiateHead ? errors?.immidiateHead.message : null }
       {...register("immidiateHead", {
         required: <Chip label="This field is required" 
         style={{ color: "red"}} 
         icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
         }/>,
         pattern:{ 
           value:/^[A-Za-z ]/,
         message: <Chip label="Please follow the requested format" 
         style={{ color: "red"}} 
         icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
       }/>,
       },
       })}                   
   />
 )}
/>


);
}

export default ImmidiateHead; 