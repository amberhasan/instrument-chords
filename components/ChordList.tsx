import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InstrumentCard from './InstrumentCard';

const ChordList = props => {
  const chordList = props.chordList;
  return (
    <SafeAreaView style={styles.listOfChords}>
      <FlatList
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
    // paddingTop: 20,
    // paddingBottom: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
    backgroundColor: 'red',
    // ma
  },
});
export default ChordList;
