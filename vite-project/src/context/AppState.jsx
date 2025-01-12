import React from 'react'
import AppContext from './AppContext'
import { doctors } from '../assets_frontend/assets';

const AppState=(props)=>{
    return (<AppContext.Provider value={doctors}>
        {props.children}
    </AppContext.Provider>)
 }
 export default AppState;