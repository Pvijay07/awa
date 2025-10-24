import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import globle_style from '../globle_style'
import {Logo } from '../../assets'

const SplashScreen = ({navigation}) => {
    

    useEffect(()=>{
        setTimeout(function(){
            navigation.navigate("Login");
        },1500)
    })
  return (
        <View style={globle_style.splashContainer}>
            <View style={globle_style.spBody}>
                <Image source={Logo} />
            </View>
        </View>  

  )
}

export default SplashScreen