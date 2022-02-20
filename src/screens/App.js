import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ListWithIcon from './ListWithIcon';
import { Provider as StateProvider } from 'react-redux'
import store from '../redux/store'

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <StateProvider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Second" component={ListWithIcon} />
      <Stack.Screen name="Third" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </StateProvider>

  );
};

export default App;
