import { BasicEmojiAsImage, imageType } from '../BasicEmojiAsImage';

interface ButtonKeyboardProps{
    emoji: string,
    selectedEmoji: string,
    i: number
    setEmoji: CallableFunction
}

export function ButtonKeyboard({ selectedEmoji, emoji, i, setEmoji}:ButtonKeyboardProps){  
    
    let style = `hover:bg-sky-300 rounded-xl p-2 `;
    style+= selectedEmoji === emoji ? ' border-4 border-blue-300' : '';
    
    return(
        <button key={i} className={style} onClick={()=>setEmoji(emoji)}>
            <BasicEmojiAsImage emoji={emoji} type={imageType.svg} />
        </button>
    );
}