import { FunctionComponent } from "react";
import { fullEmojiList } from "../modules/emojis";
import { BasicEmojiAsImage, imageType, pixelSize } from "./basicEmojiAsImage";

interface EmojiKeyboardProps {
    emoji: string,
    setEmoji: CallableFunction
}
 
const EmojiKeyboard: FunctionComponent<EmojiKeyboardProps> = ({ emoji, setEmoji }) => {
    let arr = fullEmojiList;
    return (
        <>
            <div className=" overflow-y-scroll h-96">
                <div className=" grid grid-cols-6">
                    {arr.map(x => (
                        <button key={x} className={`hover:bg-sky-300 rounded-xl p-2 ${emoji === x && 'bg-sky-300'}`} onClick={()=>setEmoji(x)}>
                            <BasicEmojiAsImage emoji={x} size={pixelSize.medium} type={imageType.svg} />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default EmojiKeyboard;