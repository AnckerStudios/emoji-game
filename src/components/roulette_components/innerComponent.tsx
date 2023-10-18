import { EmojiComboI, EmojiComboState } from '../../interfaces/emojiComboI'
import { StateComponent } from './stateComponent';

interface InnerProps{
    emojiCombo:EmojiComboI;
    i:number;
    middleIdx: number;
}

export function InnerComponent({emojiCombo, i, middleIdx}:InnerProps){  
    let style = '-2 relative bg-green rounded-2xl grid place-items-center ';
    style+= (i == middleIdx) ? 'w-big h-big rounded-big shadow-big shadow-peach translate-x-5 translate-x-5 ' : 'w-small h-small rounded-small '//посмотри tailwind.config.js

    let imgStyle = 'w-[80%] h-[80%] '
    imgStyle+= i > middleIdx ? 'contrast-0': '';

    return(
        <div key={i} className={style}>
            {emojiCombo.state!=EmojiComboState.EMPTY && <img className={imgStyle} key={i} src={emojiCombo.output} />}
            <StateComponent emojiCombo={emojiCombo}></StateComponent>
        </div>
    )
}