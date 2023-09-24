import { FunctionComponent, useEffect, useState } from "react";
import { CombinedEmoji } from "./combinedEmoji";
import { generate, getRandomEmojiList } from "../modules/generator";
import { fullEmojiList } from "../modules/emojis";
import { BasicEmojiAsImage, imageType, pixelSize } from "./basicEmojiAsImage";
import EmojiKeyboard from "./emojiKeyboard";
import EmojiRoulette from "./emojiRoulette";

interface GuessGameProps {
    
}

interface EmojiComboI {
    first: string,
    second: string,
    output: string,
    state: string
}

const GuessGame: FunctionComponent<GuessGameProps> = () => {

    const [emojiList, setEmojiList] = useState<(EmojiComboI|null)[]>([]);
    const [selectedFirst, setSelectedFirst] = useState<string>('');
    const [selectedSecond, setSelectedSecond] = useState<string>('');
    useEffect(() => {
        if (emojiList.length) return;

        const generateEmojiList = async () => {
            const arr:(EmojiComboI|null)[] = [];
            for( let i = 0; i < 10; i++ ) {
                if (i < 3) {
                    arr.push(null)
                } else {
                    let cur = await generate("", fullEmojiList,fullEmojiList);
                    arr.push({...cur, state: "pre"})
                }
            } 
            setEmojiList(arr);
        }

        generateEmojiList();
    },[])

    useEffect(() => {
        if (!selectedFirst || !selectedSecond) {
            return;
        }
        setEmojiList((prev) => prev.slice(1))
        // setSelectedEmojis([])
        setSelectedFirst('')
        setSelectedSecond('')
        generate("", fullEmojiList, fullEmojiList)
        .then(res => {
            setEmojiList((prev) => [...prev, {...res, state: "pre"}])
        })
        console.log(emojiList);
    },[selectedFirst, selectedSecond])

    return ( emojiList.length &&
            <div className="mx-auto max-w-7xl flex gap-10 items-center">
                {emojiList[3] && 
                <>
                    <EmojiKeyboard width={5} height={5} preEmoji={emojiList[3].first} selectedEmoji={selectedFirst} setEmoji={setSelectedFirst} />
                    <EmojiRoulette emojiList={emojiList} />
                    <EmojiKeyboard width={5} height={5} preEmoji={emojiList[3].second}  selectedEmoji={selectedSecond} setEmoji={setSelectedSecond} />
                </>}
            </div>
     );
}
 
export default GuessGame;