// import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import {Provider, useDispatch} from 'react-redux';
// import {createStore,applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';`
// import reducers from "./reducers";
//
//
// import App from './App';
// import {getPosts} from "./actions/posts";
// import {getSets} from "./actions/sets";
// import memories from "./images/memories.png";
// import Posts from "./components/Posts/Posts";
// import Sets from "./components/Sets/Sets";
// import Form from "./components/Form/Form";
import useStyles from "./styles";

import {Grid, Grow, Paper} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import React from "react";
import {AppBar, Button, Container, TextField, Typography} from "@material-ui/core";

const LearnSS = () => {
    const  classes = useStyles();

        return (
        <Container maxidth={"lg"}>

            {/*Header Bar*/}
            <NavLink  to={"/"} style={{ textDecoration: 'none' }} color='black'>
                <AppBar className={classes.appBar} position = "static" color ="inherit">
                    <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
                </AppBar>
            </NavLink>

            <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                    </Grid>
                </Grid>
            </Grow>
            <div>
                    {/*add a border and make it look nice w/ typ*/}
                    {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 LearnSS</Typography>*/}
                    {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 LearnSS</Typography>*/}
                    {/*<Typography className={classes.heading} variant="body2" aligin="center">h5 LearnSS</Typography>*/}
                      <div ><Paper>
                          <Typography  variant="h5" aligin="center">Purpose</Typography>
                          <Typography className="box-with-heading"  variant="body1" aligin="center">
                              StudyStreams purpose is to facilitate remote learning for students; it allows students to gain access to the most important zoom lecture topics at their fingertips by offering a flashcard study interface, class interaction, and lecture summaries.
                          </Typography>
                      </Paper></div>


                <Paper>
                <Typography className={classes.heading} variant="h5" aligin="center">User Guide</Typography>
                    <Typography className="box-with-heading"  variant="body1" aligin="center">Visit our interfaces to and click the question mark to learn how to use them!</Typography>
                </Paper>
                <Paper>
                <Typography className={classes.heading} variant="h5" aligin="center">FAQs</Typography>
                    <Typography className="box-with-heading"  variant="body1" aligin="center">How will the system find the keywords?
                        The process will find a certain word such as “definition” or “key word” to detect when to mark the term as a vocab word or concept.
                        There would also be a portion that asks you to put in the word/concept, and if it is detected it will be included in the term list.
<br/>
                        <br/>

                        How can I make sure that my zoom chat conversations will not be a part of the StudyStream transcript?
                        StudyStream will only include certain words to be recorded in the CSV file.  When the specific keywords are written in the chat, the StudyStream backend algorithm will make sure to only include the detected keywords and definitions.
                        There would also be a portion that allows teachers to skim through the CSV file to verify if all keywords and definitions are accurate.
                        <br/>
                        <br/>
                        <br/>

                        How can I make sure that my zoom chat conversations will not be a part of the StudyStream transcript?
                        StudyStream will only include certain words to be recorded in the CSV file.  When the specific keywords are written in the chat, the StudyStream backend algorithm will make sure to only include the detected keywords and definitions.
                        There would also be a portion that allows teachers to skim through the CSV file to verify if all keywords and definitions are accurate.
                        <br/>
                        <br/>

                    </Typography>
                </Paper>
            </div>
        </Container>
    );
}
export default LearnSS;


// //
// // function LearnSS() {
// const LearnSS = () => {
//     const  classes = useStyles();
//     // const dispatch = useDispatch();
//
//     // useEffect(()=> {
//     //     dispatch(getPosts());
//     //     dispatch(getSets());
//     // },[dispatch]);
//
//     return (
//         <Container maxidth={"lg"}>
//
//             {/*Header Bar*/}
//             <NavLink to={"/"}>
//                 <AppBar className={classes.appBar} position = "static" color ="inherit">
//                     <Typography className={classes.heading} variant="h2" aligin="center">StudyStream</Typography>
//                 </AppBar>
//             </NavLink>
//
//             <Grow in>
//                 <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//                     <Grid item xs={12} sm={7}>
//                     </Grid>
//                 </Grid>
//             </Grow>
//             <Paper className={classes.paper}>
//                 {/*add a border and make it look nice w/ typ*/}
//                 {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 LearnSS</Typography>*/}
//                 {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 LearnSS</Typography>*/}
//                 {/*<Typography className={classes.heading} variant="body2" aligin="center">h5 LearnSS</Typography>*/}
//                 <form>
//                     <div>
//                         <Typography className={classes.heading} variant="h5" aligin="center">Purpose</Typography>
//                         Purpose
//                         <Typography className={classes.heading} variant="h5" aligin="center">User Guide</Typography>
//                         User Guide
//                         <Typography className={classes.heading} variant="h5" aligin="center">FAQs</Typography>
//                         FAQs
//                     </div>
//                 </form>
//             </Paper>
//         </Container>
//     );
// }
//
// export default LearnSS;