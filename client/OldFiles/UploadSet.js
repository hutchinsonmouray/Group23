// import App from './App';
// import useStyles from "./styles";
// import {getPosts} from "./actions/posts";
// import {getSets} from "./actions/sets";
// import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
// import memories from "./images/memories.png";
// import Form from "./components/Form/Form";
//
// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Paper } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
//
// import {createPost} from "./api/index";
// import {NavLink} from "react-router-dom";
//
// const SetForm = ({ currentId, setCurrentId }) => {
//     const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//     const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
//     const dispatch = useDispatch();
//     const classes = useStyles();
//
//     useEffect(() => {
//         if (post) setPostData(post);
//     }, [post]);
//
//     const clear = () => {
//         setCurrentId(0);
//         setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (currentId === 0) {
//            dispatch(createPost(postData));
//           clear();
//          }
//         // else {
//         //   dispatch(updatePost(currentId, postData));
//         //   clear();
//         //}
//
//     };
//
//     return ( //form outline
//         <Paper className={classes.paper} eleveate={20}>
//             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//                 {/*<Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Upload a Lecture'}</Typography>*/}
//                 {/*<TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />*/}
//                 <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//                 {/*<TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />*/}
//                 {/*//Treat the message as the lecture txt content*/}
//                 <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//                 <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit Set</Button>
//                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//             </form>
//         </Paper>
//     );
// };
// ///Updated Version of the Form
//
// function UploadSet() {
//     const  classes = useStyles();
//     const dispatch = useDispatch();
//
//     useEffect(()=> {
//         // dispatch(getPosts());
//         dispatch(getSets());
//     },[dispatch]);
//
// //<img className={classes.image} src = {memories} alt = "StudyStream Logo" height="60"/>
//
//     return (
//         <Container maxidth={"lg"}>
//
//             <NavLink to={"/"}>
//             <AppBar className={classes.appBar} position = "static" color ="inherit">
//                 <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
//             </AppBar>
//             </NavLink>
//
//             {/*/!*Home Button*!/*/}
//             {/*<NavLink to={"/"}>*/}
//             {/*    <button>*/}
//             {/*        <p>Home</p>*/}
//             {/*    </button>*/}
//             {/*</NavLink>*/}
//
//             <Grow in>
//                 <Grid container justify="center" alignItems="stretch" spacing={3}>
//                     <Grid item xs={12} sm={7}>
//                         <SetForm/>
//                     </Grid>
//                 </Grid>
//             </Grow>
//         </Container>
//     );
// }
//
// export default UploadSet;