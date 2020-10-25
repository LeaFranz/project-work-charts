import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import Logo from '../assets/images/test_logo.png';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <AutoHeightImage width={300} source={Logo} style={styles.image} />
        <CustomTextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <CustomTextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <View style={styles.logInButton}>
          <CustomButton title="LOG IN" disabled={false} style={styles.button} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 300,
    margin: 2,
  },
  button: {
    width: 300,
  },
  image: {
    marginBottom: 30,
  },
  logInButton: {
    marginTop: 30,
  },
});

export default LoginScreen;
