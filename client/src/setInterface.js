import React, {useEffect} from 'react';
import useStyles from "./styles";
import {AppBar, Checkbox, Container, Grid, Grow, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Tiles from './components/cards/tiles'
import Tile from './components/cards/tile'

function getCurrentId() {
// gets the set id from the db
}

function deleteSet() {
    return <div onClick={()=> alert("Are you Sure?")}/>;
}

const SetInterface = () => {
    const  classes = useStyles();

    localStorage.getItem("getCurrentID").toString();

    return (
        <Container maxidth={"lg"}>
            <Grid>
                <NavLink style={{ textDecoration: 'none' }} to={"/LearnSS"}>
                    {/*<p>About StudyStream</p>*/}
                    <button className='button-standard' color='purple'>
                        <p>Export for Quizlet</p>
                    </button>
                </NavLink>
                <NavLink className='right' style={{ textDecoration: 'red' }} to={"/LearnSS"}>
                    <button  className='button-standard' onClick={deleteSet()}>
                        <p >Delete</p>
                    </button>
                </NavLink>
            </Grid>

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
            <Typography className='box-with-blue-border' variant="h6">Set Name</Typography>
            <Container className='box-with-blue-border'>
                <Tiles></Tiles>
                {/*<Tile></Tile>*/}
                {/*<div className="set-tool-bar">*/}
                {/*    <button  className='tool-button' onClick={deleteSet()}> Left </button>*/}
                {/*    <button  className='tool-button1' onClick={deleteSet()}> Right </button>*/}
                {/*    <button  className='tool-button2' onClick={deleteSet()}> Star </button>*/}
                {/*    <button  className='tool-button3' onClick={deleteSet()}> Shuffle </button>*/}
                {/*    <Checkbox/>  <Typography variant="h6">Only view starred cards</Typography>*/}

                {/*</div>*/}

            </Container>
            <div align='right'>
                <Typography className='button-standard'>This set was created by INSERT CREATOR</Typography>
            </div>
        </Container>
    );
}

export default SetInterface;