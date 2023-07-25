import React, {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import TunerButton from '../components/TunerButton';
import {playSound} from '../utils/playSound';

function BanjoTuner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/banjo_tuner.png')}>
        <View
          style={{
            height: 140,
            marginTop: 130,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="D"
              onPress={() => playSound('banjo_tuner/low_d_banjo.m4a')}
            />
            <TunerButton
              title="G"
              onPress={() => playSound('banjo_tuner/low_g_banjo.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="A"
              onPress={() => playSound('banjo_tuner/a_banjo.m4a')}
            />
            <TunerButton
              title="B"
              onPress={() => playSound('banjo_tuner/b_banjo.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="G"
              onPress={() => playSound('banjo_tuner/high_g_banjo.m4a')}
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
export default BanjoTuner;
