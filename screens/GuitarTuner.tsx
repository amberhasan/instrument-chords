import React, {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function GuitarTuner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/images/tuners/guitar_tuner.png')}>
        <View
          style={{
            height: 225,
            marginTop: 80,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.button}>
              <Text>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>G</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.button}>
              <Text>A</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>B</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={styles.button}>
              <Text>E</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text>E</Text>
            </TouchableOpacity>
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
export default GuitarTuner;
