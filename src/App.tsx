import { useEffect, useState } from 'react'
import './App.css'
import { CombinedEmoji } from './components/combinedEmoji';
import { BasicEmoji } from './components/basicEmoji';
import { BasicEmojiAsImage, pixelSize, imageType } from './components/basicEmojiAsImage';
import { emojiListTest, fullTextEmojiList } from './modules/emojis';
import { getRandomEmoji } from './modules/random';
import getEmoji from './modules/request';


function App() {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  const [res, setRes] = useState<string>("")
  useEffect(()=>{
    generate(undefined)
    // setFirst(getRandomEmoji());
    // setSecond(getRandomEmoji());
    // const interval = setInterval(() =>{
    //   setFirst(getRandomEmoji());
    //   setSecond(getRandomEmoji())
    // },2000);
    // return () => clearInterval(interval);
  }, [])

  const generate = (firstEmoji: string | undefined) => {
    console.log("++++++++++");
    
    firstEmoji = firstEmoji || "🧠";
    const arr = [];
    for(let i = 0; i < 10; i++){
      arr.push(getRandomEmoji());
    }
    // let f =  
    Promise.any(arr.map(x=>getEmoji(firstEmoji!, x)))
      .then(res => {
        console.log("--------------");
        setRes(res)})
      .catch(() => generate(firstEmoji)
      )
    // console.log(f);
    // setRes(f)
  }
  //setFirst(getRandomEmoji());
  //setSecond(getRandomEmoji());

  //const first = getRandomEmoji();
  //const second = getRandomEmoji();
  return (
    <>
      <h1>Emoji Game v1.0</h1>
      {/*
        <BasicEmoji emoji={fullTextEmojiList[2]}/>
      <BasicEmoji emoji="🍊"/>
      <BasicEmoji emoji="🦥"/>
      <BasicEmojiAsImage emoji={fullTextEmojiList[2]} size={sizes.medium}/>
      <CombinedEmoji first={emojiListTest[0]} second={emojiListTest[1]}/>
      */}
      <div onClick={() => generate(undefined)}>click</div>
      <BasicEmoji emoji={first}/>
      <BasicEmoji emoji={second}/>
      <BasicEmojiAsImage emoji={first} size={pixelSize.small} type={imageType.png}/>
      <BasicEmojiAsImage emoji={second} size={pixelSize.small} type={imageType.png}/>
      <CombinedEmoji first={first} second={second} res={res} />
    </>
  )
}

export default App
