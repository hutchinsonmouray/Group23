import React, {Component,useEffect, useState} from 'react';
import Tile from "./tile";
import {Card, Container, Grid, GridListTileBar, Grow, Radio, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./tile.css";



function setid() {
    return undefined;
}

localStorage.setItem("titleTile","T")
class Tiles extends React.Component {
// function Tiles() {_
    render(){
        // get stored tiles
    let currentID = 100
    console.log(currentID)

    let lectures = []
    let sets = []

    //Get the lectures from c++
    for (let i = 0; i<25; i++) {
        localStorage.setItem("titleTile","T")

        lectures.push(
            <NavLink className='nav' to='./lecture_interface'style={{ textDecoration: 'none', color: 'black'}} onClick={()=>{
            currentID=i
            localStorage.setItem("getCurrentID",currentID)
            console.log(currentID)
        }}>
          <Tile/>
            </NavLink>
        )
    }

//Get the sets from
    for (let i = 25; i<50; i++) {
        localStorage.setItem("titleTile","G")

        sets.push(
            <NavLink className='nav' to='./set_interface'style={{ textDecoration: 'none', color: 'black'}} onClick={()=>{
            currentID=i
            localStorage.setItem("getCurrentID",currentID)
            console.log(currentID)}}>
                <Tile/>
            </NavLink>
        )
    }

    return (
        <Container className='home-columns' position = "static">
            <div className='overflow'>
                <Typography className='box-with-blue-border' variant="h4">Sets</Typography>
                <div className='tilesBox'>
                    {sets}
                </div>
            </div>
            <div className='overflow'>
                <Typography className='box-with-blue-border' variant="h4">Lectures</Typography>
                <div className="tilesBox">
                    {lectures}
                </div>
            </div>
        </Container>

    );
}

}

export default Tiles;