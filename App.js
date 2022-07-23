import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { Provider as StateProvider } from 'react-redux'
import store from './src/redux/store'

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <StateProvider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Second" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </StateProvider>

  );
};

export default App;
