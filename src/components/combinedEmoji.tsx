import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'

type CombinedEmojiProps = {
  imageUrl: string
}

export function CombinedEmoji( {imageUrl}:CombinedEmojiProps){
    // const[combinedEmoji,setCombinedEmoji] = useState<string>()
    // useEffect(()=>{
    //     getEmoji(first, second)
    //       .then(response => {setCombinedEmoji(response)})
    //   },[first||second])
    
    return(
      imageUrl!==""?
        <img src={imageUrl}/>:
        "Combination is not possible"
    )
}