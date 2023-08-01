import * as React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import Button from '../components/Button';
import InstrumentCard from '../components/InstrumentCard';
import {SegmentedButtons} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ChordList from '../components/ChordList';

function InstrumentPage(props) {
  const chordData = props.route.params.chordData;
  const instrumentType = props.route.params.instrumentType;

  const [value, setValue] = React.useState('major');

  const renderView = () => {
    if (value === 'major') {
      return <ChordList chordList={chordData.major} />;
    } else if (value === 'minor') {
      return <ChordList chordList={chordData.minor} />;
    } else {
      return <ChordList chordList={chordData.seven} />;
    }
  };

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <SegmentedButtons
        style={styles.segmentedButtons}
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'major',
            label: 'Major Keys',
          },
          {
            value: 'minor',
            label: 'Minor Keys',
          },
          {value: 'seventh', label: '7th Keys'},
        ]}
      />
      {renderView()}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  segmentedButtons: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default InstrumentPage;
