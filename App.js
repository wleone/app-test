import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  AppRegistry,
  TextInput
} from "react-native";

import alignments from "./components/__alignments.scss";
import buttons from "./components/__buttons.scss";
import inputs from "./components/__inputs.scss";
import styles from "./components/__styles.scss";
import units from "./components/__units.scss";

import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export default class App extends Component {
  render() {
    const resizeMode = 'center';
    const text = 'Foda-se';

    return (
      <ImageBackground
        style={{
          display: 'flex',
          resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }
      }
        source = {
          require('./assets/images/background/gradient-space-blue-logo.png')
        }
      >
        <Image
          style={{
            alignSelf: 'center'
          }}
          source={require('./assets/images/brand/logo-colorfull-min.png')}
        />
        <TextInput
          style={
            {
              width: '90%',
              height: 55,
              borderColor: 'white',
              borderWidth: 2,
              borderRadius: 100,
              marginTop: 40,
              paddingLeft: 25,
              paddingRight: 25,
              fontFamily: 'Times New Roman',
              fontSize: 20
            }
          }
          inlineImageLeft="./assets/images/icons/user.png"
          keyboardType="email-address"
        />
      </ImageBackground>
    );
  }
}

var viewport = StyleSheet.create({
  Container: {
    width: vw(100),
    height: vh(100)
  }
});

