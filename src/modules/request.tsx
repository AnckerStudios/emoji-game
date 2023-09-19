import axios from "axios";

const projectKey = "AIzaSyDiVitUXK1JtMV--PnwOLGLDd3AJyUx5qo";//Ключ, который был сгенерирован для проекта
const publicKey = "AIzaSyACvEq5cnT7AcHpDdj64SE3TJZRhW-iHuo";//Ключ, который был взят из запроса гугла
const url = "https://tenor.googleapis.com/v2/featured";
const params = {
    key: publicKey,
    contentfilter: "off",
    client_key: "emoji_kitchen_funbox",
    collection:"emoji_kitchen_v6",
}
async function getEmoji(first:string,second:string):Promise<string> {
    // .q = `${first}_${second}`;//или input.join('_') если параметр функции typeof input === string[]
    Object.assign(params,{q:`${first}_${second}`})
    try{
        const a = await axios.get(url , { params })
        console.log(a);
        if (a.data.results.length) {
            return a.data.results[0].media_formats.png_transparent.url;
        }
        throw "бля"
    }
    catch(err){
        // if (axios.isAxiosError(err)){
        //     console.log(err.status)
        //     console.error(err.response);
        // }
        // return "";
        throw err;
    }
    
}
// export async function getTenEmoji(:string):Promise<string> {
//     // params.q = `${first}_${second}`;//или input.join('_') если параметр функции typeof input === string[]

//     try{
//         const resultEmoji = await Promise.any(arr.map(x=>{
//             axios.get(
//                 url, 
//                 {
//                     params: Object.assign(params,{q:x})
//                 }
//             )
//         }))
//         // const a = await axios.get(url , {params})
//         console.log(resultEmoji);
//         return resultEmoji.data.results[0].media_formats.png_transparent.url;
//     }
//     catch(err){
//         if (axios.isAxiosError(err)){
//             console.log(err.status)
//             console.error(err.response);
//         }
//         return "";
//     }
    
// }
export default getEmoji;
