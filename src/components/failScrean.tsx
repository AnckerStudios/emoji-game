import { FunctionComponent } from "react";
import { failEmojis } from "../modules/emojis";
import { getRandomEmojiFromArray } from "../modules/random";

interface FailScreanProps {
    
}
 
const FailScrean: FunctionComponent<FailScreanProps> = () => {
    let emoji = getRandomEmojiFromArray(failEmojis);
    return (  
        <div className='absolute inset-0 bg-black/80 flex items-center justify-center'>
            <h1 className=" text-[12rem] font-bold text-red-700">FAIL</h1>
            <div className=" text-[15rem]">{emoji}</div>
            <h1 className=" text-[12rem] font-bold text-red-700">FAIL</h1>
        </div>
    );
}
 
export default FailScrean;