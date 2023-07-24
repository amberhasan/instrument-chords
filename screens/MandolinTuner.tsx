import React, {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {playSound} from '../utils/playSound';
import TunerButton from '../components/TunerButton';

function MandolinTuner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/mandolin_tuner.png')}>
        <View
          style={{
            height: 210,
            marginTop: 95,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="D"
              onPress={() => playSound('mandolin_tuner/b_mandolin.m4a')}
            />
            <TunerButton
              title="G"
              onPress={() => playSound('mandolin_tuner/g_mandolin.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="A"
              onPress={() => playSound('mandolin_tuner/a_mandolin.m4a')}
            />
            <TunerButton
              title="E"
              onPress={() => playSound('mandolin_tuner/e_mandolin.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="D"
              onPress={() => playSound('mandolin_tuner/d_mandolin.m4a')}
            />
            <TunerButton
              title="G"
              onPress={() => playSound('mandolin_tuner/g_mandolin.m4a')}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TunerButton
              title="A"
              onPress={() => playSound('mandolin_tuner/a_mandolin.m4a')}
            />
            <TunerButton
              title="E"
              onPress={() => playSound('mandolin_tuner/e_mandolin.m4a')}
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
export default MandolinTuner;
