import React from 'react';
//import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ChartsScreen from './screens/ChartsScreen';
import BuilderScreen from './screens/BuilderScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import colors from './constants/colors';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <LoginScreen />
    // <NavigationContainer>
    //   <Tab.Navigator
    //     screenOptions={({route}) => ({
    //       tabBarIcon: ({color, size}) => {
    //         let iconName;

    //         if (route.name === 'Charts') {
    //           iconName = 'poll';
    //         } else if (route.name === 'Settings') {
    //           iconName = 'settings';
    //         } else if (route.name === 'Builder') {
    //           iconName = 'build';
    //         } else if (route.name === 'Favorites') {
    //           iconName = 'favorite';
    //         }
    //         return <Icon name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: 'black',
    //       inactiveTintColor: colors.INACTIVEGREY,
    //       style: {
    //         backgroundColor: colors.SXGREEN,
    //       },
    //     }}>
    //     <Tab.Screen name="Charts" component={ChartsScreen} />
    //     <Tab.Screen name="Builder" component={BuilderScreen} />
    //     <Tab.Screen name="Favorites" component={FavoritesScreen} />
    //     <Tab.Screen name="Settings" component={SettingsScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

//const styles = StyleSheet.create({});
