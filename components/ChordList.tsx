import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text, Button, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChordCard from './ChordCard';
import Modal from 'react-native-modal';

const ChordList = props => {
  const chordList = props.chordList;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [chordData, setChordData] = useState({});

  const onImagePress = data => {
    setChordData(data);
    setIsModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.listOfChords}>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.card}>
            <Text style={styles.title}>{chordData.note}</Text>
            <Image
              source={chordData.imageSource}
              style={{
                height: 300,
                width: 300,
              }}
            />
            <Button
              title="Close Modal"
              onPress={() => {
                setIsModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        style={styles.flatList}
        data={chordList}
        renderItem={({item}) => (
          <ChordCard
            note={item.note}
            imageSource={item.image}
            onPress={onImagePress}
          />
        )}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listOfChords: {
    flex: 1,
  },
  flatList: {},
  contentContainer: {
    flexGrow: 1,
    marginTop: 10,
  },
  card: {
    // flex: 1,
    height: 500,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // padding: 20,
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default ChordList;
