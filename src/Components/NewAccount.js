import { Chip, Radio, RadioGroup, FormControlLabel, } from "@mui/material";
import { FormLabel } from "react-bootstrap";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';



function RadioButtons({ register,  errors }) {

    return (

            <div>

              <FormLabel sx={{ m: 1 }}>
                <h3>New Account?</h3>
              </FormLabel>
              {/* New Account? */}
              <RadioGroup
                aria-labelledby="newAccountRadio"
                defaultValue="newAccountRadio"
                sx={{ m: 3 , width: '170px'}}
              >
                {errors?.newAccountRadio?.type === "required" && (
                <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>
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
            </div>
        
);
}

export default RadioButtons; 