import { fullTextEmojiList } from "./emojis";

function getRandomIndex(length:number):number{
    return Math.floor(Math.random() * length);
}

export function getRandomEmoji():string{
    return fullTextEmojiList[getRandomIndex(fullTextEmojiList.length)];
}
