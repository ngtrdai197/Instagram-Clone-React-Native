import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE } from '../constants/route';
import LoginScreen from '../screens/login/login.screen';
import SignupScreen from '../screens/signup/signup.screen';

const Stack = createStackNavigator();

export type StackParamList = {
  [ROUTE.LOGIN]: undefined;
  [ROUTE.SIGN_UP]: undefined;
};

export default function CustomNavigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTE.SIGN_UP} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
