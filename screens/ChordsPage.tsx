import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChordList from '../components/ChordList';
import GestureRecognizer from 'react-native-swipe-detect';

const BUTTONS = [
  {
    value: 'major',
    label: 'Major Keys',
  },
  {
    value: 'minor',
    label: 'Minor Keys',
  },
  {value: 'seventh', label: '7th Keys'},
];

const CONFIG = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

function ChordsPage(props) {
  const chordData = props.route.params.chordData;

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

  const onSwipeLeft = () => {
    if (value === 'major') {
      setValue('minor');
    } else if (value === 'minor') {
      setValue('seventh');
    }
  };
  const onSwipeRight = () => {
    if (value === 'minor') {
      setValue('major');
    } else if (value === 'seventh') {
      setValue('minor');
    }
  };

  return (
    <GestureRecognizer
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      config={CONFIG}
      style={{
        flex: 1,
      }}>
      <SafeAreaProvider style={{flex: 1}}>
        <SegmentedButtons
          style={styles.segmentedButtons}
          value={value}
          onValueChange={setValue}
          buttons={BUTTONS}
        />
        {renderView()}
      </SafeAreaProvider>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  segmentedButtons: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default ChordsPage;
