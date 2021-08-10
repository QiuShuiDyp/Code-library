import React, {useState, createContext, useContext} from 'react'

// 创建一个上下文组件
const CountContext = createContext()
export default function Example4() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>You clicked {count} times</h1>
            {/* 将状态共享出 */}
            <button onClick={()=> setCount(count+1)}>click me</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

function Counter(){
    // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
    let count = useContext(CountContext)
    return (
        <h3>{count}</h3>
    )
}
