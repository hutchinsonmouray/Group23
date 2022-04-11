import {BrowserRouter, Link, NavLink, Route} from "react-router-dom"; //for multipage
import React, {useEffect} from "react";
import useStyles from "./styles";
import Tiles from "./components/tiles/tiles"
import {AppBar, Button, Checkbox, CircularProgress, Container, Grid, Grow, Menu, MenuItem, Paper, Tab, TableRow, TextField, Typography
} from "@material-ui/core";

// trying to get lecture info
function getLecturesFin() {
    localStorage.setItem('1','my Value Name')
    localStorage.setItem('2','my Value Name')
    localStorage.setItem('3','my Value Name')
    localStorage.setItem('4','my Value Name')
    console.log('my Value Name')

    // let lects = <paper>test lect views</paper>;
    // let lects = [<menuitem></menuitem>]
    let lects = []


    for (let localStorageKey in localStorage) {
       let lectName = localStorage.getItem(localStorageKey)
       let lectNameA = [{lectName}]
        // lects = lects.concat(...lects, {lectNameA})
    }

    return lects;
}
function setLectures() {
    localStorage.setItem('myData','my Value Name')
    console.log('my Value Name')
   let data = localStorage.getItem('myData')
    return [<MenuItem>{data}</MenuItem>, <MenuItem>{data}</MenuItem>];
}
function getLectures() {
    let data = localStorage.getItem('myData');
    console.log(data)
    return data;
}
const Lectures = () => {

    return (
        <div>Lct</div>
    );
}

function navbar(props) {
    return (
      <nav className='navBar'>
          <ul className='navBar-nav'>
              {props.children}
          </ul>
      </nav>
    );
}
// trying to get lecture info
export default function Home() {
    const classes = useStyles();

    return (
        <div>
            {/*<div className='banner-container'>*/}
            <div>
            <NavLink  style={{ textDecoration: 'none' }} to={"/LearnSS"}>
                    {/*<p>About StudyStream</p>*/}
                <button className='button-standard'>
                    <p>About StudyStream</p>
                </button>
            </NavLink>
            <NavLink to={"/upload_set"} style={{ textDecoration: 'none' }} >
                    {/*<p>Manage Sets & Lectures</p>*/}

                { console.log("localStorage.length")}
                { console.log(localStorage.length)}

                <button className='button-standard'>
                    <p>Manage Sets & Lectures</p>
                </button>
            </NavLink>
            </div>

            <Container>
            <AppBar className={classes.appBar} position = "static" color ="inherit">
            <Typography  className={classes.heading} variant="h2" align="center">StudyStream</Typography>
            </AppBar>

            <Tiles/>
            {/*// Create Cards for lecture tile from ^^ data*/}
            </Container>
        </div>
        );
}
