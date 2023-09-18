import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [test, setTest] = useState();
  async function getEmoji() {
    const a = await axios.get('https://tenor.googleapis.com/v2/featured', {
      params: {
        key: "AIzaSyDiVitUXK1JtMV--PnwOLGLDd3AJyUx5qo",
        contentfilter: "high",
        media_filter:"png_transparent",
        component:"proactive",
        collection:"emoji_kitchen_v6",
        q: '🍊_🦥'
      }});
      console.log(a);
      setTest(a.data.results[0].url)
      
  }
  return (
    <>
      <h1 onClick={() => getEmoji()}>Emoji Game v1.0</h1>
      <img src={test} />
    </>
  )
}

export default App
