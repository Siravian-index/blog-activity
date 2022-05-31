import React, {createContext, useReducer} from 'react'
import {actionType, reducer, stateType} from './reducer'
import {blogsDummy} from "../utils/dummyData";

const initialState: stateType = {
    logged: false,
    blogs: blogsDummy
}

type Props = { children?: React.ReactNode }

type contextType = {
    state: stateType
    dispatch: React.Dispatch<actionType>
}

const Store = createContext({} as contextType)

const StoreProvider: React.FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}

export default StoreProvider

//Custom function to avoid importing useContext all over the place
//This will bring us this context state
export const bringStateProvider = () => React.useContext(Store)