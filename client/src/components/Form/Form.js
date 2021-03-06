import React ,{useState} from 'react';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import useStyles from'./styles';
const Form =() => {
    const classes = useStyles();
    const [postData,setPostData] =useState({
        creator:''
    })

    const handleSubmit=() => {

    }
    return(
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a memory</Typography>
            <TextField 
            name="creator"
            variant="outlined"
            label="creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({..postData,creator:e.target.value})}
            />

        </form>
        </Paper>

    );

}

export default Form;
