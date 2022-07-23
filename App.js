import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PersistGate } from 'redux-persist/integration/react';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import { Provider as StateProvider } from 'react-redux';
import { store, persistor } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <StateProvider store={store}>

      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Second" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>

    </StateProvider>

  );
};

export default App;
