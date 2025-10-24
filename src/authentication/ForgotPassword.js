import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import globle_style from '../globle_style'
import { primaryBlue } from '../../assets';

const ForgotPassword = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);


  const updatePassword = () =>{
    if(email == ''){
      setEmailError(true);
    }
    else{
      navigation.navigate('UpdatePassword');
    }
  }




  return (
      <View style={globle_style.frgt_pass_sec}>
        <View style={globle_style.forgt_hd}>
          <Text style={globle_style.forgt_hd_txt}>Forgot Password</Text>
          <Text style={globle_style.forgt_hd__para}> Enter your Email id and we will send you {'\n'}
            temporary password to your mail id</Text>
        </View>
        <View style={[globle_style.frm_fld, globle_style.frgt_pass_fld]}>
          <View style={globle_style.frm_con}>
            <Text style={[globle_style.gbl_frm_lbl, emailError ? {color : 'red'} : {}]}>Email ID</Text>
            <TextInput 
              style={[globle_style.gbl_input, emailError ? {borderColor : 'red', borderWidth : 1} : {}]} 
              placeholder='Enter email id' 
              cursorColor={primaryBlue}
              onChangeText={(text)=>{
                setEmail(text);
                setEmailError(false);
              }}
            ></TextInput>
          </View>

        </View>
        <TouchableOpacity
          disabled={emailError} 
          onPress={()=>updatePassword()}>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={[globle_style.gbl_btn, emailError ? '' : globle_style.gbl_Act_Btn]}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
  )
}

export default ForgotPassword