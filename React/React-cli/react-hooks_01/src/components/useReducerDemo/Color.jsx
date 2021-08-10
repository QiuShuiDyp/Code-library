import React, {createContext, useReducer} from 'react'
import Button from './Button'

export const ColorContext = createContext()
export const COLOR_UPDATE ='COLOR_UPDATE'

const reducer = (state,action)=>{
    switch(action.type){
        case COLOR_UPDATE:
            return action.color
        default:
            return state
    }
}

export default function Color(props) {
    const [color,dispatch] = useReducer(reducer, "blue")

    return (
        <div>
            {color}
            <ColorContext.Provider value={{color,dispatch}}>
                <Button></Button>
            </ColorContext.Provider>
        </div>
    )
}
