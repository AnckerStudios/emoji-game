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
interface BasicEmojiProps { 
    emoji:string
    size?:pixelSize
    type:imageType
}


export function BasicEmojiAsImage({emoji, size = pixelSize.medium, type}:BasicEmojiProps){
    if(emoji){
        let emojiCode = emoji.codePointAt(0)!.toString(16);
        while(emojiCode.length<4){
            emojiCode = "0"+emojiCode
        }
        const url =`https://raw.githubusercontent.com/googlefonts/noto-emoji/main/${type}/${type===imageType.png?size+'/':""}emoji_u${emojiCode}.${type}`;
        return(
            <img loading="lazy" alt="sds" src={url}/>
        )    
    }
    return(
        <div>DC</div>
    )

}