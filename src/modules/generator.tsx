import { getRandomEmoji, getRandomEmojiArray, getRandomEmojiArrayFromArray, getRandomEmojiFromArray, getRandomIndex } from "./random";
import getEmoji from "./request";

type ReturnProps = {
    output:string,
    first:string,
    second:string
}
export function filterArray<T>(array:T[], itemsToRemove:T[]){
    return array.filter(x =>{
        return !itemsToRemove.includes(x);
    })
}

export function getRandomEmojiList(preEmoji: string, remainingFirstEmojis:string[], size: number = 25) {
    const arr = []
    let step = 0;
    while (step < size-1) {
        const emoji = getRandomEmojiFromArray(remainingFirstEmojis);
        if (emoji !== preEmoji) {
            remainingFirstEmojis= filterArray(remainingFirstEmojis,[emoji]);
            step++;
            arr.push(emoji);
        }
    }
    arr.splice(getRandomIndex(arr.length), 0, preEmoji)
    return arr;
}

export async function generate(firstEmoji: string, remainingFirstEmojis:string[],remainingSecondEmojis:string[]):Promise<ReturnProps> {
    // console.log("Generate function called");
    
    const pickFirstEmoji = () => {
        if(remainingFirstEmojis.length==0)
            throw "remainingFirstEmojis is empty!"
        const emoji = getRandomEmojiFromArray(remainingFirstEmojis);
        remainingFirstEmojis= filterArray(remainingFirstEmojis,[emoji])
        return emoji;
    } 
    const pickSecondEmojis = () => {
        if(remainingSecondEmojis.length==0)
            throw "remainingSecondEmojis is empty!"
        const emojis = getRandomEmojiArrayFromArray(10,remainingSecondEmojis);
        remainingSecondEmojis= filterArray(remainingSecondEmojis,emojis)
        //console.log(emojis)
        return emojis;
    }   

    firstEmoji = firstEmoji || pickFirstEmoji();//getRandomEmoji()
    const arr = pickSecondEmojis();
    return await Promise.any(arr.map(x=>getEmoji(firstEmoji, x)))
      .then(response => {
        // console.log("Emoji pair was found");
        return({output:response.res, first:response.first,second:response.second});
        })
      .catch(() => generate(firstEmoji, remainingFirstEmojis,remainingSecondEmojis)
    )
  }
