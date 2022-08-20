import { TextField } from "@mui/material";
import { Box } from "@mui/system";

       
 function EAR({ register }) {
    return(   
<Box> 
       <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 3, width: "50%" },
            }}
          >
            <TextField
              color="secondary"
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              label="VPN"
              {...register("vpnInput", {})}
            />
        </Box>
</Box>  
);
}
export default EAR; 