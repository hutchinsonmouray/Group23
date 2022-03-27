import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider, useDispatch} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

import {BrowserRouter, Link, NavLink, Route} from "react-router-dom"; //for multipage

import App from './App';
import {AppBar, Button, Container, Grid, Grow, TableRow, Typography} from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Sets from "./components/Sets/Sets";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";
import {getPosts} from "./actions/posts";
import {getSets} from "./actions/sets";
import LearnSS from "./LearnSS";
import UploadLecture from "./UploadLecture";


// function Home() {
    const Home = () => {

    const  classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
        dispatch(getSets());
    },[dispatch]);

    return (
        <Container maxidth={"lg"}>
            <AppBar className={classes.appBar} position = "static" color ="inherit">

                  <NavLink to={"/upload_lecture"}>
                    <button>
                        <p>upload sets</p>
                    </button>
                  </NavLink>

                <Typography className={classes.heading} variant="h2" align="center">StudyStream</Typography>

                <NavLink to={"/upload_lecture"}>
                    <button>
                        <p>upload posts/lecutures</p>
                    </button>
                </NavLink>

            </AppBar>
            {/*//make back <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit Lecture</Button>*/}
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} flexDirection="row">
                    <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                    <Grid item xs={12} sm={7}>
                            <Sets/>
                        </Grid>
                    </Grid>
            </Grow>

            <AppBar className={classes.appBar} position = "relative" color ="inherit">
                <NavLink to={"/LearnSS"}>
                    <button>
                        <p>Learn SS</p>
                    </button>
                </NavLink>

                <NavLink to={"/LearnSS"}>
                    <button>
                        <p>User Profile LearnSS Based</p>
                    </button>
                </NavLink>


            </AppBar>
        </Container>
);
}
export default Home;