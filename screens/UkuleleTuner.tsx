import React, {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TunerButton from '../components/TunerButton';
import {playSound} from '../utils/playSound';

function UkuleleTuner() {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/ukulele_tuner.png')}>
        <View
          style={{
            height: height * 0.28,
            marginTop: height * 0.12,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <TunerButton
              style={{marginLeft: width * 0.05, marginTop: height * 0.03}}
              title="D"
              onPress={() => playSound('ukulele_tuner/c_ukulele.m4a')}
            />
            <TunerButton
              style={{marginRight: width * 0.06, marginTop: height * 0.03}}
              title="G"
              onPress={() => playSound('ukulele_tuner/g_ukulele.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              style={{marginLeft: width * 0.05, marginBottom: height * 0.03}}
              title="A"
              onPress={() => playSound('ukulele_tuner/a_ukulele.m4a')}
            />
            <TunerButton
              style={{marginRight: width * 0.08}}
              title="B"
              onPress={() => playSound('ukulele_tuner/g_ukulele.m4a')}
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
  },
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
export default UkuleleTuner;
