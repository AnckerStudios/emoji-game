import { EmojiComboI } from '../../interfaces/emojiComboI'

interface InnerProps{
    emojiCombo:EmojiComboI|null;
    i:number;
}

const middleIdx = 3;
export function innerComponent({emojiCombo,i}:InnerProps){  
    let style = '-2 relative bg-green rounded-2xl grid place-items-center ';
    style+= (i == middleIdx) ? 'w-big h-big rounded-big shadow-big shadow-peach translate-x-5 translate-x-5 ' : 'w-small h-small rounded-small '//посмотри tailwind.config.js

    let imgStyle = 'w-[80%] h-[80%] '
    imgStyle+= i > middleIdx ? 'contrast-0': '';

    return(
        <div key={i} className={style}>
                {emojiCombo && <img className={imgStyle} key={i} src={emojiCombo.output} />}
        </div>
    )
}