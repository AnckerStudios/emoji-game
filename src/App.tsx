import { useState } from 'react'
import './App.css'
import { CombinedEmoji } from './components/combinedEmoji';
import { BasicEmoji } from './components/basicEmoji';
import { BasicEmojiAsImage, sizes } from './components/basicEmojiAsImage';
import { fullTextEmojiList } from './modules/emojis';


function App() {
  return (
    <>
      <h1>Emoji Game v1.0</h1>
      <BasicEmoji emoji={fullTextEmojiList[2]}/>
      <BasicEmoji emoji="🍊"/>
      <BasicEmoji emoji="🦥"/>
      <BasicEmojiAsImage emoji={fullTextEmojiList[2]} size={sizes.small}/>
      <CombinedEmoji/>
    </>
  )
}

export default App
