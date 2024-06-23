import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text,Pressable } from "react-native";
import { Camera, useCameraDevices, useFrameProcessor } from "react-native-vision-camera";
import { useScanBarcodes, BarcodeFormat, scanBarcodes } from 'vision-camera-code-scanner';
import { runOnJS } from "react-native-reanimated";
import IconMIC from 'react-native-vector-icons/MaterialCommunityIcons'
import { addBook } from "../../api/books";

const CameraScanner = ({ changeResult }) => {
  const devices = useCameraDevices()
  const device = devices.back
  const [hasPermission, setHasPermission] = useState(false)
  const [hasPermissionS, setHasPermissionS] = useState(false)
  const [barcodes, setBarcodes] = useState([])
  const [disabled, setDisabled] = useState(false)

  async function newBook() {
    setDisabled(true)
    const response = await addBook(barcodes[0].content.data)
    if (response.success == 'true') {
      showToastWithGravityAndOffset(response.msg)
      changeResult()
      setDisabled(false)

    }
    else {
      showToastWithGravityAndOffset(response.msg)
      setDisabled(false)
    }
  }

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
    console.log(detectedBarcodes);
    runOnJS(setBarcodes)(detectedBarcodes);
  }, []);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
      const newCameraPermission = await Camera.requestCameraPermission()
      setHasPermissionS(newCameraPermission === 'authorized');

    })();
  }, [])

  if (device != null && hasPermission && hasPermissionS) {
    return (
      <>
        <Camera
          style={{ width: '100%', height: '67%' }}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />
        <Pressable onPress={() => { newBook() }} style={[styles.pressable, { backgroundColor: barcodes.length == 0 ? '#ffffff' : '#3E4553' }]} disabled={barcodes.length == 0 || disabled == true ? true : false}><IconMIC name="qrcode-scan" size={38} color={barcodes.length == 0 ? '#3E4553' : '#ffffff'} /></Pressable>
      </>
    )
  }
  else {
    return (
      <View><Text></Text></View>
    )
  }
}

const styles = StyleSheet.create({
  mainText: {
      marginVertical: 30,
      maxWidth: 300,
      textAlign: "center",
      fontSize: 16,
      color: 'black',
      fontFamily: 'Sora-Regular',
      alignSelf: 'center'
  },
  pressable: {
      backgroundColor: '#ffffff',
      width: 70,
      height: 70,
      position: 'absolute',
      bottom: 170,
      alignSelf: 'center',
      zIndex: 2,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
  }
});

export default CameraScanner