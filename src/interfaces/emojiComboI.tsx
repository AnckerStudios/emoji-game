export interface EmojiComboI { //TODO вынести в отдельный файл
    first: string,
    second: string,
    output: string,
    state: EmojiComboState
}
export enum EmojiComboState{
    CORRECT,
    WRONG,
    UNKNOWN,
    EMPTY,
    CENTER
}