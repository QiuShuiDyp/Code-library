import React, {useContext} from 'react'
import { ColorContext, COLOR_UPDATE } from './Color'
export default function Button() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch({type:COLOR_UPDATE,color:"blue"})}}>蓝色</button>
            <button onClick={()=>{dispatch({type:COLOR_UPDATE,color:"yellow"})}}>黄色</button>
        </div>
    )
}
