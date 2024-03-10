import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner"

const Random = () => {

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY ;

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState('');
    
    async function fetchData(){
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const {data} = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    }

    useEffect(
      ()=>{
        fetchData();
      },[]
    );

    function clickHandler(){
      fetchData();
    } 

  return (
    <div className='w-1/2 bg-green-500 rounded-lg flex flex-col gap-y-5 mt-[15px] items-center'>
      <h1 className='text-2xl underline uppercase font-bold'>Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="" />)
      }
      <button className='w-9/12 bg-white my-3 py-2' onClick={clickHandler}>Generate</button>
    </div>
  );
}

export default Random
