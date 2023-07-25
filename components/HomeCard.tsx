import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface HomeCardProps {
  instrument: string;
  onPress: () => void;
  tabClicked: string;
}
const {height} = Dimensions.get('window');
function HomeCard({instrument, onPress, tabClicked}: HomeCardProps) {
  let imageSource = require('../assets/images/guitar.png'); // Default image
  if (tabClicked === 'tab1') {
    switch (instrument) {
      case 'Guitar':
        imageSource = require('../assets/images/guitar.png');
        break;
      case 'Banjo':
        imageSource = require('../assets/images/banjo.png');
        break;
      case 'Mandolin':
        imageSource = require('../assets/images/mandolin.png');
        break;
      case 'Ukulele':
        imageSource = require('../assets/images/ukulele.png');
        break;
      default:
        imageSource = require('../assets/images/guitar.png');
    }
  } else {
    switch (instrument) {
      case 'Guitar':
        imageSource = require('../assets/images/tuners/guitar_tuner.png');
        break;
      case 'Banjo':
        imageSource = require('../assets/images/tuners/banjo_tuner.png');
        break;
      case 'Mandolin':
        imageSource = require('../assets/images/tuners/mandolin_tuner.png');
        break;
      case 'Ukulele':
        imageSource = require('../assets/images/tuners/ukulele_tuner.png');
        break;
      default:
        imageSource = require('../assets/images/tuners/guitar_tuner.png');
    }
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{instrument}</Text>
      {tabClicked === 'tab1' ? (
        <Image source={imageSource} style={styles.image} />
      ) : (
        <Image source={imageSource} style={styles.image} resizeMode="stretch" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: height * 0.4,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 5,
    marginVertical: 2.5,
    marginHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: '85%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HomeCard;
