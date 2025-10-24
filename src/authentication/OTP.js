import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import globle_style from '../globle_style'
import CustomOTP from './CustomOTP'

const OTP = ({navigation}) => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  let finalOtpVal = otpValues.join('');
  const [error, setError] = useState(false);


  const handleOtpChange = (newValues) => {
    setOtpValues(newValues);
    console.log(finalOtpVal)
    if(finalOtpVal.length >= 3){
      setError(false);
    }
  }

  const VerifyOTP = () =>{
    finalOtpVal = otpValues.join('');
    console.log("final : ", finalOtpVal)
    if(otpValues[0] == '' || otpValues[1] == '' || otpValues[2] == '' || otpValues[3] == '' || finalOtpVal.length < 3){
      setError(true);
    }
    else{
      navigation.navigate('Home');
    } 
  }


  
  return (
    <View style={globle_style.otp_sec}>
      <View style={globle_style.forgt_hd}>
        <Text style={globle_style.forgt_hd_txt}>Verification Code</Text>
        <Text style={globle_style.forgt_hd__para}> Enter the OTP sent to your email id</Text>
      </View>
      <View style={globle_style.opt_con}>
        <View style={[globle_style.opt_itm]}>
          <CustomOTP
            onInputChange={handleOtpChange} 
            otpValues = {otpValues}
            errorBox = {error}
          />
        </View>
      </View>
      <View>
        <Text style={globle_style.otp_rsnd}>If you didn’t receive the code, <Text style={globle_style.span_resnd}>Resend</Text> </Text>
      </View>
      <TouchableOpacity
        disabled = {error} 
        onPress={()=>VerifyOTP()}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text style={[globle_style.gbl_btn, !error ? globle_style.gbl_Act_Btn : '']}>Verify Code</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default OTP