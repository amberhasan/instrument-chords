import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
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

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleModalBackdropPress = () => {
    console.log('backdrop was touched');
    closeModal();
  };

  return (
    <SafeAreaView style={styles.listOfChords}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={handleModalBackdropPress}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={{fontSize: 20}}>X</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{chordData.note}</Text>
            <Image
              source={chordData.imageSource}
              style={{
                height: 300,
                width: 300,
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
    height: 500,
    backgroundColor: '#ffffff',
    borderRadius: 10,
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
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#ccc',
  },
});

export default ChordList;
