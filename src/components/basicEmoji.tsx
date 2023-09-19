import { useEffect, useState } from 'react'

type BasicEmojiProps ={
    emoji:string
}
export function BasicEmoji({emoji}:BasicEmojiProps){
    return(
        <div>{emoji}</div>
    )
}