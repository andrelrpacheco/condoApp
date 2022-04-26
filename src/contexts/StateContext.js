import React, { createContext, useContext, useReducer } from 'react'
import UserReducer from '../reducers/UserReducer'

// criando o estado inicial
const initialState = {
  user: UserReducer()
}

// criando o reducer
const MainReducer = (state = initialState, action) => ({
  user: UserReducer(state.user, action)
})

//criando contexto
export const StateContext = createContext()

//criando provider
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState)

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

// criando hook e o passando o contexto
export const useStateValue = () => useContext(StateContext)