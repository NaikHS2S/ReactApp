import React, { useEffect } from 'react';
import styles from '../../styles/style';
import { LOGO } from "../../constants/app.constant";
import { useSelector } from 'react-redux';

import {
  Text,
  Image,
  View,
  ActivityIndicator
} from 'react-native';

const AppConfigScreen = ({ navigation }) => {

const {emailId} = useSelector( (state) => state.loginAppReducer)

  useEffect(() => {
    if(emailId){
      navigation.replace('Second', {
        customeId: 1,
        emailId: emailId,
      });
    }
  }, []);

  return (

    <View style={styles.sectionContainer}>

      <View style={styles.sectionBody}>

        <View style={styles.logoView}>

          <Image style={styles.logoImage} source={LOGO} />

          <Text style={styles.sectionTitle}> Loading </Text>
        </View>

        <View style={{ padding: 4 }}>
          <ActivityIndicator /> 
        </View>

      </View>
    </View>

  );
}
export default AppConfigScreen;