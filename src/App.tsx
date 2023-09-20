import { useEffect, useState } from 'react'
import './App.css'
import { CombinedEmoji } from './components/combinedEmoji';
import { BasicEmoji } from './components/basicEmoji';
import { BasicEmojiAsImage, pixelSize, imageType } from './components/basicEmojiAsImage';
import { generate } from './modules/generator';
import { emojiListTest, fullEmojiList } from './modules/emojis';


function App() {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [res, setRes] = useState<string>("")
  const [isContinous, setIsContinous]= useState(false)
  const getImageUrl = () =>{
    generate("", fullEmojiList,fullEmojiList)
      .then(x => {
        setRes(x.output);
        setFirst(x.first)
        setSecond(x.second)
    })
  }
  const getImageByTimer = () =>{
    const interval = setInterval(getImageUrl,2000);
    return () => clearInterval(interval);
  }
  useEffect(getImageUrl,[])
  useEffect(isContinous?getImageByTimer:()=>{},[isContinous])

  
  return (
    <>
      <h1>Emoji Game v1.0</h1>
      <div onClick={()=>{setIsContinous(!isContinous)}}>{isContinous?"stop ⏹":"start ▶️"}</div>
      <div onClick={getImageUrl}>new emoji pair 🔃</div>
      <BasicEmoji emoji={first}/>
      <BasicEmoji emoji={second}/>
      <BasicEmojiAsImage emoji={first} size={pixelSize.small} type={imageType.png}/>
      <BasicEmojiAsImage emoji={second} size={pixelSize.small} type={imageType.png}/>
      <CombinedEmoji imageUrl={res} />
    </>
  )
}

export default App
