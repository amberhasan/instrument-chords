import React from 'react';
import {
  TouchableOpacity,
  Text,
  Button as RNButton,
  StyleSheet,
} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    height: 90,
    width: 120,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'tomato',
    margin: 10,
  },
  button: {
    fontSize: 16,
    color: 'black',
  },
});

export default Button;
