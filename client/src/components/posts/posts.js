import React from 'react';
import { useSelector } from 'react-redux';

import post from './post/post';
import useStyles from'./styles';

const posts =() => {
    const posts =useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    return(
        <>
        <h1>
            posts
        </h1>
        <post/>

        <post/>
        </>
    )
}

export default posts;
