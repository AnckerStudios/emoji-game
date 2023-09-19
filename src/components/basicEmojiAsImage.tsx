import axios from 'axios';
import { useEffect, useState } from 'react'


export const enum sizes{
    big = 512,
    medium = 128,
    small = 32
}
type BasicEmojiProps ={
    emoji:string,
    size:sizes
}

export function BasicEmojiAsImage({emoji, size}:BasicEmojiProps){
    console.log(emoji)
    const emojiCode = emoji.codePointAt(0)!.toString(16);
    const url =`https://raw.githubusercontent.com/googlefonts/noto-emoji/main/png/${size}/emoji_u${emojiCode}.png`;
    return(
      <img src={url}/>
    )
}