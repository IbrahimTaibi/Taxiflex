import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/signin/LoginScreen';
import VerificationScreen from '../screens/verification/VerificationScreen'; // Import the VerificationScreen
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';
import PersonalInfo from '../screens/Profile/PersonalInfo';
export type RootStackParamList = {
  Login: undefined;
  Verification: undefined;
  Home: undefined;
  Profile: undefined;
  PersonalInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{title: 'Verification'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfo}
          options={{title: 'PersonalInfo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
