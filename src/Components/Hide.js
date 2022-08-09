
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useForm } from "react-hook-form";
import React, { useState } from "react";


//Other Select Location
const otherLocations = [
    { label: "Laguna" },
    { label: "Pampanga" },
    { label: "Pasig" },
    { label: "Rizal" },
    { label: "Antipolo" },
    { label: "Bulacan" },
  ];
function Applications() {
    // Other Location Auto Complete
  // Location Radio Button
  const [value2, setValue2] = useState("");
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();
  if (register === "") {
  }
  console.log(watch("example"));
    return (
<div>
<h2>Hide Toggle</h2>
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
                  <TextField
                    disablePortal
                    type="text"
                     color="secondary"
                    label="Ticket Number"
                    name = 'othersAutoComplete'
                    options={otherLocations}
                    sx={{ m: 1, width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} 
                      label="Select Location" 
                      {...register("othersAutoComplete", {})}
                      />
                    )}
                    
                  />
                  
                )}
                
                      
              </RadioGroup>
            </FormControl>
          </div>
</div>
);
  
}
export default Applications; 