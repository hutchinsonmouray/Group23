import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider, useDispatch} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";


import App from './App';
import useStyles from "./styles";
import {getPosts} from "./actions/posts";
import {getSets} from "./actions/sets";
import {AppBar, Container, Grid, Grow, Paper, Typography} from "@material-ui/core";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Sets from "./components/Sets/Sets";
import Form from "./components/Form/Form";

//
// function LearnSS() {
const LearnSS = () => {
    const  classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
        dispatch(getSets());
    },[dispatch]);

    return (
        <Container maxidth={"lg"}>
            <AppBar className={classes.appBar} position = "static" color ="inherit">
                <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
            </AppBar>
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                </Grid>
            </Grow>
            <div>
                This is Study Stream NO PAPER! The point of our app is to....INSERT
            </div>
            <Paper className={classes.paper} >
                {/*add a border and make it look nice w/ typ*/}
                <Typography className={classes.heading} variant="h5" aligin="center">h5 LearnSS Line 44</Typography>
                <Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 LearnSS Line 44</Typography>
                <Typography className={classes.heading} variant="body2" aligin="center">h5 LearnSS Line 44</Typography>

                <form>
                    <div>
                         PAPER: This is Study Stream! The point of our app is to....INSERT
                    </div>
                </form>
            </Paper>
        </Container>
    );
}

export default LearnSS;