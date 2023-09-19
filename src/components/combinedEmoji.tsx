import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'

type CombinedEmojiProps = {
  first: string,
  second: string,
  res: string
}

//Компонент комбинированного emoji, полученного из запроса к гуглу
export function CombinedEmoji({first, second, res }:CombinedEmojiProps){
    const[combinedEmoji,setCombinedEmoji] = useState<string>()
    // useEffect(()=>{
    //   console.log("dsds");
    //     // getTenEmoji(first)
    //     // // getEmoji(first, second)
    //     //   .then(response => {setCombinedEmoji(response)})
    //   },[first])
    
    return(
      combinedEmoji!==""?
        <img src={res}/>:
        "Combination is not possible"
    )
}