import { Box, Chip, TextField } from "@mui/material";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';





function Info({ register,  errors }) {
    return(
<Box>
        <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 2, width: "35%" },
            }}
          >
            <TextField
              type="text"
              color="success"
              label={errors?.lastName ? "Last Name!" : 'Last Name' }
              error={errors?.lastName}
              helperText= {errors?.lastName ? errors?.lastName.message : null }
              {...register("lastName", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/^[ A-Za-z ]{3}/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
              }/>,
              },
              })}
            />
             
             
            
            <TextField
              type="text"
              color="success"
              error={errors?.firstName}
              label={errors?.firstName ? "First Name!" : 'First Name' }
              helperText={errors?.firstName ? errors?.firstName.message : null }
              {...register("firstName", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/^[A-Za-z ]{4,32}/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
              }/>,
              },
              })}
            />
  
            <TextField
              type="text"
              color="success"
              error={errors?.middleName}
              label={errors?.middleName ? "Middle Name!" : 'Middle Name' }
              helperText= {errors?.middleName ? errors?.middleName.message : null }
              {...register("middleName", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/^[A-Za-z ]{1,32}/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
              }/>,
              },
              })}
            />
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
              color="success"
              placeholder="@example.com"
              error={errors?.emailInput}
              label={errors?.emailInput ? "Email Address!" : 'Email Address' }
              helperText= {errors?.emailInput ? errors?.emailInput.message : null }
              {...register("emailInput", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/.+@.+\..+$/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
              }/>,
              },
              })}
            />
           
            <TextField
              type="text"
              color="success"
              error={errors?.departmentInput}
              label={errors?.departmentInput ? "Department!" : 'Department' }
              helperText= {errors?.departmentInput ? errors?.departmentInput.message : null }
              {...register("departmentInput", {
                required: <Chip label="This field is required" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                 }/>,
                pattern:{ 
                  value:/^[A-Za-z ]{2,32}/,
                message: <Chip label="Please follow the requested format" 
                style={{ color: "red"}} 
                icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
              }/>,
              },
              })}
            />
        </Box>

        <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > :not(style)": { m: 2, width: "50%" },
              }}
              >
              <TextField
                type="number"
                color="success"
                placeholder="09********"
                error={errors?.contactNumber}
                label={errors?.contactNumber ? "09*********!" : 'Contact Number' }
                helperText= {errors?.contactNumber ? errors?.contactNumber.message : null }
                onKeyDown={(evt) =>
                  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
                }
                {...register("contactNumber", {
                  required: <Chip label="This field is required" 
                  style={{ color: "red"}} 
                  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                  }/>,
                  pattern:{ 
                    value:/[0-9]{10}/,
                  message: <Chip label="Please follow the requested format" 
                  style={{ color: "red"}} 
                  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                }/>,
                },
                })}
              />
              
              <TextField
                inputProps={{ pattern: "[A-Za-z ]{1,32}" }}
                type="text"
                color="success"
                error={errors?.jobTitle}
                label={errors?.jobTitle ? "Job Title" : 'Job Title' }
                helperText= {errors?.jobTitle ? errors?.jobTitle.message : null }
                {...register("jobTitle", {
                  required: <Chip label="This field is required" 
                  style={{ color: "red"}} 
                  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                  }/>,
                  pattern:{ 
                    value:/^[A-Za-z ]{5,32}/,
                  message: <Chip label="Please follow the requested format" 
                  style={{ color: "red"}} 
                  icon={<ErrorOutlineOutlinedIcon style={{ color: "red"}} />
                }/>,
                },
                })}
              />
        </Box>
</Box>
);
}
export default Info; 