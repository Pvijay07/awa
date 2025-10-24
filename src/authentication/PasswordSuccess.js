import React, {useState} from 'react';
import {Image, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Logo, primaryWhite, Verified } from '../../assets';
import globle_style from '../globle_style';


const PasswordSuccess = ({onClose}) => {
   

  return (
    
    <View style={{flex: 1}}>
      <Modal isVisible={true}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={globle_style.paswrd_reset}>
            <View style={globle_style.reset_img}>
                <Image source={Verified} />
            </View>
            <View style={globle_style.rest_txt}>
                <Text style={globle_style.forgt_hd_txt}>Password Reset Successfully!</Text>
                <Text style={globle_style.forgt_hd__para}> Please click to login again!</Text>
            </View>

            <View style={globle_style.reset_btn}>
                <TouchableOpacity onPress={onClose}>
                <Text style={[globle_style.gbl_btn, globle_style.gbl_Act_Btn]}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>
          </View>
      </Modal>
    </View>
  );
};



export default PasswordSuccess;
