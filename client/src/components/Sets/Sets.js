import React from 'react';
import {useSelector} from "react-redux";

import Set from './Sets/Set';
import useStyles from './styles';

const Sets = () => {
    const classes = useStyles();
    const sets = useSelector((state)=> state.sets);
    console.log(sets);
    return (
        <>
          <h1>Sets</h1>
            <Set/>
         <Set/>
         <Set/>
        </>

);
}

export default Sets;
