import { Box, Chip, TextField } from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';


function Numbers({ register,  errors }) {

    return (
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              "& > :not(style)": { m: 3, width: '25ch' },
            }}
            >
            
            <TextField
              type='text'
              color='success'
              label={errors?.employeeNumber ? "Employee Number!" : 'Employee Number' }
              onKeyDown={(evt) =>
                ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
              error={errors?.employeeNumber}
              helperText = {errors?.employeeNumber ? errors?.employeeNumber.message : null   
                           }
              {...register("employeeNumber", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/[0-9]{3}/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                }/>,
                },
                })}
              />
            <div>
              <TextField
                type="text"
                color="secondary"
                label="Ticket Number"
                {...register("ticketNumber", {
                })}
              />
            </div>
        </Box>
    );
}

export default Numbers; 