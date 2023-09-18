import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'
import { emojiList } from '../modules/emojis'

let didInit = false;//в dev режиме useEffect вызывается дважды, в теории можно отключить <React.StrictMode>

export function BasicEmoji(){
    const[test,setTest] = useState<string>()
    useEffect(()=>{
      if(!didInit){
        didInit = true;
        getEmoji(emojiList[0], emojiList[1])
        .then(resp => {setTest(resp)})
      }
     
    },[])
    
    return(
      <img src={test}/>
    )
}