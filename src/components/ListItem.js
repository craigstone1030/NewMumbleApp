import React, { memo } from "react";
import { GestureResponderEvent, StyleSheet, View, TouchableOpacity, ViewStyle } from "react-native";
import colors from "../theme/colors";
import { hScaleRatio, wScale } from "../utils/scailing";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneIcon from '../../assets/phone_1.svg';
import CameraIcon from '../../assets/camera.svg';
import ProfilePhoto from "./ProfilePhoto";
import { Text } from "react-native-paper";

export default memo(({ style, onPress, capture = false, imgUri = "" }) => {

  return (
    <View style={defStyle.container}>
      <ProfilePhoto capture={capture} imgUri={imgUri} />
      <View style={{ marginLeft: wScale(10) }}>
        <Text style={defStyle.name}>
          900
        </Text>
        <Text style={defStyle.mail}>
          hello@uinow.design
        </Text>
      </View>
      <TouchableOpacity style={defStyle.camera} >
        <CameraIcon />
      </TouchableOpacity>
      <TouchableOpacity style={defStyle.phone} >
        <PhoneIcon />
      </TouchableOpacity>

    </View>
  );
});

const defStyle = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hScaleRatio(13)
  },
  icon: {
    fontSize: 24,
  },
  name: {
    fontFamily: 'Public Sans',
    fontWeight: '400',
    fontSize: 16,
    color: '#39325C'
  },
  mail: {
    fontFamily: 'Mulish',
    fontWeight: '400',
    fontSize: 14,
    color: '#B3BEC9'
  },
  camera: {
    position: 'absolute',
    right: wScale(30)

  },
  phone: {
    position: 'absolute',
    right: 0
  }
});
