import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Provider, useDispatch} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

import {BrowserRouter, Link, Route} from "react-router-dom"; //for multipage

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
                    <button onClick={LearnSS}>
                        <p>SAMPLE BUTTTON upload sets</p>
                        <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                        {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                    </button>

                    <Typography className={classes.heading} variant="h2" align="center">StudyStream</Typography>
                    {/*<img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>*/}

                    <button type = "submit" name = "learn" value = "myimage" onClick={LearnSS}>
                        <p>upload posts/lecutures</p>
                        <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                        {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                    </button>
            </AppBar>
            {/*//make back <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit Lecture</Button>*/}
            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3} flexDirection="row">

                    <button onClick= {UploadLecture} >
                        <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                        <p>see posts</p>
                        {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                    </button>

                    <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>

                    <button onClick= {UploadLecture} >
                        <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                        {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                        <p>see sets</p>

                    </button>
                    <Grid item xs={12} sm={7}>
                            <Sets/>
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <Form/>
                        </Grid>
                    </Grid>
            </Grow>

            <AppBar className={classes.appBar} position = "relative" color ="inherit">
                <button onClick= {LearnSS}>
                    <p>LearnSS</p>
                    <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                    {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                </button>
                <button type = "submit" name = "learn" value = "myimage" onClick={LearnSS}>
                    <p>delete Set</p>
                    <img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
                    {/*<img src="https://www.tutorialspoint.com/latest/inter-process-communication.png " />*/}
                </button>
            </AppBar>
        </Container>
);
}
export default Home;