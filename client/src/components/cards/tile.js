import React, {useEffect, useState} from 'react';
import './tile.css';
import {Link, NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import ReactCardFlip from 'react-card-flip';
import {StackCard} from "react-stack-cards";
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

            <div className="box-with-blue-border">
            <StackCard
                color={"#D3D3D3"}
                // color={"white"}
                width="416"
                height="250"
                direction={this.state.directionStack}               >

            <ReactCardFlip className='card-container' isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div onClick={this.handleClick} className='card'>
                front
                </div>
                <div onClick={this.handleClick} className='card'>
                    back
                </div>
            </ReactCardFlip>
    </StackCard>
            </div>

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