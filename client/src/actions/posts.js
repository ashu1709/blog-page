import *as api from'../api';

//action creators
const getposts =() => async(dispatch)=>{
    try {
        const {data} = await api.fetchposts();
        dispatch({type:'Fetch_ALL' ,payload:[data]});
    } catch (error) {
        console.log(error.message);
    } 
}