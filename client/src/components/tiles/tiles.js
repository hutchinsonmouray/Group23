import React, {Component,useEffect, useState} from 'react';
import Tile from "./tile";
import {Card, Container, Grid, GridListTileBar, Grow, Radio, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./tile.css";
import axios from "axios";

function CallAPI_Us() {
    fetch("/get-set/4")
        .then(res => res.json())
        .then(data => {
            return (data.creator).toString();
            console.log(data.creator);
        });
    return "Tile"
}

// class Tiles extends React.Component {
let index = 1;
let currentID = 1;

function Tiles () {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get("/get-set/"+index)
            .then(res=>{
                    console.log(res)
                    setPosts(res.data.title)
                }
            )
    })

    // render(){
        // get stored tiles
    console.log("Reset")

    let lectures = []
    let sets = []

    //Get the lectures from c++
    for (let i = 1; i<5; i++) {

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
    for (let i = 1; i<5; i++) {
        sets.push(
            <NavLink className='nav' to='./set_interface'style={{ textDecoration: 'none', color: 'black'}} onClick={()=>{
            currentID=i
            localStorage.setItem("getCurrentID",currentID)
                console.log(currentID)}}>
                <Tile></Tile>
            </NavLink>
        )
    }

    return (
        <Container className='home-columns' position = "static">
            <div className='overflow'>
                <Typography className='box-with-blue-border' variant="h4">Sets</Typography>
                <div className='tilesBox'>
                    <> {sets}</>

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
// }

}

export default Tiles;