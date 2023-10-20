import { EmojiComboI, EmojiComboState } from '../../interfaces/emojiComboI'

interface StateProps{
    emojiCombo:EmojiComboI;
}

export function StateRoulette({emojiCombo}:StateProps){  
    let style = 'absolute inset-0 flex items-center justify-center text-4xl ';
    style += emojiCombo.state === EmojiComboState.UNKNOWN ? 'text-white ' : '';
    let stateSymbol;
    switch(emojiCombo.state){
        case EmojiComboState.UNKNOWN:
            stateSymbol = '❔';
            break;
        case EmojiComboState.CORRECT:
            stateSymbol = '✔';
            break;
        case EmojiComboState.WRONG:
            stateSymbol = '❌';
            break;
    }
        
    return(
        <div className={style}>{stateSymbol}</div>
    )
}