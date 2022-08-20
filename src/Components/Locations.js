import { Autocomplete, Chip, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


function Locations({ register,  errors }) {

    
//Other Select Location
const otherLocations = [
    { label: "Laguna" },
    { label: "Pampanga" },
    { label: "Pasig" },
    { label: "Rizal" },
    { label: "Antipolo" },
    { label: "Bulacan" },
  ];
  
  // Other Location Auto Complete
  // Location Radio Button
  const [value2, setValue2] = useState("");

return (

          <div>
           
                <RadioGroup
                  aria-labelledby="locationRadioButton"
                  name="locationRadioButton"
                  defaultValue="locationRadioButton"
                  sx={{ m: 2, width: '170px' }}
                  >
                  {errors?.locationRadioButton?.type === "required" && (
                  <Chip label="This field is required" 
                  style={{ color: "red"}} 
                  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                  }
                />
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
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete 
                    id="othersAutoComplete"
                    freeSolo
                    name = 'othersAutoComplete'
                    options={otherLocations}
                    sx={{ m: 1, width: 300 }}
                    renderInput={(params) => (
                    <TextField 
                          color="success"
                          {...params} label="Select Location" 
                          helperText= {errors?.othersAutoComplete ? errors?.othersAutoComplete.message : null }
                          {...register("othersAutoComplete", {
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
                </Stack>
                )}
                
              </RadioGroup>
          </div>
);
}

export default Locations; 