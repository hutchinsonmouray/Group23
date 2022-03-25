import React, {useEffect} from 'react';
// import {Container, AppBar, Typography, Grow, Grid, Switch, Button, Tab, Backdrop} from '@material-ui/core';
import {Container, AppBar, Typography, Grow, Grid, TableRow} from '@material-ui/core';
import {Provider, useDispatch} from "react-redux";

import {getSets} from "./actions/sets";
import {getPosts} from "./actions/posts";
import useStyles from './styles';

//import './App.css';

//for multipage
import LearnSS from "./LearnSS"; //sample for extra page
import UploadLecture from "./UploadLecture"; //sample for extra page
import Home from "./Home"; //sample for extra page

import { BrowserRouter,Routes, Route} from "react-router-dom";

const App = () => {
    const  classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
        dispatch(getSets());
    },[dispatch]);

    return (
        //change the route/page of the website based on path
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                </Route>
                <Route path="/LearnSS" element={<LearnSS/>}>
                </Route>
                <Route path="/Upload_Lecture" element={<UploadLecture/>}>
                </Route>
            </Routes>
        </BrowserRouter>
);
}
export default App;