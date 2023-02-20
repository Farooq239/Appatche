import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/SplashScreen';
import AppList from '../screens/AppList';



const AuthStack = createNativeStackNavigator();

const Auth = ({ }) => {
  const [data, setData] = useState(false)

  return (
    <AuthStack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'AppList'} component={AppList} />

    </AuthStack.Navigator>
  );
};






const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<{}> = ({ }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Auth'} component={Auth} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;