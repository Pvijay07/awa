import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import globle_style from '../globle_style'
import LinearGradient from 'react-native-linear-gradient'
import { HidePassword, primaryBlue, primaryError, showPasswordImage } from '../../assets'
import { Button } from 'react-native-paper'

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



    const toggleShowPassword = () => {
        Keyboard.dismiss();
        setShowPassword(!showPassword);
    }


  const ForgotPassword = () =>{
    navigation.navigate("ForgotPassword");
  }

  const Login = () =>{
    if(email == ''){
      setErrorEmail(true);
      setIsDisabled(true);
    }
    else if(password == ''){
      setErrorPassword(true);
      setIsDisabled(true);
    }
    else{
      setErrorEmail(false);
      setErrorPassword(false);
      navigation.navigate('OTP');
    }
  }
  return (
    <LinearGradient colors={['#1ABBE2', '#3791B8']} start={{x:0, y:1}} style={globle_style.gradient}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={globle_style.login_hd}>
              <Text style={globle_style.login_hd_txt}>Welcome!</Text>
              <Text style={globle_style.login_para_txt}>Login to continue!</Text>
          </View>
          <View style={globle_style.bar}></View>
          <View style={globle_style.login_frm_sec}>
              <View style={globle_style.frm_fld}>
                <View style={globle_style.frm_con}>
                  <Text style={[globle_style.gbl_frm_lbl, errorEmail ? globle_style.errors : '']}>Email ID</Text>
                  <TextInput 
                    style={[globle_style.gbl_input, {borderColor : errorEmail ? primaryError : '', borderWidth : errorEmail ? 1 :0}]} 
                    placeholder='Enter email id' 
                    cursorColor={primaryBlue}
                    onChangeText={(text)=>{
                      setEmail(text);
                      if(email != ''){setErrorEmail(false)}
                      if(email != '' && password != ''){setIsDisabled(false);}
                    }}
                  ></TextInput>
                </View>
                <View style={globle_style.frm_con}>
                  <Text style={[globle_style.gbl_frm_lbl, errorPassword ? globle_style.errors : '']}>Password</Text>
                  <View style={globle_style.password}>
                    <TextInput 
                      style={[globle_style.gbl_input, {borderColor : errorPassword ? primaryError : '', borderWidth : errorPassword ? 1 :0}]} 
                      placeholder='Password'
                      secureTextEntry={!showPassword}
                      cursorColor={"#22BCE2"}
                      onChangeText={(text)=>{
                        setPassword(text);
                        if(password != ''){setErrorPassword(false)}
                        if(email != '' && password != ''){setIsDisabled(false);}
                      }
                      }
                    ></TextInput>
                    <TouchableOpacity onPress={()=>toggleShowPassword()}>
                        <Image source={!showPassword ? HidePassword : showPasswordImage} style={{position:'absolute',right:19, top:-5}}/>
                    </TouchableOpacity>
                    
                  </View>
                </View>
                <View style={globle_style.for_pass}>
                  <Text style={globle_style.frm_con_txt} onPress={()=>ForgotPassword()}>Forgot Password?</Text>
                </View>
                <TouchableOpacity 
                  disabled = {isDisabled}
                  onPress={()=> Login()}>
                <Text style={[globle_style.gbl_btn, isDisabled ? '' : globle_style.gbl_Act_Btn]}>Login</Text>
                </TouchableOpacity>
              </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
  </LinearGradient>
  )
}

export default Login