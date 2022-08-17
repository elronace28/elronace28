
import { Checkbox, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";




function Applications({ register }) {

    return (
<div className="tableapplication">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><h2>Applications</h2></TableCell>
            <TableCell align="center"><h3>View</h3></TableCell>
            <TableCell align="center"><h3>Add</h3></TableCell>
            <TableCell align="center"><h3>Edit</h3></TableCell>
            <TableCell align="center"><h3>Delete</h3></TableCell>
            <TableCell align="center"><h3>Export</h3></TableCell>
            <TableCell align="center"><h3>Import</h3></TableCell>
            <TableCell align="center"><h3>Admin</h3></TableCell>
            <TableCell align="center"><h3>Remarks</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>OSS</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
        <TableCell align="center" sx={{ minWidth: 200 }}>
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="OSS"
            inputProps={{ maxLength: 48 }}  
            {...register("ossRemarks", {})}
            />}
          labelPlacement="top"
          {...register("oss-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>SSP</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="SSP"
            inputProps={{ maxLength: 48 }}  
            {...register("sspRemarks", {})}
            />}
          labelPlacement="top"
          {...register("ssp-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>OTRS</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="OTRS"
            inputProps={{ maxLength: 48 }}  
            {...register("otrsRemarks", {})}
            />}
          labelPlacement="top"
          {...register("otrs-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>USP</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="USP"
            inputProps={{ maxLength: 48 }}  
            {...register("uspRemarks", {})}
            />}
          labelPlacement="top"
          {...register("usp-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>iBAS</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="iBAS"
            inputProps={{ maxLength: 48 }}  
            {...register("ibasRemarks", {})}
            />}
          labelPlacement="top"
          {...register("ibas-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>DOCSIS</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="DOCSIS"
            inputProps={{ maxLength: 48 }}  
            {...register("docsisRemarks", {})}
            />}
          labelPlacement="top"
          {...register("docsis-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>U2000</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="U2000"
            inputProps={{ maxLength: 48 }}  
            {...register("u2000Remarks", {})}
            />}
          labelPlacement="top"
          {...register("u2000-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>AVSystem</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="AVSystem"
            inputProps={{ maxLength: 48 }}  
            {...register("avsystemRemarks", {})}
            />}
          labelPlacement="top"
          {...register("avsystem-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>MRTG</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="MRTG"
            inputProps={{ maxLength: 48 }}  
            {...register("mrtgRemarks", {})}
            />}
          labelPlacement="top"
          {...register("mrtg-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>CORIANT</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="CORIANT"
            inputProps={{ maxLength: 48 }}  
            {...register("coriantRemarks", {})}
            />}
          labelPlacement="top"
          {...register("coriant-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Facebook</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Facebook"
            inputProps={{ maxLength: 48 }}  
            {...register("facebookRemarks", {})}
            />}
          labelPlacement="top"
          {...register("facebook-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Youtube</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Youtube"
            inputProps={{ maxLength: 48 }}  
            {...register("youtubeRemarks", {})}
            />}
          labelPlacement="top"
          {...register("youtube-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>IT Ticketing Tool</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="IT Ticketing Tool"
            inputProps={{ maxLength: 48 }}  
            {...register("itTicketingToolRemarks", {})}
            />}
          labelPlacement="top"
          {...register("it-ticketing-tool-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>TPD Ticketing Tool</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="TPD Ticketing Tool"
            inputProps={{ maxLength: 48 }}  
            {...register("tpdTicketingToolRemarks", {})}
            />}
          labelPlacement="top"
          {...register("tpd-ticketing-tool-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>HCM</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="HCM Ticketing Tool"
            inputProps={{ maxLength: 48 }}  
            {...register("hcmRemarks", {})}
            />}
          labelPlacement="top"
          {...register("hcm-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>ERP</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="ERP"
            inputProps={{ maxLength: 48 }}  
            {...register("erpRemarks", {})}
            />}
          labelPlacement="top"
          {...register("erp-options", {})}
        />
        </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Gsuite</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Gsuite"
            inputProps={{ maxLength: 48 }}  
            {...register("gsuiteRemarks", {})}
            />}
          labelPlacement="top"
          {...register("gsuite-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Domain Controller</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Domain Controller"
            inputProps={{ maxLength: 48 }}  
            {...register("domainControllerRemarks", {})}
            />}
          labelPlacement="top"
          {...register("domain-controller-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>OSS User management</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="OSS User Management"
            inputProps={{ maxLength: 48 }}  
            {...register("ossUserManageMentRemarks", {})}
            />}
          labelPlacement="top"
          {...register("oss-user-management-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Vcenter</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Vcenter"
            inputProps={{ maxLength: 48 }}  
            {...register("vcenterRemarks", {})}
            />}
          labelPlacement="top"
          {...register("vcenter-options", {})}
        />
        </TableCell>
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Smart Sheet</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          control={<TextField 
            type='text' 
            color="secondary" 
            label="Smart Sheet"
            inputProps={{ maxLength: 48 }}  
            {...register("smartSheetRemarks", {})}
            />}
          labelPlacement="top"
          {...register("smartsheet-options", {})}
        />
        </TableCell>
            </TableRow>
       <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>Tableau</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("tableau-options", {})}
        />
        </TableCell>
        </TableRow>
   {/* Productivity Tools */}
   <TableRow>
   <TableCell component="th" scope="row" align="center"><h3>Productivity Tools</h3></TableCell> 
    <TableCell align="center">
    <FormControlLabel
          value="msOffice"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="MS Office"
          {...register("msoffice", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="instantMessage"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="Instant Message"
          {...register("instantmessage", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="autoCad"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="Auto CAD"
          {...register("autocad", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="winScp"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="WinSCP"
          {...register("winscp", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="foxitReader"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="Foxit Reader"
          {...register("foxitreader", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="biApplication"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          label="BI Application"
          {...register("biapplication", {})}
        />
        </TableCell>
</TableRow> 

        </TableBody>
      </Table>
    </TableContainer>
    
</div>
);
  
}
export default Applications; 