import { FunctionComponent } from "react";
import Test from "./test";
import { fullEmojiList } from "../modules/emojis";
import { BasicEmojiAsImage, imageType, pixelSize } from "./basicEmojiAsImage";

interface EmojiKeyboardProps {
    
}
 
const EmojiKeyboard: FunctionComponent<EmojiKeyboardProps> = () => {
    let arr = fullEmojiList;
    return (
        <>
            <div className=" overflow-y-scroll w-[1000px] h-96">
                <div className=" grid grid-cols-12 gap-2">
                    {arr.map(x => (
                        <button className="hover:bg-sky-100 rounded-xl p-2">
                            <BasicEmojiAsImage emoji={x} size={pixelSize.medium} type={imageType.svg} />
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default EmojiKeyboard;