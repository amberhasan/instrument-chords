import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import TunerButton from '../components/TunerButton';
import {playSound} from '../utils/playSound';

function GuitarTuner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/guitar_tuner.png')}>
        <View style={styles.containedContainer}>
          <View style={styles.row}>
            <TunerButton
              title="D"
              onPress={() => playSound('guitar_tuner/d_guitar.m4a')}
            />
            <TunerButton
              title="G"
              onPress={() => playSound('guitar_tuner/g_guitar.m4a')}
            />
          </View>
          <View style={styles.row}>
            <TunerButton
              title="A"
              onPress={() => playSound('guitar_tuner/a_guitar.m4a')}
            />
            <TunerButton
              title="B"
              onPress={() => playSound('guitar_tuner/b_guitar.m4a')}
            />
          </View>
          <View style={styles.row}>
            <TunerButton
              title="E"
              onPress={() => playSound('guitar_tuner/low_e_guitar.m4a')}
            />
            <TunerButton
              title="E"
              onPress={() => playSound('guitar_tuner/high_e_guitar.m4a')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  containedContainer: {
    height: 225,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row', justifyContent: 'space-between'},
  image: {
    height: '100%',
    width: '100%',
  },
  button: {
    height: 30,
    width: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
export default GuitarTuner;
