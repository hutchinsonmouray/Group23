import React, {useEffect, useState} from 'react';
import './tile.css';
import {Link, NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";

//get tile info from db
let tileid = 100;
let title;
let descrp = 'description';

function Tile() {

    let g = "Tile"
    if (localStorage.getItem("tileTitle")!=null)
        g = localStorage.getItem("tileTitle")!=null.toString()

    return (
            <div className='tile-container'>{g}</div>
    );
}

export default Tile;