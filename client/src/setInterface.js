import React, {useEffect} from 'react';
import useStyles from "./styles";
import {AppBar, Container, Grid, Grow, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

function getCurrentId() {
// gets the set id from the db
}

const SetInterface = () => {
    const  classes = useStyles();
    // const dispatch = useDispatch();

    // useEffect(()=> {
    //     dispatch(getPosts());
    //     // dispatch(getSets());
    // },[dispatch]);

    localStorage.getItem("getCurrentID").toString();

    return (
        <Container maxidth={"lg"}>
            {/*Header Bar*/}
            <NavLink  to={"/"} style={{ textDecoration: 'none' }} color='black'>
                <AppBar className={classes.appBar} position = "static" color ="inherit">
                    <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
                </AppBar>
            </NavLink>
            {localStorage.getItem("getCurrentID").toString()}
            {/*add a border and make it look nice w/ typ*/}
            {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 Set interface</Typography>*/}
            {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 Set interface</Typography>*/}
            {/*<Typography className={classes.heading} variant="body2" aligin="center">body2 Set interface</Typography>*/}

            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                </Grid>
            </Grow>
            <Paper className={classes.paper}>
                This is the Set Interface
            </Paper>
        </Container>
    );
}

export default SetInterface;