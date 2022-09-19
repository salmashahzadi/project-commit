// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  Button,
} from 'react-native';
// import Logo from '../Assets/Images/Logo1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import CustomButton from '../../CustomComponents/CustomButton';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = () => (
//   <Button title="Skip" color="#000000" backgroundColor="none" />
// );

const SplashScreen = ({navigation}) => {
  // State for ActivityIndicator animation
  // const [animating, setAnimating] = useState(true);

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
    <Onboarding
      // SkipButtonComponent={Skip}
      onSkip={() => navigation.replace('NavigationAuth')}
      onDone={() => navigation.navigate('NavigationAuth')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../Assets/images/onboard.png')}
              style={[StyleSheet.image]}
              resizeMode="center"
            />
          ),
          title: '🆓🆓🆓',
          subtitle: 'Welcome to LS CRM',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../../Assets/images/onboard2.png')}
              style={[StyleSheet.image]}
              resizeMode="center"
            />
          ),
          title: '✔✔✔',
          subtitle: 'Save Your Customer data with our CRM',
        },
      ]}
    />
  );
};

//     <View style={styles.container}>
//       <CustomButton
//         title="Go to Details"
//         onPress={() => navigation.navigate('Home')}
//       />
//       {/* <Image
//         source={require('../Assets/Images/Logo1.png')}
//         style={{width: '90%', resizeMode: 'contain', margin: 30}}
//       /> */}

//       {/* <ActivityIndicator
//         animating={animating}
//         color="#FFFFFF"
//         size="large"
//         style={styles.activityIndicator}
//       /> */}
//     </View>
//   );
// };

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
  image: {
    width: ' 70%',
    maxheight: 200,
    maxWidth: 300,
  },
});
export default SplashScreen;
