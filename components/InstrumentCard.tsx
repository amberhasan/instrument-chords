import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface InstrumentCardProps {
  note: string;
  imageSource: any;
}

const InstrumentCard: React.FC<InstrumentCardProps> = ({note, imageSource}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{note}</Text>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333333',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default InstrumentCard;
