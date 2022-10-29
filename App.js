import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>

      <NavigationContainer>

        <SafeAreaProvider>

          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1}}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <TailwindProvider>

              <Stack.Navigator>

                <Stack.Screen 
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ presentation: 'fullScreenModal', headerShown: false }}
                />

                <Stack.Screen 
                  name="MapScreen"
                  component={MapScreen}
                  options={{ presentation: 'fullScreenModal', headerShown: false }}
                />

              </Stack.Navigator>

            </TailwindProvider>

          </KeyboardAvoidingView>

        </SafeAreaProvider>

      </NavigationContainer>
      
    </Provider>


  );
};