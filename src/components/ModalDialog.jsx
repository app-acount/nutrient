import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ModalDialog({ open, onClose, title, children, actions }) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
            <DialogActions>
                {actions ? (
                    actions
                ) : (
                    <Button onClick={onClose} variant="contained" color="primary">
                        閉じる
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
}
