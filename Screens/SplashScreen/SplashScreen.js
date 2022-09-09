// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
} from 'react-native';
// import Logo from '../Assets/Images/Logo1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomButton from '../../CustomComponents/CustomButton';
// import Home from '../Home/Home';

const SplashScreen = ({navigation}) => {
  // State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(true);
  //     //Check if user_id is set or not
  //     //If not then send for Authentication
  //     //else send to Home Screen
  //     // AsyncStorage.getItem('user_id').then(value =>
  //     //   navigation.replace(value === null ? 'Menue' : 'MyDrawer'),
  //     // );
  //   }, 3000);
  // }, []);
  return (
    <View style={styles.container}>
      <CustomButton
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
      {/* <Image
        source={require('../Assets/Images/Logo1.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      /> */}

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
export default SplashScreen;
