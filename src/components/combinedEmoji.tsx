import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'
import { generate } from '../modules/generator'
import { fullEmojiList } from '../modules/emojis'

type CombinedEmojiProps = {
  selectedEmoji: { first: string, second: string }
}

export function CombinedEmoji( { selectedEmoji }:CombinedEmojiProps){
  const [outEmoji, setOutEmoji] = useState("")
  const [isLoad, setLoad] = useState(false)
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [state, setState] = useState("")
  const getImageUrl = async () => {
    setLoad(true)
    setState("")
    const combinedEmoji = await generate("", fullEmojiList,fullEmojiList);
    setOutEmoji(combinedEmoji.output);
    setFirst(combinedEmoji.first);
    setSecond(combinedEmoji.second)
    setLoad(false)
        // setFirst(x.first)
        // setSecond(x.second)
  }

  const check = () => {
    if ((selectedEmoji.first === first && selectedEmoji.second === second) || (selectedEmoji.second === first && selectedEmoji.first === second)) {
      setState("win")
    } else {
      setState("fail")
    }
  }
    // const[combinedEmoji,setCombinedEmoji] = useState<string>()
    // useEffect(()=>{
    //     getEmoji(first, second)
    //       .then(response => {setCombinedEmoji(response)})
    //   },[first||second])
    
    return(
       outEmoji ?
       <>
        <div className=' relative'>
          <img src={outEmoji} />
          { isLoad ? <div className=' absolute bg-white/60 inset-0 flex justify-center items-center'>
            <div className=' animate-spin border-4 border-solid border-sky-500 border-current border-r-transparent w-[30px] h-[30px] rounded-full'></div>
          </div> : <button className='absolute w-14 h-14 bg-blue-200 top-1 left-1 rounded-2xl flex justify-center items-center' onClick={()=>getImageUrl()}>Upd</button> }
        </div>
        { state ? <h1 className={`text-6xl ${state === "win" ? "text-green-600" : "text-red-600"} font-bold`}>{state.toUpperCase()}</h1> : 
        <button className='w-full px-8 py-4 rounded-2xl bg-blue-200 hover:bg-blue-300' disabled={ !(selectedEmoji.first && selectedEmoji.second) } onClick={check}>Check</button> }
      
       </> 
       :
       <button className='w-full px-8 py-4 rounded-2xl bg-blue-200 hover:bg-blue-300' onClick={()=>getImageUrl()}>Generate</button>
    )
}