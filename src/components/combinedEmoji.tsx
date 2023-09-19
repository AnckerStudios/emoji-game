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
    useEffect(()=>{
        getEmoji(first, second)
          .then(response => {setCombinedEmoji(response)})
      },[first||second])
    
    return(
      combinedEmoji!==""?
        <img src={res}/>:
        "Combination is not possible"
    )
}