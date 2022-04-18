import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {Container, AppBar, Typography, Grow, Grid, Button, Paper, TextField, Checkbox} from '@material-ui/core';
import {NavLink} from "react-router-dom";

export default class App extends React.Component{
    state = {
        title: null,
        creator: null,
        number: null,
        lecture: null,
    };

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        })
    }

    handleCreatorChange(e){
        this.setState({
            creator: e.target.value
        })
    }

    handleLectureChange(e){
        this.setState({
            lecture: e.target.value
        })
    }

    handleNumberChange(e){
        this.setState({
            number: e.target.value
        })
    }

    callAPI() {
        fetch("/make-cards/" + this.state.number, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "transcript" : this.state.lecture,
                "creator" : this.state.creator,
                "title" : this.state.title
            })
        })
    }

    render(){
        return(
        <Container container justify="center" maxidth={"lg"} align="center">

        <div className={"App"}>

            <div>
            <NavLink  to={"/"} style={{ textDecoration: 'none' }} color='black'>
                <AppBar align="center" justify="center" position='static' className='navBar'color ="inherit">
                    <Typography color="initial" align='center' variant="h2">StudyStream</Typography>
                </AppBar>
            </NavLink>
        </div>
            {/*White bubble with grid below*/}
            <Typography className='form-box' align='center'>
                <div className='form-box-text'>
                    <Typography variant="h4" color='inherit' align='center'>User Guide</Typography>
            Want to Create a lecture from scratch? use "Create a Lecture"<br/>
            Want to upload a downloaded lecture? use "Upload a Lecture" <br/>
            Want to upload a downloaded set? use "Upload a Set"  <br/>
            Want to create a Set from scratch? use "Create a Set"<br/>

                </div>
            </Typography>

            <Grid className='uploadBox'>
            {/*Lecture*/}
                    <form autoComplete="off" noValidate onSubmit={(e) => this.callAPI(e)} className='form'>
                        <Typography variant="h6">{'Create a Lecture'}</Typography>
                        <TextField name="creator" variant="outlined" label="Title" id="creator" fullWidth value={this.state.title} onChange={(e) => this.handleTitleChange(e)} />
                        <TextField name="message" variant="outlined" label="Creator" id="title" fullWidth value={this.state.creator} onChange={(e) =>  this.handleCreatorChange(e)}/>
                        <TextField name="message" variant="outlined" label="Number" id="number" fullWidth value={this.state.number} onChange={(e) =>  this.handleNumberChange(e)}/>
                        <TextField name="message" variant="outlined" label="Paste Lecture Here" id="pasteLecture" fullWidth value={this.state.lecture} onChange={(e) =>  this.handleLectureChange(e)}/>
                        <Button variant="contained" color="default" size="large" type="submit" fullWidth>Create a Lecture</Button>
                        <div>
                            <Checkbox></Checkbox>
                           <Typography variant="caption">
                               Auto-generate a set from this lecture?
                           </Typography>
                        </div>
                    </form>
                    </Grid>
        </div>
            </Container>
        );
    }
}