import axios from "axios";

const projectKey = "AIzaSyDiVitUXK1JtMV--PnwOLGLDd3AJyUx5qo";//Ключ, который был сгенерирован для проекта
const publicKey = "AIzaSyACvEq5cnT7AcHpDdj64SE3TJZRhW-iHuo";//Ключ, который был взят из запроса гугла
const url = "https://tenor.googleapis.com/v2/featured";
const params = {
    key: publicKey,
    contentfilter: "high",
    client_key: "emoji_kitchen_funbox",
    collection:"emoji_kitchen_v6"
}
async function getEmoji(first:string,second:string):Promise<string> {
    const p = {q: `${first}_${second}`};//или input.join('_') если параметр функции typeof input === string[]
    Object.assign(params,p);//добавили к параметрам ещё один, в котором содержатся нужные emoji
    try{
        const a = await axios.get(url , {params})
        console.log(a);
        return a.data.results[0].media_formats.png_transparent.url;
    }
    catch(e){
        if (e instanceof Error){
            console.error(e.message);
        }
        return "";
    }
    
}
export default getEmoji;
