import React from 'react';
import {View, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'; // Import ImageBackground component
import {useNavigation} from '@react-navigation/native';
import HomeCard from '../components/HomeCard';
import {DATA} from './data';

function Home(props) {
  const navigation = useNavigation();
  const tabClicked = props.route.params.tabClicked;

  const handleCardPress = instrument => {
    if (tabClicked === 'tab1') {
      navigation.navigate('MyTabs', {
        instrumentType: instrument,
        chordData: DATA[instrument],
      });
    } else {
      switch (instrument) {
        case 'Guitar':
          navigation.navigate('GuitarTuner');
          break;
        case 'Banjo':
          navigation.navigate('BanjoTuner');
          break;
        case 'Mandolin':
          navigation.navigate('MandolinTuner');
          break;
        case 'Ukulele':
          navigation.navigate('UkuleleTuner');
          break;
        default:
          navigation.navigate('GuitarTuner');
      }
    }
  };

  return (
    // Use ImageBackground instead of SafeAreaView
    <ImageBackground
      source={require('../assets/images/backgrounds/old_wood_texture.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <HomeCard
            instrument="Guitar"
            onPress={() => handleCardPress('Guitar')}
            tabClicked={tabClicked}
          />
          <HomeCard
            instrument="Banjo"
            onPress={() => handleCardPress('Banjo')}
            tabClicked={tabClicked}
          />
        </View>
        <View style={styles.row}>
          <HomeCard
            instrument="Mandolin"
            onPress={() => handleCardPress('Mandolin')}
            tabClicked={tabClicked}
          />
          <HomeCard
            instrument="Ukulele"
            onPress={() => handleCardPress('Ukulele')}
            tabClicked={tabClicked}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will stretch the image to cover the entire container
  },
});

export default Home;
