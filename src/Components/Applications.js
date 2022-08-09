
import { Checkbox, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useForm } from "react-hook-form";



function Applications() {
    const {
        register,
        watch,
      } = useForm();
      if (register === "") {
      }
      console.log(watch("example"));
     
    // //PDF Trigger Download File
    // const onClick=(data) => Generatepdf(data);
    // if (Generatepdf === true) {
    //   return false;
    // }

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
          </TableRow>
        </TableHead>
        <TableBody>
        
          <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
            >
          <TableCell component="th" scope="row" align="center"><h3>BSS</h3></TableCell>
          <TableCell align="center">
          <FormControlLabel
          value="view"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
          />
          </TableCell>
          
          <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox size="small"/>}
          labelPlacement="top"
          {...register("bss-options", {})}
        />
        </TableCell>
        </TableRow>

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
            </TableRow>

            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 2 } }}
            >
        <TableCell component="th" scope="row" align="center"><h3>NAP Locator</h3></TableCell>
        <TableCell align="center">
    <FormControlLabel
          value="view"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("naplocator-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="add"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("naplocator-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="edit"
          control={<Checkbox  size="small" />} 
          labelPlacement="top"
          {...register("naplocator-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="delete"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="export"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("naplocator-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="import"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("naplocator-options", {})}
        />
        </TableCell>
        <TableCell align="center">
        <FormControlLabel
          value="admin"
          control={<Checkbox  size="small" />}
          labelPlacement="top"
          {...register("naplocator-options", {})}
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