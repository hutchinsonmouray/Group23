import React from 'react';
import useStyles from './styles';
import {Paper} from "@material-ui/core";
const Set = () => {
    const classes = useStyles();
    return (
        <Paper elevation={5} stretch="tight">
            <h1>Set</h1>
        </Paper>    );
};

export default Set;
