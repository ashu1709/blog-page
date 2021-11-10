import React from 'react';
import useStyles from'./styles';

const post =() => {
    const classes = useStyles();
    return(
        <h1 className={classes.something}>
            post
        </h1>
    )
}

export default post;