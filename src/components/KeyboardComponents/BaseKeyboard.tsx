import { useEffect, useState } from 'react';
import { fullEmojiList } from '../../modules/emojis';
import { getRandomEmojiList } from '../../modules/generator';
import { ButtonKeyboard } from './ButtonKeyboard';

interface BaseKeyboardProps{
    width: number,
    height: number,
    cols: number,
    preEmoji: string,
    selectedEmoji: string,
    setEmoji: CallableFunction
}
export function BaseKeyboard({ width = 5, height = 5, cols, preEmoji, selectedEmoji, setEmoji }:BaseKeyboardProps){  
    const [emojiList, setEmojiList] = useState<string[]>([]);
    
    useEffect(() => {
        setEmojiList(getRandomEmojiList(preEmoji, fullEmojiList, width*height))
    },[preEmoji])
    let style = `w-full grid grid-cols-${cols} `;
    return(
        <div className={style}>
            {emojiList.map((emoji, i) => (ButtonKeyboard({emoji, selectedEmoji, i, setEmoji}))) }
        </div>
    );
}