import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Button from '../components/Button';
import InstrumentCard from '../components/InstrumentCard';
import {SegmentedButtons} from 'react-native-paper';

function InstrumentPage(props) {
  const chordData = props.route.params.chordData;
  const instrumentType = props.route.params.instrumentType;
  console.log('chordData', chordData);
  console.log('instrumentType', instrumentType);
  const [value, setValue] = React.useState('major');

  // React.useEffect(() => {
  //   console.log('value', value);
  // }, [value]);

  const renderView = () => {
    if (value === 'major') {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <InstrumentCard
              note={'A Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
            <InstrumentCard
              note={'B Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <InstrumentCard
              note={'C Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
            <InstrumentCard
              note={'D Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <InstrumentCard
              note={'E Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
            <InstrumentCard
              note={'F Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <InstrumentCard
              note={'G Major'}
              imageSource={require('../assets/images/guitar_chords/g_major_guitar.png')}
            />
          </View>
        </View>
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
    <ScrollView>
      <SegmentedButtons
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
    </ScrollView>
  );
}

export default InstrumentPage;
