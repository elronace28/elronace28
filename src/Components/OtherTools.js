import { Box, IconButton, TextField } from "@mui/material";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm, useFieldArray } from "react-hook-form";

function OtherTools({ register}) {

    const {
        control,
      } = useForm({
        defaultValues: {
          toolList: [{  value: "", name: "otherTools " }]
        }
      });
    
      const { fields, append, remove } = useFieldArray({
        control,
        name: "toolList"
        
      });
    return(    
        <Box>    
            {fields.map((item, index) => {
                return (
            <ul key={item.id}>
            
            <TextField 
            color="secondary"
            label='Input Here (Optional)'
            defaultValue={item.otherTools}
            {...register(`toolList.[${index}].value`,{
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
                append({ name: "otherTools"});
                }}
            > Add Tools
            <NoteAddIcon/>
            </IconButton>
            )}
            </section>
            </Box>
);
}
export default OtherTools; 