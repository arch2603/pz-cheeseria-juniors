import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { makeStyles } from "@material-ui/core/styles";
import {CartItemType} from "../../App";
import CartItem from "../CartItem/CartItem";
import {Wrapper} from "../Cart.styles";

export type RecentPurchaseProps = {
    toggleDrawer: (toggle: boolean) => void;
    open: boolean;
    item: CartItemType[];

}

const useStyles = makeStyles({
    drawer: {
        width: "200px"
    }
});

export default function RecentPurchase(props: RecentPurchaseProps) {
    const { toggleDrawer, open, item } = props;
    console.log(item)
    const classes = useStyles();
        const PurchaseHistory  = () => (
            <Wrapper>
                <Box sx={{ width: 450}}>
                    {item.map(data => (
                        <div>
                            <Typography>
                                <h3>{data.title}</h3>
                                <div className='information'>
                                    <p>Price: ${data.price}</p>
                                    <p>Description: {data.description}</p>
                                    <p>Total: ${(data.amount * data.price).toFixed(2)}</p>
                                </div>
                            </Typography>
                            <div>
                                <img src={data.image} alt={data.title} />
                            </div>
                        </div>
                    ))}
                    </Box>
            </Wrapper>

            );
    return(
        <React.Fragment>
            <Drawer anchor={'right'} open={open} onClose={()=>{toggleDrawer(false)}} className={classes.drawer}>
                {PurchaseHistory()}
            </Drawer>
        </React.Fragment>
    );
}