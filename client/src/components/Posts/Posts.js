import React from 'react';
import {useSelector} from "react-redux";

import Post from './Post/Post';
import useStyles from './styles';
import {Link, NavLink} from "react-router-dom";
import {AppBar, Typography} from "@material-ui/core";

const Posts = () => {
    const posts = useSelector((state)=> state.posts);
    const classes = useStyles();

    console.log(posts);
    return (
        <>
          <h1>Lectures (aka Posts)</h1>

            <Link to={"/Lecture_Interface"}>
                <Post/>
            </Link>

            <Link to={"/Lecture_Interface"}>
                <Post/>
            </Link>

            <Link to={"/Lecture_Interface"}>
                <Post/>
            </Link>

        </>

);
}

export default Posts;
