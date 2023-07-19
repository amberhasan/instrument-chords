import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Set your desired background color here
    justifyContent: 'center',
  },
  row: {
    paddingTop: 10, // Add padding from the top of the screen
    paddingBottom: 10, // Add padding from the top of the screen
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20, // Add horizontal padding
  },
});

export default Home;
