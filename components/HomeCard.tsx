import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface HomeCardProps {
  instrument: string;
  onPress: () => void;
}

function HomeCard({instrument, onPress}: HomeCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{instrument}</Text>
      <Image
        source={require('../assets/images/guitar.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 10, // Add padding between the cards
    marginLeft: 10, // Add left padding
    marginRight: 10, // Add right padding
    shadowColor: '#000000',
    shadowOpacity: 0.8, // Increase the shadow opacity
    shadowRadius: 10,
    elevation: 10, // Increase the elevation
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
