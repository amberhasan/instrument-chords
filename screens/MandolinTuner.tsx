import React, {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {playSound} from '../utils/playSound';
import TunerButton from '../components/TunerButton';

function MandolinTuner() {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      {/* Use ImageBackground to set the wood background */}
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/backgrounds/old_wood_texture.jpg')}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require('../assets/images/tuners/mandolin_tuner.png')}>
            <View
              style={{
                height: height * 0.35,
                marginTop: height * 0.135,
                justifyContent: 'space-between',
                opacity: 0.5,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 0,
                  width: width * 0.25,
                  justifyContent: 'space-between',
                }}>
                <TunerButton
                  style={{marginLeft: width * 0.1, marginTop: height * 0.015}}
                  title="D"
                  onPress={() => playSound('mandolin_tuner/d_mandolin.m4a')}
                />
                <TunerButton
                  style={{marginLeft: width * 0.08, marginTop: height * 0.01}}
                  title="D"
                  onPress={() => playSound('mandolin_tuner/d_mandolin.m4a')}
                />
                <TunerButton
                  style={{marginLeft: width * 0.05, marginTop: height * 0.01}}
                  title="G"
                  onPress={() => playSound('mandolin_tuner/g_mandolin.m4a')}
                />
                <TunerButton
                  style={{
                    marginLeft: width * 0.03,
                    marginBottom: height * 0.01,
                  }}
                  title="G"
                  onPress={() => playSound('mandolin_tuner/g_mandolin.m4a')}
                />
              </View>
              <View
                style={{
                  flex: 0,
                  width: width * 0.25,
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}>
                <TunerButton
                  style={{marginRight: width * 0.12, marginTop: height * 0.02}}
                  title="A"
                  onPress={() => playSound('mandolin_tuner/a_mandolin.m4a')}
                />
                <TunerButton
                  style={{marginRight: width * 0.09}}
                  title="A"
                  onPress={() => playSound('mandolin_tuner/a_mandolin.m4a')}
                />
                <TunerButton
                  style={{marginRight: width * 0.07}}
                  title="E"
                  onPress={() => playSound('mandolin_tuner/e_mandolin.m4a')}
                />
                <TunerButton
                  style={{marginRight: width * 0.05}}
                  title="E"
                  onPress={() => playSound('mandolin_tuner/e_mandolin.m4a')}
                />
              </View>
            </View>
          </ImageBackground>
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
export default MandolinTuner;
