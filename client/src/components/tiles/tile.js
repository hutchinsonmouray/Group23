import React, {useEffect, useState} from 'react';
import './tile.css';
import {Link, NavLink} from "react-router-dom";
import {Typography} from "@material-ui/core";
import axios from "axios";



function Tile () {
    const [posts, setPosts] = useState([]);
    let indexTemp = localStorage.getItem("getCurrentID").toString()

    useEffect(()=>{
        axios.get("/get-sets")
            .then(res=>{
                console.log(res)
                Object.fromEntries(res.data.title)
                setPosts(res.data) })
    })

    // state = {
    //     titles: [],
    // };

//      CallAPI () {
//     fetch('https://jsonplaceholder.typicode.com/todos').then(response =>{
//         return response.json();
//     }).then(data =>{
//         // console.log("Random API Data");
//         // console.log(data);
//     })
// }
//      CallAPI_Us() {
//         fetch("/get-set/4")
//             .then(res => res.json())
//             .then(data => {
//                 this.state.titles.push(data.creator + "Test");
//                 return data.creator
//                 // console.log(data.creator);
//             });
//     }
    // render () {
             // this.CallAPI();
             // this. CallAPI_Us();

    return (
            <div align="center"  className='tile-container'>
                {/*{posts}*/}
            </div>
    );
}

export default Tile;