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

function BanjoTuner() {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/banjo_tuner.png')}>
        <View
          style={{
            marginTop: height * 0.18,
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            // opacity: 0.5,
            height: height * 0.5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 0,
              width: width * 0.25,
              paddingLeft: width * 0.07,
              paddingTop: 10,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flex: 1,
                // backgroundColor: 'orange',
              }}>
              <TunerButton
                title="G"
                onPress={() => playSound('banjo_tuner/low_g_banjo.m4a')}
              />
              <TunerButton
                title="D"
                onPress={() => playSound('banjo_tuner/low_d_banjo.m4a')}
              />
              <TouchableOpacity
                onPress={() => playSound('banjo_tuner/high_g_banjo.m4a')}
                style={{
                  height: 50,
                  width: 50,
                  borderWidth: 0.5,
                  borderRadius: 5,
                  backgroundColor: 'lightgrey',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TunerButton
                  title="G"
                  onPress={() => playSound('banjo_tuner/high_g_banjo.m4a')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 0,
              width: width * 0.25,
              paddingLeft: width * 0.08,
              paddingTop: 10,
              // alignItems: 'flex-end',
            }}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
              <TunerButton
                title="B"
                onPress={() => playSound('banjo_tuner/b_banjo.m4a')}
              />
              <TunerButton
                title="D"
                onPress={() => playSound('banjo_tuner/high_d_banjo.m4a')}
              />
              <View style={{height: 40, width: 40}}></View>
            </View>
          </View>
          {/*
          
        */}
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
