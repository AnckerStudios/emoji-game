import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'
import { emojiList } from '../modules/emojis'
import { fullEmojiList } from '../modules/emojis'

//Компонент комбинированного emoji, полученного из запроса к гуглу
export function CombinedEmoji(){
    const[combinedEmoji,setCombinedEmoji] = useState<string>()
    useEffect(()=>{
        getEmoji(emojiList[3], emojiList[6])
          .then(response => {setCombinedEmoji(response)})
      },[])
    
    return(
      <img src={combinedEmoji}/>
    )
}