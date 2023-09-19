import axios from 'axios';
import { useEffect, useState } from 'react'


export const enum pixelSize{
    big = 512,
    medium = 128,
    small = 32
}
export const enum imageType {
    png = "png",
    svg = "svg"
}
type BasicEmojiProps ={
    emoji:string,
    size:pixelSize,
    type:imageType
}


export function BasicEmojiAsImage({emoji, size, type}:BasicEmojiProps){
    if(emoji){
        const emojiCode = emoji.codePointAt(0)!.toString(16);
        const url =`https://raw.githubusercontent.com/googlefonts/noto-emoji/main/${type}/${type===imageType.png?size:""}/emoji_u${emojiCode}.${type}`;
        return(
            <img src={url}/>
        )    
    }
    return(
        <div>DC</div>
    )

}