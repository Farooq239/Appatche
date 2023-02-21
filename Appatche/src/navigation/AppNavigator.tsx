import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';
import AppDetail from '../appDetails/AppDetail';
import AppVersionDetail from '../home/AppVersionDetail';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name='AppDetail' component={AppDetail} />
                <Stack.Screen name='AppVersionDetail' component={AppVersionDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default AppNavigator

const styles = StyleSheet.create({})