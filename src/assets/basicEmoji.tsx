import { useEffect, useState } from 'react'
import axios from 'axios';


export function BasicEmoji(){
    const[test,setTest] = useState<string>()
    useEffect(()=>{getEmoji().then(resp => {setTest(resp)})},[])
    async function getEmoji():Promise<string> {
        const a = await axios.get('https://tenor.googleapis.com/v2/featured', {
          params: {
            key: "AIzaSyDiVitUXK1JtMV--PnwOLGLDd3AJyUx5qo",
            contentfilter: "high",
            media_filter:"png_transparent",
            component:"proactive",
            collection:"emoji_kitchen_v6",
            q: '🍊_🦥'
          }})

        console.log(a);
        return a.data.results[0].url;
      }
    return(

        <img src={test}/>
    )
}