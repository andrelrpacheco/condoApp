import React from 'react'
import { View, Text } from 'react-native'
import { StateProvider } from './src/contexts/StateContext'

export function App() {
  return (
    <StateProvider>
      <View>
        <Text>Hello, World!</Text>
      </View>
    </StateProvider>
  )
}

export default App