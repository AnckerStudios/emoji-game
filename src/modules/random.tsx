import { fullTextEmojiList } from "./emojis";

export function getRandomIndex(length:number):number{
    return Math.floor(Math.random() * (length-1));
}

export function getRandomEmoji():string{
    return fullTextEmojiList[getRandomIndex(fullTextEmojiList.length)];
}

export function getRandomEmojiFromArray(input:string[]):string{
    return input[getRandomIndex(input.length)];
}

export function getRandomEmojiArray(num:number):string[]{
    const arr:string[] = [];
    for(let i = 0; i < num; i++){
        arr.push(getRandomEmoji());
    } 
    return arr;
}
export function getRandomEmojiArrayFromArray(num:number,input:string[]):string[]{
    const arr:string[] = [];
    let tempArr =[...input]
    for(let i = 0; i < num; i++){
        const randomEmoji = getRandomEmojiFromArray(tempArr);
        tempArr = tempArr.filter(x => x!=randomEmoji);
        arr.push(randomEmoji)
    } 
    return arr;
}