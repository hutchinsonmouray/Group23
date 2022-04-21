import React, {useEffect, useState} from 'react';
import Tile from "./tile";
import {Card, Container, Grid, GridListTileBar, Grow, Radio, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./tile.css";
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import zIndex from "@material-ui/core/styles/zIndex";
import {
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaArrowAltCircleLeft,
    FaArrowAltCircleRight,
    FaCross,
    FaDice, FaDiceD20,
    FaDiceFour,
    FaFileCsv,
    FaFileDownload,
    FaFileExcel,
    FaFileExport,
    FaFilePdf,
    FaFilter,
    FaMix,
    FaQuestion,
    FaRandom,
    FaRegFileExcel,
    FaReply,
    FaShapes,
    FaStar,
} from "react-icons/fa";
import axios from "axios";

let cards = []
let filterClicked = false;

const CardSlider = () => {
    const [current, setCurrent] = useState(0)
    const [keep, setKeep] = useState(0)

    const [currentFront, setCurrentFront] = useState(0)
    const [currentBack, setCurrentBack] = useState(0)

    useEffect(()=>{
        axios.get("/get-set/1")
            .then(res=>{
                // setCurrentCard(res.data.set.at(0))
                setCurrent((0))
                setCurrentFront(Object.keys(res.data.set).at(0))
                setCurrentBack(Object.values(res.data.set).at(0))
                console.log(Object.keys(res.data.set))
                console.log(Object.values(res.data.set))
                setKeep(Object.values(res.data.set))
                console.log("ehre")
                // console.log(currentBack)
                })
    },[])
    let length = cards.length
    if (!Array.isArray(cards) || cards.length==0) {
        return null;
    }

    const nextCard = () => {
        // current = current % keep.size();
        setCurrent(current === length-1 ? 0 : current+1)
        setCurrentFront(Object.keys(keep).at(current))
        // setCurrentBack(currentFront.valueOf)
        setCurrentBack(Object.values(keep).at(current))
        console.log(current);
    };
    const prevCard = () => {
        setCurrent(current === 0 ? length-1 : current-1)
        setCurrentFront(Object.keys(keep).at(current))
        setCurrentBack(Object.values(keep).at(current))
        console.log(current);    };
    function shuffleCards () {
        let tempCards = [];
        let firstVal = randomCard();
        tempCards.push(cards.at(firstVal));
        delete cards.at(firstVal);

        let i = cards.length;
        while (i>0){
            firstVal = randomCard();
            tempCards.push(cards.at(firstVal));
            delete cards.at(firstVal);
            i--;
        }

        cards = tempCards;
    };
    const randomCard = () => {
        //Formula for getting random #
        let randVal = 0;
        let star = true;
        // Got random value formula from: https://css-tricks.com/generate-a-random-number/#:~:text=Generating%20a%20random%20number%20with%20JavaScript%20is%20pretty,That%20will%20return%20a%20random%20number%20between%201-100.?msclkid=9a03202eba3d11eca1b013cb817fc2f0
        randVal = Math.floor(Math.random() * 101) % cards.length;

        setCurrent(current === randVal ? randomCard() : randVal)
        console.log(randVal);
        return randVal;
    };
    // let e = Window.event;
    // if (e.key()===40) {
    //     nextCard();
    // }
    return (
        <Container align="center">
            {current}
            <br/>
            {currentFront}
            <br/>
            {currentBack}
            <br/>

            {/*<Titles/>*/}
            {/*className='slider'*/}
            <div>
                {cards.map((card,index)=>{ return (
                    <div>
                        <div>
                            {
                                index === current && (cards.at(index))
                            }
                            {/*{index}*/}
                        </div>
                    </div>
                );
                })}
            </div>

            <div className='set-tool-bar'>

                <FaStar  size={30} className='tool-button' color = "yellow"></FaStar>
                <FaFilter  size={30} className='tool-button'  onClick = {()=>{filterClicked=!filterClicked}} color = {(filterClicked===true) ? "yellow" : "black"}> </FaFilter>
                <FaDice  size={30} className='tool-button' color = "indigo" onClick={()=>{setCurrent(randomCard())}} ></FaDice>
                <FaAngleDoubleLeft  size={30} className='tool-button' onClick={()=>{setCurrent(0)}} ></FaAngleDoubleLeft>
                <FaArrowAltCircleLeft  size={30} className='tool-button'  onClick={prevCard}></FaArrowAltCircleLeft>
                <FaArrowAltCircleRight size={30} className='tool-button'  onClick={nextCard}></FaArrowAltCircleRight>
                <FaAngleDoubleRight size={30} className='tool-button'  onClick={()=>{setCurrent(cards.length-1)}} ></FaAngleDoubleRight>
                <FaRandom size={30} className='tool-button' onClick={()=>{shuffleCards()}} color="orange"></FaRandom>
                <FaQuestion  size={30} className='tool-button' color = "purple" onClick={()=>{alert("File: Download this Set for use in StudyStream! \n" + "Star: Star the current card \n" + "Filter: Only show starred cards\n" + "Dice: Jump to random card \n" + ">>: Jump to last card \n" + "<<: Jump to first card \n" + "->: Next card\n"+ "<-: Previous card\n"+ "Cross-arrow: Shuffle cards\n")}}></FaQuestion>

                <FaFileDownload  size={30} className='tool-button' color="green"></FaFileDownload>
            </div>
        </Container>
    );
}

function Tiles() {
    // get stored tiles
    let currentID = 100
    console.log(currentID)

//Get the sets from
    if (cards.length===0) { //makes it only get cards once

        for (let i = 25; i<50; i++) {
            localStorage.setItem("titleTile","G")
            localStorage.setItem("getCurrentID",currentID)
            console.log(currentID)

            cards.push(
                <Tile/>
            )
        }}



    return (
        <Container position = "static">
            {/*// directionTinder: "swipeCornerDownRight",*/}
            {CardSlider()}
            {/*<TinderLikeCard children={sets} direction='swipeCornerDownRight'/>*/}
        </Container>

    );
}

export default Tiles;
