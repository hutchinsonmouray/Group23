import React from 'react';
import useStyles from './styles';
import {Box, Grid, Paper} from "@material-ui/core";
const Post = () => {
    const classes = useStyles();
    return (
        <Grid>
            {/*<Paper elevation={5}>*/}
                <h1>Lecture</h1>
            {/*</Paper>*/}
        </Grid>

    );
};

export default Post;
