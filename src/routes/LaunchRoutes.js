import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../authentication/Login';
import OTP from '../authentication/OTP';
import ForgotPassword from '../authentication/ForgotPassword';
import UpdatePassword from '../authentication/UpdatePassword';
import SplashScreen from '../authentication/SplashScreen';
import Home from '../dashboard/Home';




const Stack = createNativeStackNavigator();

const LaunchRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown : false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default LaunchRoutes