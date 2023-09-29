import { EmojiComboI } from '../../interfaces/emojiComboI'
import { innerComponent } from './innerComponent'

interface BaseProps{
    emojiComboList: (EmojiComboI|null)[]
}

export function BaseComponent({emojiComboList}:BaseProps){  
    
    return(
        <div className='flex flex-col gap-6 items-center justify-center'>
            { emojiComboList.slice(0,7).map((emojiCombo, i) => (
                innerComponent({emojiCombo,i})
            ))}
        </div>
    )
}