import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import HomePage from './screens/HomePage';
import InstrumentPage from './screens/InstrumentPage';
import {StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import GuitarTuner from './screens/GuitarTuner';
import BanjoTuner from './screens/BanjoTuner';
import MandolinTuner from './screens/MandolinTuner';
import UkuleleTuner from './screens/UkuleleTuner';

const HomeStack = createNativeStackNavigator();

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

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Home'}}
        initialParams={{tabClicked: 'tab1'}}
      />
      <HomeStack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerTitle: 'Home', headerShown: false}}
        initialParams={{tabClicked: 'tab1'}}
      />
    </HomeStack.Navigator>
  );
}

function Tab1Stack({route}) {
  const {chordData, instrumentType} = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InstrumentPage"
        component={InstrumentPage}
        options={({route, navigation}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <Button title="< Home" onPress={() => navigation.pop()} />
          ),
        })}
        initialParams={{
          chordData,
          instrumentType,
        }}
      />
    </Stack.Navigator>
  );
}

function Tab2Stack({route}) {
  const {chordData, instrumentType} = route.params;
  function getTunerScreen() {
    switch (instrumentType) {
      case 'Guitar':
        return (
          <Stack.Screen
            name="GuitarTuner"
            component={GuitarTuner}
            options={({route, navigation}) => ({
              headerTitle: 'Guitar Tuner',
              headerLeft: () => (
                <Button title="< Home" onPress={() => navigation.pop()} />
              ),
            })}
          />
        );
      case 'Banjo':
        return (
          <Stack.Screen
            name="BanjoTuner"
            component={BanjoTuner}
            options={({route, navigation}) => ({
              headerTitle: 'Banjo Tuner',
              headerLeft: () => (
                <Button title="< Home" onPress={() => navigation.pop()} />
              ),
            })}
          />
        );
      case 'Mandolin':
        return (
          <Stack.Screen
            name="MandolinTuner"
            component={MandolinTuner}
            options={({route, navigation}) => ({
              headerTitle: 'Mandolin Tuner',
              headerLeft: () => (
                <Button title="< Home" onPress={() => navigation.pop()} />
              ),
            })}
          />
        );
      case 'Ukulele':
        return (
          <Stack.Screen
            name="UkuleleTuner"
            component={UkuleleTuner}
            options={({route, navigation}) => ({
              headerTitle: 'Ukulele Tuner',
              headerLeft: () => (
                <Button title="< Home" onPress={() => navigation.pop()} />
              ),
            })}
          />
        );
    }
  }
  return <Stack.Navigator>{getTunerScreen()}</Stack.Navigator>;
}

function MyTabs({route}) {
  // const chordData = route.params.chordData;
  // const instrumentType = route.params.instrumentType;
  const {chordData, instrumentType} = route.params;
  console.log({
    chordData,
    instrumentType,
  });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveBackgroundColor: 'purple',
        // tabBarInactiveBackgroundColor: 'pink',
        unmountOnBlur: true,
        tabBarIcon: () => null,
        // tabBarItemStyle: {
        //   backgroundColor: 'red',
        // },
        // tabBarLabelStyle: {
        //   alignSelf: 'center',
        //   padding: 0,
        //   paddingBottom: 0,
        //   fontSize: 16,
        //   // backgroundColor: 'grey',
        //   // color: 'orange',
        // }, // Align the tab labels in the center
      }}>
      <Tab.Screen
        name="Chords"
        component={Tab1Stack}
        initialParams={{
          chordData,
          instrumentType,
        }}
      />
      <Tab.Screen
        name="Tuning"
        component={Tab2Stack}
        initialParams={{
          chordData,
          instrumentType,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
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
