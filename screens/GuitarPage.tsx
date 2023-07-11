import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Button from '../components/Button';

function Guitar() {
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Button title="A Chords" onPress={() => {}} />
          <Button title="B Chords" onPress={() => {}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="C Chords" onPress={() => {}} />
          <Button title="D Chords" onPress={() => {}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="E Chords" onPress={() => {}} />
          <Button title="F Chords" onPress={() => {}} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button title="G Chords" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Guitar;
