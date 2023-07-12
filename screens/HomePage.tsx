import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HomeCard from '../components/HomeCard';
import {DATA} from './data';

function Home() {
  const navigation = useNavigation();

  const handleCardPress = (instrument: string) => {
    navigation.navigate('InstrumentPage', {
      instrumentType: instrument,
      chordData: DATA[instrument],
    });
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Home;
