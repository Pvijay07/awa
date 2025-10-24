import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import LaunchRoutes from './src/routes/LaunchRoutes';


const App = () => {
  return (
    <NavigationContainer>
      <LaunchRoutes />
    </NavigationContainer>
  )
}

export default App