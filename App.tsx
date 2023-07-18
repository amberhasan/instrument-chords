import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import HomePage from './screens/HomePage';
import InstrumentPage from './screens/InstrumentPage';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import GuitarTuner from './screens/GuitarTuner';
import BanjoTuner from './screens/BanjoTuner';
import MandolinTuner from './screens/MandolinTuner';
import UkuleleTuner from './screens/UkuleleTuner';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const instrumentType = route.params?.instrumentType;

  switch (instrumentType) {
    case 'Guitar':
      return 'Guitar Chords';
    case 'Banjo':
      return 'Banjo Chords';
    case 'Mandolin':
      return 'Mandolin Chords';
    case 'Ukulele':
      return 'Ukulele Chords';
    default:
      return 'Instrument Chords';
  }
}

function Tab1Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Home'}}
        initialParams={{tabClicked: 'tab1'}}
      />
      <Stack.Screen
        name="InstrumentPage"
        component={InstrumentPage}
        options={({route, navigation}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
}

function Tab2Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Home2'}}
        initialParams={{tabClicked: 'tab2'}}
      />
      <Stack.Screen
        name="GuitarTuner"
        component={GuitarTuner}
        options={{headerTitle: 'Guitar Tuner'}}
      />
      <Stack.Screen
        name="BanjoTuner"
        component={BanjoTuner}
        options={{headerTitle: 'Banjo Tuner'}}
      />
      <Stack.Screen
        name="MandolinTuner"
        component={MandolinTuner}
        options={{headerTitle: 'Mandolin Tuner'}}
      />
      <Stack.Screen
        name="UkuleleTuner"
        component={UkuleleTuner}
        options={{headerTitle: 'Ukulele Tuner'}}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, unmountOnBlur: true}}>
      <Tab.Screen name="Tab1Stack" component={Tab1Stack} />
      <Tab.Screen name="Tab2Stack" component={Tab2Stack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
  },
});
