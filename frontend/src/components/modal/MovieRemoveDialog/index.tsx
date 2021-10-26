import { useState, useEffect, ReactElement } from "react";
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { Redirect, useLocation } from "react-router-dom";
import { Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button, Rating, Input, Radio, FormControl, FormLabel, InputLabel, RadioGroup, FormControlLabel, ThemeProvider, Typography, Paper, TableContainer, Table, TableBody, TableCell, TableRow } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// import './../../../assets/css/font.css'
import { Type } from "typescript";

type Props = {
    open: boolean
    onClose: () => void
    onRemove: () => void
}

const MovieRemoveDialog: React.FC<Props> = ({
    open, onClose, onRemove
}) => {
    return(
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} autoFocus>Cancle</Button>
                <Button onClick={() => { 
                    onRemove() 
                    onClose() }}>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default MovieRemoveDialog