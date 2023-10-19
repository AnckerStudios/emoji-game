import { useEffect, useState } from 'react'
import './App.css'
import GuessGame from './components/GuessGame';


function App() {
  const [firstEmoji, setFirstEmoji] = useState("")
  const [secondEmoji, setSecondEmoji] = useState("")
  const [score, setScore] = useState(0)
  const [isContinous, setIsContinous]= useState(false)
  // const getImageUrl = () => {
  //   generate("", fullEmojiList,fullEmojiList)
  //     .then(x => {
  //       setRes(x.output);
  //       // setFirst(x.first)
  //       // setSecond(x.second)
  //   })
  // }
  // const getImageByTimer = () =>{
  //   const interval = setInterval(getImageUrl,2000);
  //   return () => clearInterval(interval);
  // }
  // useEffect (
  //   getImageUrl,[]
  // )
  // useEffect(isContinous ? getImageByTimer : ()=>{}, [isContinous])

  
  return (
    <>
      {/* <div onClick={()=>{setIsContinous(!isContinous)}}>{isContinous?"stop ⏹":"start ▶️"}</div>
      <div onClick={getImageUrl}>new emoji pair 🔃</div> */}
      
        {/* <div className=' w-1/3'>
          <EmojiPicker emoji={firstEmoji} setEmoji={setFirstEmoji}/>
        </div>
        <div className=' w-1/3 flex flex-col items-center'>
          <CombinedEmoji selectedEmoji={{first: firstEmoji,second: secondEmoji}} />
        </div>
        <div className=' w-1/3'>
        <EmojiPicker emoji={secondEmoji} setEmoji={setSecondEmoji}/>
        </div> */}
        <div className='h-screen bg-background'>
          <GuessGame />
        </div>
      
      {/* <FailScrean /> */}
      {/* <BasicEmoji emoji={first}/>
      <BasicEmoji emoji={second}/>
      <BasicEmojiAsImage emoji={first} size={pixelSize.small} type={imageType.png}/>
      <BasicEmojiAsImage emoji={second} size={pixelSize.small} type={imageType.png}/> */}
      {/* <BasicEmojiAsImage emoji={firstEmoji} size={pixelSize.small} type={imageType.svg}/>
      <CombinedEmoji imageUrl={res} />
      <EmojiKeyboard emoji={firstEmoji} setEmoji={setFirstEmoji} /> */}
    </>
  )
}

export default App
