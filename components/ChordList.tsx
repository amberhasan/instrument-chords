import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InstrumentCard from './InstrumentCard';

const ChordList = props => {
  const chordList = props.chordList;
  return (
    <SafeAreaView style={styles.listOfChords}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        style={styles.flatList}
        data={chordList}
        renderItem={({item}) => (
          <InstrumentCard note={item.note} imageSource={item.image} />
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
});
export default ChordList;
