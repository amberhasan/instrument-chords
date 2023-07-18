import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeCard from '../components/HomeCard';
import {DATA} from './data';

function Home() {
  const navigation = useNavigation();

  const handleCardPress = instrument => {
    navigation.navigate('InstrumentPage', {
      instrumentType: instrument,
      chordData: DATA[instrument],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <HomeCard
          instrument="Guitar"
          onPress={() => handleCardPress('Guitar')}
        />
        <HomeCard instrument="Banjo" onPress={() => handleCardPress('Banjo')} />
      </View>
      <View style={styles.row}>
        <HomeCard
          instrument="Mandolin"
          onPress={() => handleCardPress('Mandolin')}
        />
        <HomeCard
          instrument="Ukulele"
          onPress={() => handleCardPress('Ukulele')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Set your desired background color here
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
