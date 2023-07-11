import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Button from '../components/Button';
import InstrumentCard from '../components/InstrumentCard';

function Guitar() {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

export default Guitar;
