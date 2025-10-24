import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { primaryBlack, primaryBlue } from '../../assets';

const CustomOTP = ({onInputChange, otpValues, errorBox}) => {
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null);
    const fourthInputRef = useRef(null);
    const [inputValues, setInputValues] = useState(['', '', '', '',]);


    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
        onInputChange(newInputValues);
    }


    useEffect(()=>{
      console.log("value : ", errorBox);
    }, [errorBox])


  return (
    <View style={styles.loginFormBox}>
        <View style={[styles.inputWrapper, errorBox ? {borderColor : 'red', borderWidth : 1} : {}]}>
            <TextInput
                ref={firstInputRef}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor="#888"
                selectionColor="#156778"
                maxLength={1}
                cursorColor={primaryBlue}
                importantForAutofill='no'
                autoComplete="off"
                keyboardType="numeric"
                value={otpValues[0]}
                onChangeText={text => {
                    handleInputChange(0, text);
                    if (text.length === 1) {
                    secondInputRef.current?.focus();
                    }
                }}
                onFocus={() => {
                    firstInputRef.current?.clear();
                    otpValues[0] = ''
                }}
            />
        </View>
        <View style={[styles.inputWrapper, errorBox ? {borderColor : 'red', borderWidth : 1} : {}]}>
            <TextInput
                ref={secondInputRef}
                style={styles.input}
                cursorColor={primaryBlue}
                underlineColorAndroid="transparent"
                placeholderTextColor="#888"
                selectionColor="#156778"
                maxLength={1}
                value={otpValues[1]}
                keyboardType="numeric"
                importantForAutofill='no'
                autoComplete="off"
                onChangeText={text => {
                    handleInputChange(1, text);
                    if (text.length === 1) {
                    thirdInputRef.current?.focus();
                    }
                }}
                onFocus={() => {
                    secondInputRef.current?.clear();
                    otpValues[1] = ''
                }}
            />
        </View>
        <View style={[styles.inputWrapper, errorBox ? {borderColor : 'red', borderWidth : 1} : {}]}>
            <TextInput
                ref={thirdInputRef}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor="#888"
                selectionColor="#156778"
                maxLength={1}
                cursorColor={primaryBlue}
                value={otpValues[2]}
                keyboardType="numeric"
                importantForAutofill='no'
                autoComplete="off"
                onChangeText={text => {
                  handleInputChange(2, text);
                  if (text.length === 1) {
                    fourthInputRef.current?.focus();
                  }
                }}
                onFocus={() => {
                  thirdInputRef.current?.clear();
                  otpValues[2] = ''
                }}
            />
        </View>
        <View style={[styles.inputWrapper, errorBox ? {borderColor : 'red', borderWidth : 1} : {}]}>
            <TextInput
                ref={fourthInputRef}
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor="#888"
                selectionColor="#156778"
                maxLength={1}
                cursorColor={primaryBlue}
                value={otpValues[3]}
                keyboardType="numeric"
                importantForAutofill='no'
                autoComplete="off"
                onChangeText={text => {
                  handleInputChange(3, text);
                }}
                onFocus={() => {
                  fourthInputRef.current?.clear();
                  otpValues[3] = ''
                }}
            />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    loginFormBox: {
        justifyContent: 'center',
        alignItems: 'center',
        padding : 5,
        left : 10,
        marginRight : 30,
        flexDirection: 'row',
      },
      inputWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
          padding : 5,
          marginRight : 10,
          backgroundColor : '#F4F4F4',
          borderRadius : 8,
          textAlign : 'center',


      },
      input: {
        color: '#151515',
        height : 54,
        width : 54,
        fontSize: 18,
        textAlign : 'center',
        fontFamily : 'Poppins-SemiBold'
      },
})

export default CustomOTP