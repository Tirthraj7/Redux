import React from "react";
import {
    AppBar,
    Button,
    Grid,
    Toolbar,
    Typography,
} from '@material-ui/core';
import {useDispatch} from 'react-redux'
import { showCart } from "./Header.actions";

const Header=()=>{
        const dispatch=useDispatch();
    const handleOnClick=()=>{   
        dispatch(showCart())
    };
    return(
        <AppBar position='static'>
            <Toolbar>
                {/*<IconButton edge='start'
                <MenuIcon/>
                </IconButton>*/}
                <Grid
                    container
                    direction='row'
                    alignItems='center'
                    justify='space-between'
                >
                <Grid item spacing ={10}>
                    <Typography varient='h6'>
                        Toy Mart
                    </Typography>
                </Grid>
                <Grid item spacing={2}>
                    <Button color='inherit' onClick={handleOnClick}></Button>
                </Grid>
                
            </Toolbar>
        </AppBar>
    )
}