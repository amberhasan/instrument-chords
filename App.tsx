import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './screens/HomePage';
import InstrumentPage from './screens/InstrumentPage';

const Stack = createNativeStackNavigator();

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

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Home Page'}}
      />
      <Stack.Screen
        name="InstrumentPage"
        component={InstrumentPage}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
