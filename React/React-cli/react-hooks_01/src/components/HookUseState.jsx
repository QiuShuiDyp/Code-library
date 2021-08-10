// 引入hooks函数
import React, { useState } from 'react'

function Example(){
    // useState
    const [name, setCount] = useState(0)
    const [age, setCount] = useState(0)
    const [work, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Click me!</button>
        </div>
    )
}

export default Example