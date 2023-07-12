import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './screens/HomePage';
import InstrumentPage from './screens/InstrumentPage';

// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   const getTabBarIconName = routeName => {
//     switch (routeName) {
//       case 'Guitar':
//         return 'guitar';
//       case 'Banjo':
//         return 'banjo';
//       case 'Mandolin':
//         return 'music';
//       case 'Ukulele':
//         return 'ukulele';
//       default:
//         return null;
//     }
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           const iconName = getTabBarIconName(route.name);

//           if (!iconName) {
//             return null;
//           }

//           return <FontAwesome5 name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Guitar" component={Guitar} />
//       <Tab.Screen name="Banjo" component={Banjo} />
//       <Tab.Screen name="Mandolin" component={Mandolin} />
//       <Tab.Screen name="Ukulele" component={Ukulele} />
//     </Tab.Navigator>
//   );
// }

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="InstrumentPage" component={InstrumentPage} />
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
