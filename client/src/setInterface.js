import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import {AppBar, Checkbox, Container, Grid, Grow, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Tiles from './components/cards/tiles'
import Tile from './components/cards/tile'
import axios from "axios";

const SetInterface  = () => {
    // render() {

    const [posts, setPosts]= useState([]);
    const [creator, setCreator]= useState([]);
    const [cardsKeys, setCardKeys]= useState([]);
    const [cardsVals, setCardsVals]= useState([]);

    let index = "6"
    useEffect(()=>{
        axios.get("/get-set/" + index)
            .then(res=>{
                    console.log(res)
                    setPosts(res.data.title)
                    setCreator(res.data.creator)
                setCardsVals(Object.values(res.data.set))
                setCardKeys(Object.keys(res.data.set))
                }
            )
        // .catch(console.log(onerror))
    },[])

        return (
            <Container maxidth={"lg"}>
                <Grid>
                    <NavLink style={{textDecoration: 'none'}} to={"/LearnSS"}>
                        {/*<p>About StudyStream</p>*/}
                        <button className='button-standard' color='purple'>
                            <p>Export for Quizlet</p>
                        </button>
                    </NavLink>
                    <NavLink className='right' style={{textDecoration: 'red'}} to={"/LearnSS"}>
                        <button className='button-standard' onClick={() => {
                            alert("your set has been deleted")
                        }}>
                            <p>Delete</p>
                        </button>
                    </NavLink>
                </Grid>

                <NavLink to={"/"} style={{textDecoration: 'none'}} color='black'>
                    <AppBar align = "center" className='navBar' position="static" color="inherit">
                        <Typography variant="h2" aligin="center">StudyStream</Typography>
                    </AppBar>
                </NavLink>

                {localStorage.getItem("getCurrentID").toString()}
                {/*add a border and make it look nice w/ typ*/}
                {/*<Typography className={classes.heading} variant="h5" aligin="center">h5 Set interface</Typography>*/}
                {/*<Typography className={classes.heading} variant="subtitle1" aligin="center"> subtitle1 Set interface</Typography>*/}
                {/*<Typography className={classes.heading} variant="body2" aligin="center">body2 Set interface</Typography>*/}
                <Typography className='box-with-blue-border' variant="h6">{posts}</Typography>
                {/*<div className="lectureI">*/}
                <Container className='box-with-blue-border'>
                    <Tiles/>
                </Container>
                <div align='right'>
                    <Typography className='button-standard'>This set was made by: {creator}</Typography>
                </div>
                {/*</div>*/}
            </Container>
        );
    // }
}

export default SetInterface;