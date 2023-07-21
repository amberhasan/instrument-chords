import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TunerButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default TunerButton;
