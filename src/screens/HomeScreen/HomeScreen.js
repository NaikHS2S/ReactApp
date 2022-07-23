
import React, { useState, useEffect } from 'react';
import styles from '../../styles/style';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { updateLogoutSuccess } from '../../redux/Login/actions';

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const {emailId} = useSelector( (state) => state.loginAppReducer)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
    getMovies();
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>

      <Text style={styles.sectionTitle}> Email:

      <Text style={styles.innerText}>  {String(emailId)}</Text> </Text>

      <Button style={styles.button}
        title="Logout"
        onPress={() => {
          dispatch(updateLogoutSuccess());
          navigation.replace('Login');
        }}
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