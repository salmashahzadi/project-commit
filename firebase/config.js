import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyCm7Lyg0aYgSW6qJ6bCC-ZB_TWB7dTHp54',
  authDomain: 'fyp-project-2480f.firebaseapp.com',
  databaseURL: 'https://fyp-project-2480f-default-rtdb.firebaseio.com',
  projectId: 'fyp-project-2480f',
  storageBucket: 'fyp-project-2480f.appspot.com',
  messagingSenderId: '118869268102',
  appId: '1:118869268102:web:0cf0060db80a32a6d22307',
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }
