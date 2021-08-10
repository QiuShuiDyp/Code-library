import React, {useState, useEffect} from 'react'

export default function Example3() {
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        console.log(`You clicked ${count} times`)
        return ()=>{
            console.log('over')
        }
    },[count])
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={()=> setCount(count+1)}>click me</button>
        </div>
    )
}
