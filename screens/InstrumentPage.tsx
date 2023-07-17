import * as React from 'react';
import {View, Text, ScrollView, FlatList, StyleSheet} from 'react-native';
import Button from '../components/Button';
import InstrumentCard from '../components/InstrumentCard';
import {SegmentedButtons} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function InstrumentPage(props) {
  const chordData = props.route.params.chordData;
  const instrumentType = props.route.params.instrumentType;
  console.log('chordData', chordData);
  console.log('instrumentType', instrumentType);
  const [value, setValue] = React.useState('major');

  // React.useEffect(() => {
  //   console.log('value', value);
  // }, [value]);

  const DATA = [
    {
      note: 'A Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'B Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'C Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'D Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'E Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'F Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
    {
      note: 'G Major',
      imageSource: require('../assets/images/guitar_chords/g_major_guitar.png'),
    },
  ];

  const renderView = () => {
    if (value === 'major') {
      return (
        <SafeAreaView style={styles.listOfChords}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <InstrumentCard note={item.note} imageSource={item.imageSource} />
            )}
            horizontal={false}
            numColumns={2}
          />
        </SafeAreaView>
      );
    } else if (value === 'minor') {
      return (
        <View>
          <Text>Coming soon</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>{2 + 2}</Text>
        </View>
      );
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
  listOfChords: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default InstrumentPage;
