import { FunctionComponent, useEffect, useState } from "react";
import { generate} from "../modules/generator";
import { fullEmojiList } from "../modules/emojis";
import EmojiKeyboard from "./EmojiKeyboard";
import { EmojiComboI, EmojiComboState } from "../interfaces/emojiComboI";
import { BaseComponent } from "./RouletteComponents/BaseRoulette";
import Preloader from "./Preloader";
import { BaseKeyboard } from "./KeyboardComponents/BaseKeyboard";

interface GuessGameProps {
    
}

const GuessGame: FunctionComponent<GuessGameProps> = () => {

    const [emojiList, setEmojiList] = useState<(EmojiComboI)[]>([]);
    const [selectedFirst, setSelectedFirst] = useState<string>('');
    const [selectedSecond, setSelectedSecond] = useState<string>('');
    const [keyboardCols, setKeyboardCols] = useState<number>(5);
    const emojiListSize = 10;

    function changeKeyboardSize(){
        const width = window.innerWidth;
        if(width>1024){
            setKeyboardCols(5);
        }
        else if(width > 768 && width<=1024){
            setKeyboardCols(3);
        }
        else {
            setKeyboardCols(2);
        }
    }

    useEffect(() => {
        if (emojiList.length) return;

        const generateEmojiList = async () => {
            const arr:(EmojiComboI)[] = [];
            for( let i = 0; i < emojiListSize; i++ ) {
                if (i < 3) {
                    const emptyElem:EmojiComboI = {
                        first: '',
                        second: '',
                        output: '',
                        state: EmojiComboState.EMPTY
                    };
                    arr.push(emptyElem);
                } else {
                    let cur = await generate("", fullEmojiList,fullEmojiList);
                    arr.push({...cur, state: i==3 ? EmojiComboState.CENTER : EmojiComboState.UNKNOWN})
                }
            }
            setEmojiList(arr);
        }
        generateEmojiList();
        changeKeyboardSize();
        window.addEventListener("resize", changeKeyboardSize)
    },[])

    useEffect(() => {
        if (!selectedFirst || !selectedSecond) {
            return;
        }
        const middleIdx = Math.floor((emojiListSize-3)/2);
        console.log(middleIdx);
        
        emojiList[middleIdx].state = selectedFirst === emojiList[middleIdx].first && selectedSecond === emojiList[middleIdx].second ? EmojiComboState.CORRECT : EmojiComboState.WRONG;
        emojiList[middleIdx+1].state = EmojiComboState.CENTER;
        setEmojiList((prev) => prev.slice(1))
        
        // setSelectedEmojis([])
        setSelectedFirst('')
        setSelectedSecond('')
        generate("", fullEmojiList, fullEmojiList)
        .then(res => {
            setEmojiList((prev) => [...prev, {...res, state: EmojiComboState.UNKNOWN}])
        })
        console.log(emojiList);
    },[selectedFirst, selectedSecond])


    return ( emojiList.length ? 
        <div className="mx-auto max-w-7xl flex gap-10 items-center">
                <BaseKeyboard width={5} height={5} cols={keyboardCols} preEmoji={emojiList[3].first} selectedEmoji={selectedFirst} setEmoji={setSelectedFirst} />
                <BaseComponent emojiComboList={emojiList} visibleListSize={emojiListSize-3}></BaseComponent>
                <BaseKeyboard width={5} height={5} cols={keyboardCols} preEmoji={emojiList[3].second}  selectedEmoji={selectedSecond} setEmoji={setSelectedSecond} />
        </div>: 
        <Preloader/>
    );
}
 
export default GuessGame;
//<EmojiRoulette emojiList={emojiList} />
