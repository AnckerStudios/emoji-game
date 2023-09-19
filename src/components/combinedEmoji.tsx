import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'
import { emojiList } from '../modules/emojis'

//Компонент комбинированного emoji, полученного из запроса к гуглу
export function CombinedEmoji(){
    const[test,setTest] = useState<string>()
    useEffect(()=>{
        getEmoji(emojiList[0], emojiList[1])
          .then(response => {setTest(response)})
      },[])
    
    return(
      <img src={test}/>
    )
}