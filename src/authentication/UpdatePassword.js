import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {HidePassword, primaryBlue, showPasswordImage} from '../../assets';
import globle_style from '../globle_style';
import PasswordSuccess from './PasswordSuccess';

const UpdatePassword = ({navigation}) => {
    const [enterPassword, setEnterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [enterPassError, setEnterPassError] = useState(false);
    const [confirmPassError, setConfirmPassError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const UpdatePassword = () =>{
      if(enterPassword == ''){
        setEnterPassError(true);
      }
      else if(confirmPassword == ''){
        setConfirmPassError(true);
      }
      else if(enterPassword != confirmPassword){
        setConfirmPassError(true);
      }
      else{
        setUpdateSuccess(true);
      }
      
    }

    const Login = () =>{
      setUpdateSuccess(false);
      navigation.navigate("Login");
    }




    
  return (
    <View style={globle_style.otp_sec}>
      <View style={globle_style.forgt_hd}>
        <Text style={globle_style.forgt_hd_txt}>Set Password</Text>
        <Text style={globle_style.forgt_hd__para}>
          Create a new password to login
        </Text>
      </View>
      <View style={globle_style.set_paswrd_con}>
        <View style={[globle_style.frm_fld, globle_style.rest_paswrd_fld]}>
          <View style={globle_style.frm_con}>
            <Text style={globle_style.gbl_frm_lbl}>New Password</Text>
            <View style={[globle_style.password]}>
              <TextInput
                style={[globle_style.gbl_input, enterPassError ? {borderColor : 'red', borderWidth : 1} : '']}
                placeholder="Enter new password"
                secureTextEntry={!showPassword}
                cursorColor={primaryBlue}
                onChangeText={(text)=>{
                    setEnterPassword(text);
                    setEnterPassError(false);
                  }
                }
              ></TextInput>
                <TouchableOpacity onPress={()=>toggleShowPassword()}>
                    <Image source={!showPassword ?  HidePassword : showPasswordImage} style={{position:'absolute',right:19, top:-5}}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={globle_style.frm_con}>
            <Text style={globle_style.gbl_frm_lbl}>Confirm Password</Text>
            <View style={[globle_style.password]}>
              <TextInput
                style={[globle_style.gbl_input, confirmPassError ? {borderColor : 'red', borderWidth : 1} : '']}
                placeholder="Re-enter new password"
                secureTextEntry={!showPassword}
                cursorColor={primaryBlue}
                onChangeText={(text)=>{
                  setConfirmPassword(text);
                  setConfirmPassError(false);
                }}
              ></TextInput>
                <TouchableOpacity onPress={()=>toggleShowPassword()}>
                    <Image source={!showPassword ?  HidePassword : showPasswordImage} style={{position:'absolute',right:19, top:-5}}/>
                </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            disabled = {confirmPassError} 
            onPress={()=>UpdatePassword()}>
            <Text style={[globle_style.gbl_btn, !confirmPassError ? globle_style.gbl_Act_Btn : '']}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      { updateSuccess ?
          <PasswordSuccess
            onClose={Login} 
          />
        :
        ""
      }
      
    </View>
  );
};

export default UpdatePassword;
