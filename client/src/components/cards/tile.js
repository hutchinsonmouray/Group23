import React, {useEffect, useState} from 'react';
import './tile.css';
import {Link, NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import ReactCardFlip from 'react-card-flip';
//get tile info from db
let tileid = 100;
let title;
let descrp = 'description';

class card extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div onClick={this.handleClick} className='card'>
                front
                </div>
                <div onClick={this.handleClick} className='card'>
                    back
                </div>
            </ReactCardFlip>
        )
    }
}
function frontText() {

    let frontText = "frontText";
   let  backText = "backText";

    // if (localStorage.getItem("tileTitle")!=null)

    return (
        {frontText}
    );
}

export default card;