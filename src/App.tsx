import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { BasicEmoji } from './components/basicEmoji';

function App() {
  
  return (
    <>
      <h1 >Emoji Game v1.0</h1>
      <BasicEmoji/>
    </>
  )
}

export default App
