import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'
import { emojiList } from '../modules/emojis'


export function BasicEmoji(){
    const[test,setTest] = useState<string>()
    useEffect(()=>{
        getEmoji(emojiList[0], emojiList[1])
          .then(resp => {setTest(resp)})
      },[])
    
    return(
      <img src={test}/>
    )
}