import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'

type CombinedEmojiProps = {
  first:string,
  second:string
}

//Компонент комбинированного emoji, полученного из запроса к гуглу
export function CombinedEmoji({first, second}:CombinedEmojiProps){
    const[combinedEmoji,setCombinedEmoji] = useState<string>()
    useEffect(()=>{
        getEmoji(first, second)
          .then(response => {setCombinedEmoji(response)})
      },[])
    
    return(
      combinedEmoji!==""?
        <img src={combinedEmoji}/>:
        "Combination is not possible"
    )
}