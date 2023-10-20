import { FunctionComponent, useEffect, useState } from "react";
import { fullEmojiList } from "../modules/emojis";
import { BasicEmojiAsImage, imageType, pixelSize } from "./BasicEmojiAsImage";
import { getRandomEmojiList } from "../modules/generator";

interface EmojiKeyboardProps {
    width: number,
    height: number,
    preEmoji: string,
    selectedEmoji: string,
    setEmoji: CallableFunction
}
 
const EmojiKeyboard: FunctionComponent<EmojiKeyboardProps> = ({ width = 5, height = 5, preEmoji, selectedEmoji, setEmoji }) => {
    let arr = fullEmojiList;
    const [emojiList, setEmojiList] = useState<string[]>([]);
    useEffect(() => {
        setEmojiList(getRandomEmojiList(preEmoji, fullEmojiList, width*height))
    },[preEmoji])
    let style = `w-full grid grid-cols-${width} `;
    return (
        <>
            <div className={style}>
                    {emojiList.map((x, i) => (
                        <button key={i} className={`hover:bg-sky-300 rounded-xl p-2 ${selectedEmoji === x && ' border-4 border-blue-300'}`} onClick={()=>setEmoji(x)}>
                            <BasicEmojiAsImage emoji={x} size={pixelSize.medium} type={imageType.svg} />
                        </button>
                    ))}
                </div>
        </>
    );
}
 
export default EmojiKeyboard;
