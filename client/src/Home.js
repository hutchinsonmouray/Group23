import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

import {BrowserRouter, Link, NavLink, Route} from "react-router-dom"; //for multipage

import App from './App';
import {AppBar, Button, Container, Grid, Grow, Paper, TableRow, TextField, Typography} from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Sets from "./components/Sets/Sets";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";
import {getPosts} from "./actions/posts";
import {getSets} from "./actions/sets";
import LearnSS from "./LearnSS";
import UploadLecture from "./UploadLecture";
import {createPost} from "./api";

const LoginForm = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ user: '', password: '', email: ''});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({user: '', password: '', email: ''});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        }
        // else {
        //   dispatch(updatePost(currentId, postData));
        //   clear();
        //}

    };

    return ( //form outline
        <Paper className={classes.paper} eleveate={20}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                {/*<Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Upload a Lecture'}</Typography>*/}
                {/*<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />*/}
                <TextField name="title" variant="outlined" label="Username" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                {/*<TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />*/}
                {/*//Treat the message as the lecture txt content*/}
                <TextField name="tags" variant="outlined" label="Password" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <TextField name="email" variant="outlined" label="Email" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                {/*<div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>*/}
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Login</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};


// function Home() {
    const Home = () => {

    const  classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
        dispatch(getSets());
    },[dispatch]);

    return (
        <Container container justify="center"  maxidth={"lg"} align="center">
            <AppBar className={classes.appBar} position = "static" color ="inherit">
                <Typography className={classes.heading} variant="h2" align="center">StudyStream</Typography>
            </AppBar>

            <NavLink to={"/Upload_Set"}>
                <button>
                    <p>Set Upload</p>
                </button>
            </NavLink>

            <NavLink to={"/upload_lecture"}>
                <button>
                    {/*<p>upload posts/lecutures</p>*/}
                    <p>Lecture Upload</p>
                </button>
            </NavLink>

            <Container align="center" position = "relative">
            <Grow in>
                <Grid container maxidth={"lg"} align="center" justify="space-between"  alignItems="stretch" spacing={3} flexDirection="row">
                    {/*<Grid>*/}
                    {/*    <LoginForm/>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} sm={7}>
                        <Posts/>
                        </Grid>
                    <Grid item xs={12} sm={7}>
                            <Sets/>
                        </Grid>
                    </Grid>
            </Grow>
                </Container>

            <AppBar className={classes.appBar} position = "relative" color ="inherit">

                <NavLink to={"/LearnSS"}>
                    <button>
                        <p>Learn SS</p>
                    </button>
                </NavLink>

                <NavLink to={"/Profile"}>
                    <button>
                        <p>User Profile</p>
                    </button>
                </NavLink>


            </AppBar>
        </Container>
);
}
export default Home;