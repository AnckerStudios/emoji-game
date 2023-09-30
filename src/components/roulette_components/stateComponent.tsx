import { EmojiComboI } from '../../interfaces/emojiComboI'

interface StateProps{
    emojiCombo:EmojiComboI|null;
}

export function stateComponent({emojiCombo}:StateProps){  
    let style = 'absolute inset-0 flex items-center justify-center text-4xl ';
    style+= emojiCombo?.state ==='pre' ? 'text-white ' : '';
    return(
        <>
        <div>
            
        </div>
        <div>//короче емое тут все это переделать
            { x && x.state === "pre" && i !== 3 && <div className="absolute inset-0 flex items-center justify-center text-4xl text-white">?</div>}
            { x && x.state !== "pre" && i !== 3 && <div className="absolute inset-0 flex items-center justify-center text-4xl">{x.state === "right" ? '✔' : '❌'}</div>}
        </div>
        </>
    )
}