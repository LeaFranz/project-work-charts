import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ChartsScreen from './screens/ChartsScreen';
import BuilderScreen from './screens/BuilderScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import colors from './constants/colors';
import fontsize from './constants/fontsizes';
import LoginScreen from './screens/LoginScreen';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Charts') {
            iconName = 'poll';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          } else if (route.name === 'Builder') {
            iconName = 'build';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: colors.INACTIVEGREY,
        style: {
          backgroundColor: colors.SXGREEN,
        },
        labelStyle: {
          fontSize: fontsize.BUTTON,
        },
      }}>
      <Tab.Screen name="Charts" component={ChartsScreen} />
      <Tab.Screen name="Builder" component={BuilderScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="false">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const Stack = createStackNavigator();
  let isLoggedIn = true; //TODO - for conditional rendering after login
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="false">
        <Stack.Screen name="Login" component={LoginStack} />
        <Stack.Screen name="App" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
