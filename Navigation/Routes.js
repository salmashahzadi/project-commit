// import 'react-native-gesture-handler';
// import * as React from 'react';
// import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
// import FinalNavigation from './Navigation/FinalNavigation';
// import {AuthContext, AuthProvider} from './Navigation/AuthProvider';
// import auth from '@react-native-firebase/auth';
// import {useState, useEffect, useContext} from 'react';
// import BottomTab from './BottomTab';

// export default function Routes() {
//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   const onAuthStateChanged = user => {
//     setUser(user);

//     if (initializing) setInitializing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);
//   if (initializing) return null;

//   return (
//     <NavigationContainer>
//       {user ? <BottomTab /> : <FinalNavigation />}
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#F9FBFC',
//   },
// });
