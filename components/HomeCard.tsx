import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface HomeCardProps {
  instrument: string;
  onPress: () => void;
}

function HomeCard({instrument, onPress}: HomeCardProps) {
  let imageSource = require('../assets/images/guitar.png'); // Default image

  if (instrument === 'Banjo') {
    imageSource = require('../assets/images/banjo.png');
  } else if (instrument === 'Mandolin') {
    imageSource = require('../assets/images/mandolin.png');
  } else if (instrument === 'Ukulele') {
    imageSource = require('../assets/images/ukulele.png');
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{instrument}</Text>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
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
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default HomeCard;
