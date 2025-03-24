import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './frontend/SplashScreen';
import OnboardingScreen from './frontend/OnboardingScreen';
import LoginScreen from './frontend/LoginScreen';
import PhoneNumberLogin from './frontend/PhoneNumberLogin';
import OTPVerification from './frontend/OTPVerification';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PhoneNumberLogin" component={PhoneNumberLogin} /> 
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
