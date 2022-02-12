import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import { Provider as StateProvider } from 'react-redux'
import store from '../redux/store'

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <StateProvider store={store}>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="First" component={FirstScreen}  options={{headerShown:false}}/>
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  </StateProvider>

  );
};

export default App;
