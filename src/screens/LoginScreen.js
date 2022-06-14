
import React, { useState, useEffect } from 'react';
import {
  Alert
  } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styles from '../styles/style';
import { TextInput } from 'react-native-paper';
import { emailValidator, passwordValidator } from "../utils/loginUtil";
import { LOGO } from "../constants/app.constant";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginEvent } from '../redux/reducer';

import {
  Text,
  Image,
  View,
  Button,
  ActivityIndicator
} from 'react-native';


const LoginScreen = ({ navigation }) => {

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      const token = await messaging().getToken();
      messaging().setOpenSettingsForNotificationsHandler(
        async remoteMessage => {
          console.log('notification handled in the background!', remoteMessage);
        }
      );
      console.log('A new FCM token arrived!', JSON.stringify(token));
    }
  }

  useEffect(() => {
    const init = async () => {
      await requestUserPermission();
    }
    init();
    console.log("Use effect called");
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', JSON.stringify(remoteMessage));
    });

        // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Launched app from quit state', JSON.stringify(remoteMessage));
      }
    });

    return unsubscribe;
  }, []);

  const getDataCall = () => {

    setLoading(true)

    axios
    .post('https://jsonplaceholder.typicode.com/posts', {
      title: 'dummy login',
      body: email,
      userId: 1,
    })
    .then(function (response) {
      console.log(response.data.movies);
      setLoading(false);

      dispatch(loginEvent(email));

      navigation.navigate('Second', {
        customeId: 86,
        emailId: email.value,
      });

      setLoading(false);

    })
    .catch(function (error) {
      alert(error.message);
      setLoading(false);
    });
  }

  const _onLoginPressed = () => {

    const emailValue = email.value ?? '';
    const pwdValue =  password.value ?? '';
    const emailError = email.error ?? '';
    const pwdError =  password.error ?? '';
    
    if (emailError.trim().length > 0 || pwdError.trim().length > 0) {

      console.log(password.value);
      console.log(email.value);
      console.log(password.error);
      console.log(email.error);
    }
    else if (emailValue.trim().length > 0 && pwdValue.trim().length > 0) {

      getDataCall();

    }
    else {

      if (emailValue.trim().length == 0) {
        emailUpdate("");

      }
      if (pwdValue.trim().length == 0) {
        passwordUpdate("");
      }

    }

  };


  const emailUpdate = (emailText) => {
    setEmail({ value: emailText, error: emailValidator(emailText) });


  }
  const passwordUpdate = (passwordText) => {
    setPassword({ value: passwordText, error: passwordValidator(passwordText) });

  }

  return (

    <View style={styles.sectionContainer}>

      <View style={styles.sectionBody}>

        <View style={styles.logoView}>

          <Image style={styles.logoImage} source={LOGO} />

          <Text style={styles.sectionTitle}> Login </Text>
        </View>

        <View style={styles.baseViewTextInput}>

          <TextInput style={styles.TextInput}
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={text => emailUpdate(text)}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            color="white"
            placeholder='Enter your Email Id'
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Text style={styles.errorText}> {email.error} </Text>

          <TextInput style={styles.TextInput}
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={text => passwordUpdate(text)}
            placeholder='Enter your Password'
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />
          <Text style={styles.errorText}> {password.error} </Text>
        </View>

        <View style={{ padding: 4 }}>
          {isLoading ? <ActivityIndicator /> : (
            <Text></Text>
          )}
        </View>

        <Button style={styles.button}
          onPress={_onLoginPressed}
          title="Navigate to next screen"
          accessibilityLabel="Click Here to Login"
        />

      </View>
    </View>

  );
}
export default LoginScreen;