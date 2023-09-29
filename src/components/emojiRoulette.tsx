import { FunctionComponent } from "react";
import { EmojiComboI } from "../interfaces/emojiComboI";

interface EmojiRouletteProps {
    emojiList: (EmojiComboI|null)[]
}


 
const EmojiRoulette: FunctionComponent<EmojiRouletteProps> = ({emojiList}) => {
    return ( 
        <div className='flex flex-col gap-3 items-center justify-center'>
        { emojiList.slice(0,7).map((x, i) => (
            <div key={i} className={`p-2 relative ${i !== 3 ? 'w-20 h-20' : 'w-60 h-60'} bg-slate-200 rounded-2xl`}>
                {x && <img className={i > 3 ? 'contrast-0' : ''} key={i} src={x.output} />}
                { x && x.state === "pre" && i !== 3 && <div className="absolute inset-0 flex items-center justify-center text-4xl text-white">?</div>}
                { x && x.state !== "pre" && i !== 3 && <div className="absolute inset-0 flex items-center justify-center text-4xl">{x.state === "right" ? '✔' : '❌'}</div>}
            </div>
        ))}
        </div>
     );
}
 
export default EmojiRoulette;