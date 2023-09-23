import { useEffect, useState } from 'react'

type BasicEmojiProps ={
    emoji:string
}


export function BasicEmoji({emoji}:BasicEmojiProps){    // А он нам нужен?
    return(
        <div>{emoji}</div>
    )
}