import { EmojiComboI } from '../../interfaces/emojiComboI'
import { InnerComponent } from './InnerRoulette'

interface BaseProps{
    emojiComboList: EmojiComboI[]
    visibleListSize:number
}

export function BaseComponent({emojiComboList, visibleListSize}:BaseProps){  
    const middleIdx = Math.floor(visibleListSize/2);
    
    return(
        <div className='flex flex-col gap-6 items-center justify-center'>
            { emojiComboList.slice(0,visibleListSize).map((emojiCombo, i) => (
                InnerComponent({emojiCombo, i, middleIdx})
            ))}
        </div>
    )
}