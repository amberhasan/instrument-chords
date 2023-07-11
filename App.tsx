import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/HomePage';
import Guitar from './screens/GuitarPage';
import Banjo from './screens/BanjoPage';
import Mandolin from './screens/MandolinPage';
import Ukulele from './screens/UkulelePage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  const getTabBarIconName = routeName => {
    switch (routeName) {
      case 'Guitar':
        return 'guitar';
      case 'Banjo':
        return 'banjo';
      case 'Mandolin':
        return 'music';
      case 'Ukulele':
        return 'ukulele';
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconName = getTabBarIconName(route.name);

          if (!iconName) {
            return null;
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
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
