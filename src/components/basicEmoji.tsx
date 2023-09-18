import { useEffect, useState } from 'react'
import getEmoji from '../modules/request'


export function BasicEmoji(){
    const[test,setTest] = useState<string>()
    useEffect(()=>{
      getEmoji('🍊','🦥')
        .then(resp => {setTest(resp)})
    },[])
    
    return(

        <img src={test}/>
    )
}