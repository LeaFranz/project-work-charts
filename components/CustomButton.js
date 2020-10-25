import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import colors from '../constants/colors';
import fontsize from '../constants/fontsizes';

const CustomButton = (props) => {
  const getStyle = () => {
    return props.disabled ? styles.disabledButton : styles.enabledButton;
  };

  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[props.style, getStyle()]}
      onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  enabledButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.SXGREEN,
    fontSize: fontsize.BODY1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    color: 'black',
  },
  disabledButton: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.DISABLEDGREY,
    fontSize: fontsize.BODY1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    color: 'black',
  },
});

export default CustomButton;
