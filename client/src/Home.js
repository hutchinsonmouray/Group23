import {BrowserRouter, Link, NavLink, Route} from "react-router-dom"; //for multipage
import React, {useEffect} from "react";
import useStyles from "./styles";
import Tiles from "./components/tiles/tiles"
import {AppBar, Button, Checkbox, CircularProgress, Container, Grid, Grow, Menu, MenuItem, Paper, Tab, TableRow, TextField, Typography
} from "@material-ui/core";

// export default function Home() {
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <div align='right'>
                        <NavLink style={{textDecoration: 'none'}} to={"/LearnSS"}>
                            {/*<p>About StudyStream</p>*/}
                            <button className='button-standard'>
                                <p>About StudyStream</p>
                            </button>
                        </NavLink>
                        <NavLink to={"/upload_set"} style={{textDecoration: 'none'}}>

                            <button className='button-standard'>
                                <p>Manage Sets & Lectures</p>
                            </button>
                        </NavLink>
                    </div>
                    <AppBar className='navBar' position="static" color="inherit">
                        <Typography variant="h2" align="center">StudyStream</Typography>
                    </AppBar>
                    <Tiles/>
                    {/*// Create Cards for lecture tile from ^^ data*/}
                </Container>
            </div>
        );
    }
}
