import { FunctionComponent } from "react";
import { BasicEmojiAsImage, pixelSize, imageType } from "./BasicEmojiAsImage";
import EmojiKeyboard from "./EmojiKeyboard";

interface EmojiPickerProps {
    emoji: string,
    setEmoji: CallableFunction
}
 
const EmojiPicker: FunctionComponent<EmojiPickerProps> = ({ emoji, setEmoji }) => {
    return (
        <>
          <BasicEmojiAsImage emoji={emoji} size={pixelSize.small} type={imageType.svg}/>
          <EmojiKeyboard emoji={emoji} setEmoji={setEmoji} />
        </>
    );
}
 
export default EmojiPicker;