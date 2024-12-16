import React from 'react'
import { CombineContextProvider } from './context'
import RouterApp from './RouterApp'

const App = () => {


  return <CombineContextProvider >
    <RouterApp />
  </CombineContextProvider>

}

export default App
