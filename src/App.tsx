import { useEffect, useState } from 'react'
import './App.css'
import { CombinedEmoji } from './components/combinedEmoji';
import { BasicEmoji } from './components/basicEmoji';
import { BasicEmojiAsImage, pixelSize, imageType } from './components/basicEmojiAsImage';
import { emojiListTest, fullTextEmojiList } from './modules/emojis';
import { getRandomEmoji } from './modules/random';


function App() {
  const [first, setFirst] = useState("")
  const [second, setSecond] = useState("")
  useEffect(()=>{
    setFirst(getRandomEmoji());
    setSecond(getRandomEmoji());
    const interval = setInterval(() =>{
      setFirst(getRandomEmoji());
      setSecond(getRandomEmoji());
    },2000);
    return () => clearInterval(interval);
  }, [])
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
      <BasicEmoji emoji={first}/>
      <BasicEmoji emoji={second}/>
      <BasicEmojiAsImage emoji={first} size={pixelSize.small} type={imageType.png}/>
      <BasicEmojiAsImage emoji={second} size={pixelSize.small} type={imageType.png}/>
      <CombinedEmoji first={first} second={second}/>
    </>
  )
}

export default App
