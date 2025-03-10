import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";

const LimitModal = ({ open, handleClose, func }) => {
    const [characterLimit, setCharacterLimit] = useState(0)

    const handleChange = (event) => {
        const value = event.target.value;
        setCharacterLimit(value);

    };
    const confirmSubmit = () => {
        func(Number(characterLimit));
        handleClose();
        setCharacterLimit(0);
    };
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Set character limit?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <TextField
                        id="assessmentDuration"
                        name="assessmentDuration"
                        fullWidth
                        type="number"
                        value={characterLimit}
                        onChange={handleChange}
                        placeholder="Enter duration"
                        size="small"
                        variant="outlined"
                    />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={confirmSubmit} autoFocus>
                    Set
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default LimitModal;