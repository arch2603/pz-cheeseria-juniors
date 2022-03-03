// @ts-ignore
import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    styled,
    Typography,
} from '@material-ui/core';
import {Wrapper} from "../Cart.styles";
import Button from "@material-ui/core/Button";
import {CartItemType} from "../../App";
import IconButton from '@material-ui/core/IconButton';
import  CloseIcon from '@material-ui/icons/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;

}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle  {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    >
                    <CloseIcon />
                </IconButton>
            ): null}
        </DialogTitle>
    );
};

export type PopupProps = {
    open: boolean;
    handleSendItems: (item: CartItemType)=> void;
    handleCloseDialog: () => void;
    item: CartItemType;
}

export default function Popup(props : PopupProps) {

    const { open, handleCloseDialog, handleSendItems, item } = props;
    console.log(item)

    return (
        <Wrapper>
                <BootstrapDialog
                    maxWidth="lg"
                    open={open}
                    aria-labelledby="customized-dialog-title"
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
                        <span>{item.id}{'\u00A0'}-</span>{'\u00A0'}<strong>Cheese Name:</strong> <span>{item.title}</span>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        <DialogContentText>
                            <Typography variant="h6" component="div">
                                <strong>Price:</strong> <span>${item.price}</span>
                            </Typography>
                            <Typography variant="h6" component="div">
                                <strong>Description:</strong> <span>${item.description}</span>
                            </Typography>
                            <Typography variant="h6" component="div">
                                <strong>Category:</strong> <span>{item.category}</span>
                            </Typography>
                        </DialogContentText>
                        <img src={item.image} alt={item.title} />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Close</Button>
                    </DialogActions>
                </BootstrapDialog>
        </Wrapper>
    )
}