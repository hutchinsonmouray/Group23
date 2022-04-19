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

class Titles extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            directionTinder: "swipeCornerDownRight",
            // directionToggle: "sideSlide",
            // directionTinder: "swipeCornerDownRight",

            directionToggle: "sideSlide",
            directionStack: "topRight",
            isOpen: false
        }
        this.Tinder = null
    }

    onTinderSwipe() {
        this.Tinder.swipe()
    }
    onToggle() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        const arr = ["first", "second", "third", "fourth"]
        const numbers = [0, 1, 2, 3]
        return (
            <div>
                <ToggleCard
                    images={arr}
                    width="350"
                    height="240"
                    direction={this.state.directionToggle}
                    direction='right'
                    duration={400}
                    className="toggle"
                    isOpen={this.state.isOpen}
                    onClick={()=> alert("Hello")}>
                    { numbers.map( i => <div>{i}</div> )}
                </ToggleCard>
                <button onClick={this.onToggle.bind(this)}>Toggle</button>

                <TinderLikeCard
                    images={arr}
                    width="350"
                    height="250"
                    direction={this.state.directionTinder}
                    duration={400}
                    ref={(node) => this.Tinder = node}
                    className="tinder">

                    { numbers.map( i => <div>{i}</div> )}
                </TinderLikeCard>
                <button onClick={this.onTinderSwipe.bind(this)}>Swipe</button>

                <StackCard
                    color={"#f95c5c"}
                    width="350"
                    height="240"

                    direction={this.state.directionStack}
                    // onClick={()=> alert("Hello")}
                    // onMouseEnter={()=> <Tile/>}>
                    onClick={()=> <Tile/>}>
                    <div>i</div>
                </StackCard>
            </div>
        );
    }
}
function setid() {
    return undefined;
}

// let sets = [<Tile/>];
let cards = []

localStorage.setItem("titleTile","T")

let filterClicked = false;

const CardSlider = () => {
    const [current, setCurrent] = useState(0)
    let length = cards.length

    if (!Array.isArray(cards) || cards.length==0) {
        return null;
    }

    const nextCard = () => {
        setCurrent(current === length-1 ? 0 : current+1)
        console.log(current);
    };
    const prevCard = () => {
        setCurrent(current === 0 ? length-1 : current-1)
        console.log(current);
    };
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
                {/*<FaFileDownload></FaFileDownload>*/}
                {/*<FaFileExport></FaFileExport>*/}
                {/*<FaRegFileExcel></FaRegFileExcel>*/}
                {/*<FaFileExcel></FaFileExcel>*/}
                {/*<FaFileExcel></FaFileExcel>*/}
                {/*<FaFilePdf></FaFilePdf>*/}
                {/*<FaReply></FaReply>*/}

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