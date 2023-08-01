import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './screens/HomePage';
import InstrumentPage from './screens/InstrumentPage';
import {StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import GuitarTuner from './screens/GuitarTuner';
import BanjoTuner from './screens/BanjoTuner';
import MandolinTuner from './screens/MandolinTuner';
import UkuleleTuner from './screens/UkuleleTuner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <TouchableOpacity
              style={{
                height: 32,
                width: 32,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.pop()}>
              <Ionicons
                name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                size={36}
                color={Platform.OS === 'ios' ? '#0075FF' : 'black'}
              />
            </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.pop()}>
                  <Ionicons
                    name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                    size={36}
                    color={Platform.OS === 'ios' ? '#0075FF' : 'black'}
                  />
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.pop()}>
                  <Ionicons
                    name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                    size={36}
                    color={Platform.OS === 'ios' ? '#0075FF' : 'black'}
                  />
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.pop()}>
                  <Ionicons
                    name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                    size={36}
                    color={Platform.OS === 'ios' ? '#0075FF' : 'black'}
                  />
                </TouchableOpacity>
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
                <TouchableOpacity
                  style={{
                    height: 32,
                    width: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => navigation.pop()}>
                  <Ionicons
                    name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                    size={36}
                    color={Platform.OS === 'ios' ? '#0075FF' : 'black'}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        );
    }
  }
  return <Stack.Navigator>{getTunerScreen()}</Stack.Navigator>;
}

function MyTabs({route}) {
  const {chordData, instrumentType} = route.params;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Chords') {
            iconName = 'tune-vertical';
          } else if (route.name === 'Tuning') {
            iconName = 'tune-variant';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarLabelStyle: {
          fontSize: 15, // Adjust the font size here to make the words bigger
          fontWeight: 'bold', // You can also apply bold style if needed
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f0f0f0',
          borderTopWidth: 1, // Add a border at the top of the tabs
          borderTopColor: '#ccc', // Set the border color here
        },
        tabBarItemStyle: {
          borderRightWidth: 1, // Add a border between the tabs
          borderRightColor: '#ccc', // Set the border color here
        },
      })}>
      <Tab.Screen
        name="Tuning"
        component={Tab2Stack}
        initialParams={{
          chordData,
          instrumentType,
        }}
      />
      <Tab.Screen
        name="Chords"
        component={Tab1Stack}
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
