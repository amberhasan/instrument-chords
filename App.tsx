import * as React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Guitar from './Guitar';
import Banjo from './Banjo';
import Mandolin from './Mandolin';
import Ukulele from './Ukulele';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Guitar') {
            iconName = 'guitar-acoustic';
          } else if (route.name === 'Banjo') {
            iconName = 'guitar';
          } else if (route.name === 'Mandolin') {
            iconName = 'guitar';
          } else if (route.name === 'Ukulele') {
            iconName = 'guitar';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Guitar" component={Guitar} />
      <Tab.Screen name="Banjo" component={Banjo} />
      <Tab.Screen name="Mandolin" component={Mandolin} />
      <Tab.Screen name="Ukulele" component={Ukulele} />
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
