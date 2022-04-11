import React, {useEffect, useState} from 'react';
import Tile from "./tile";
import {Card, Container, Grid, GridListTileBar, Grow, Radio, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./tile.css";


function setid() {
    return undefined;
}

localStorage.setItem("titleTile","T")

function Tiles() {
    // get stored tiles
    let currentID = 100
    console.log(currentID)

    let lectures = []
    let sets = []

    //Get the lectures from c++
    for (let i = 0; i<5; i++) {
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
    for (let i = 5; i<10; i++) {
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
        <Container className='home-columns' position = "relative">
                <div>
                    <Typography variant="h4">Sets</Typography>
                    <div className='tilesBox'>
                        {sets}
                    </div>
                </div>
               <div>
                   <Typography variant="h4">Lectures</Typography>
                   <div className="tilesBox">
                       {lectures}
                   </div>
               </div>
        </Container>

    );
}

export default Tiles;