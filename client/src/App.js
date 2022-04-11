import React, {useEffect, useState} from 'react';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import {Container, AppBar, Typography, Grow, Grid, Button, Paper, TextField, Checkbox} from '@material-ui/core';
import {NavLink} from "react-router-dom";
function ExportLecture() {
    //runs the c++ add on that exports the file to csv;
    localStorage.getItem("creator").
    localStorage.getItem("title");
    localStorage.getItem("text");

    console.log(localStorage.getItem("creator"))
    console.log(localStorage.getItem("title"))
    console.log(localStorage.getItem("text"))

    // localStorage.clear();
    return null;
}

function saveLecture() {
    localStorage.getItem("creator");
    localStorage.getItem("title");
    localStorage.getItem("text");

    console.log(localStorage.getItem("creator"))
    console.log(localStorage.getItem("title"))
    console.log(localStorage.getItem("text"))
    //runs the c++ add on to save it as a local txt file or within the class

    localStorage.clear();
    return null;
}
function saveSet() {
    //runs the c++ add on;
    localStorage.getItem("creator");
    localStorage.getItem("title");
    localStorage.getItem("text");

    console.log(localStorage.getItem("creator"))
    console.log(localStorage.getItem("title"))
    console.log(localStorage.getItem("text"))

    localStorage.clear();
    return null;
}

function uploadLecture() {
    //runs the c++ add on;
    localStorage.getItem("title");
    localStorage.getItem("file");

    console.log(localStorage.getItem("title"))
    console.log(localStorage.getItem("file"))
    //runs the c++ add on to save it as a local txt file or within the class

    localStorage.clear();
    return null;
}
function uploadSet() {
    //runs the c++ add on;
    localStorage.getItem("title");
    localStorage.getItem("file");

    console.log(localStorage.getItem("title"))
    console.log(localStorage.getItem("file"))

    // add to long term data using wrapper c++

    localStorage.clear();
    return null;
}

function setPostData(type, param) {
    localStorage.setItem(type,param);
    // console.log(param)
    return null;
}


class App extends React.Component {
    setSetData(param) {
        localStorage.setItem('myData',param);
    }
    setSetData(selectedFile) {
        localStorage.setItem('myData',selectedFile);
    };

render() {
    return (
        <Container container justify="center" maxidth={"lg"} align="center">
                <NavLink  to={"/"} style={{ textDecoration: 'none' }} color='black'>
                    <AppBar align="center" justify="center" position='static' className='navBar'color ="inherit">
                        <Typography color="initial" align='center' variant="h2">StudyStream</Typography>
                    </AppBar>
                </NavLink>

        <div className={"App"}>
                {/*<button onClick={ ()=> this.setLectureData()}>Set Lecture Data</button>*/}
                {/*<button onClick={ ()=> this.getLectureData()}>Get Lecture Data</button>*/}

            <Grid className='uploadBox'>
            {/*Lecture*/}
                <div className='form-box'>
                    <Typography variant="h8">Want to Create a from scratch lecture?</Typography>
                    <form autoComplete="off" noValidate onSubmit={saveLecture()} className='form'>
                        {/*<div className='banner-container'>*/}
                        <Typography variant="h6">{'Create a Lecture'}</Typography>
                        {/*</div>*/}
                        <TextField name="creator" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData("creator",e.target.value)} />
                        <TextField name="message" variant="outlined" label="Title" fullWidth onChange={(e) =>  setPostData("title",e.target.value)} />
                        <TextField name="message" variant="outlined" label="Paste Lecture Here" fullWidth onChange={(e) =>  setPostData("text",e.target.value)} />
                        <Button onClick={saveLecture()} variant="contained" color="default" size="large" type="submit" fullWidth>Create a Lecture</Button>
                        <div>
                            <Checkbox onSubmit={()=>{saveSet()}}></Checkbox>
                            Auto-generate a set from this lecture?
                        </div>
                    </form>
                </div>
                <div className='form-box'>
                    Want to upload a downloaded Lecture? Upload it Below!
                    <form autoComplete="off" noValidate onSubmit={uploadLecture()}className='form'>
                        <Typography color = "textPrimary" variant="h6">{'Upload a Lecture'}</Typography>
                        <TextField name="message" variant="outlined" label="Title" fullWidth onChange={(e) =>  setPostData("title",e.target.value)} />
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData("file",{selectedFile: base64 })} />
                        <Button variant="contained" color="default" size="large" type="submit" fullWidth>Upload Lecture</Button>
                    </form>
                </div>
                <div className='form-box' align='center'>
                    <Typography className='form-box' >Want to create a Set from Scratch?</Typography>
                    <form autoComplete="off" noValidate onSubmit={saveSet()} className='form'>
                        <Typography variant="h6">{'Create a Set'}</Typography>
                        <TextField name="creator" variant="outlined" label="Creator" fullWidth onChange={(e) => setPostData("creator",e.target.value)} />
                        <TextField name="message" variant="outlined" label="Title" fullWidth onChange={(e) =>  setPostData("title",e.target.value)} />
                        <TextField name="message" variant="outlined" label="Paste Lecture Here" fullWidth onChange={(e) =>  setPostData("text",e.target.value)} />
                        <Button variant="contained" color="default" size="large" type="submit" fullWidth>Create a Set</Button>
                    </form>
                </div>
                <div className='form-box'>
                    <Typography>Want to upload a downloaded Set? Upload it Below!</Typography>
                    <form autoComplete="off" noValidate onSubmit={uploadSet()} className='form'>
                        <Typography variant="h6">{'Upload a Set'}</Typography>
                        <TextField name="message" variant="outlined" label="Title" fullWidth onChange={(e) =>  setPostData("title",e.target.value)} />
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData("file",{selectedFile: base64 })} />
                        <Button variant="contained" color="default" size="large" type="submit" fullWidth>Submit Set</Button>
                    </form>
                </div>
        </Grid>
        </div>
            </Container>
        );
    }
}
export default App;