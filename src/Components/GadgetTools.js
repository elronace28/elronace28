import { Box, TextareaAutosize, TextField } from "@mui/material";


function GadgetTools({ register }) {
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
              label="Windows Desktop"
              {...register("windowsDesktop", {})}
            />
             <TextField
              color="secondary"
              label="Windows Laptop"
              {...register("windowsLaptop", {})}
            />
             <TextField
              color="secondary"
              label="MAC Apple"
              {...register("appleMac", {})}
            />
          </Box>
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
          </Box>

);
}
export default GadgetTools; 