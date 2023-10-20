import { EmojiComboI, EmojiComboState } from '../../interfaces/emojiComboI'
import { StateRoulette } from './StateRoulette';

interface InnerProps{
    emojiCombo:EmojiComboI;
    i:number;
    middleIdx: number;
}

export function InnerComponent({emojiCombo, i, middleIdx}: InnerProps){  
    let style = 'relative bg-green grid place-items-center';
    style+= (i == middleIdx) ? 'w-big h-big rounded-big ' : 'w-small h-small rounded-small ' // посмотри tailwind.config.js

    let imgStyle = 'w-[80%] h-[80%] '
    imgStyle+= i > middleIdx ? 'contrast-0': '';

    return(
        <div key={i} className={style}>
            {emojiCombo.state!=EmojiComboState.EMPTY && <img className={imgStyle} key={i} src={emojiCombo.output} />}
            <StateRoulette emojiCombo={emojiCombo}></StateRoulette>
        </div>
    )
}