import React, {useEffect, useState} from 'react';
import './tile.css';
import {Link, NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import ReactCardFlip from 'react-card-flip';
import {StackCard} from "react-stack-cards";
import axios from "axios";
//get tile info from db
let tileid = 100;
let title;
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
                {/*front*/}
                    {localStorage.getItem("text")}
                    {/*<div align='right-corner'><FaStar  size={30} className='tool-button' color = "yellow"></FaStar></div>*/}
                </div>
                <div onClick={this.handleClick} className='card'>
                    {/*{back}*/}
                    {localStorage.getItem("text1")}

                    {/*<div align='right'><FaStar  size={30} className='tool-button' color = "yellow"></FaStar></div>*/}

                </div>
            </ReactCardFlip>
    </StackCard>
            </div>

    )
    }
}
export default card;