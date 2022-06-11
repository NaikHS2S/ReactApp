
import React, { useState, useEffect } from 'react';
import {
Alert
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import styles from '../styles/style';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutEvent } from '../redux/reducer';


import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList
} from 'react-native';

const HomeScreen = ({ route, navigation }) => {

  const loggedInEmail = useSelector(state => state.emailId);
  const dispatch = useDispatch()

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

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { itemId, emailId } = route.params;

  const getMovies = async () => {
    axios.get('https://reactnative.dev/movies.json')
      .then(function (response) {
        setData(response.data.movies);
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  useEffect(() => {
    const init = async () => {
      await requestUserPermission();
      await getMovies();
    }
    init();
    console.log("Use effect called");
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        messaging().cancelAllNotifications();
      }
    });

    return unsubscribe;
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>

      <Text style={styles.sectionTitle}> Email:

        <Text style={styles.innerText}> {String(emailId)}</Text> </Text>

      <Button style={styles.button}
        title="Go Back"
        onPress={() => navigation.popToTop()}
      />

      {loggedInEmail?.length === 0 ? (
        <Text style={{ fontSize: 25, margin: 10 }}>Event Dispatched</Text>
      ) : (
        <Text style={{ fontSize: 30, margin: 10 }}>No Event Dispatched</Text>
      )}

      <Button style={styles.button}
        title="Dispatch Event"
        onPress={() => dispatch(logoutEvent(emailId))}
      />

      <View style={{ flex: 1, padding: 24 }}>

        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    </View>
  );
}

export default HomeScreen;