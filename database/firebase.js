import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCK4HkeE6d2bynGt6TkcBksiQOQcHGoJ-c',
  authDomain: 'fyp-project-e4bf6.firebaseapp.com',
  databaseURL: 'https://fyp-project-e4bf6-default-rtdb.firebaseio.com',
  projectId: 'fyp-project-e4bf6',
  storageBucket: 'fyp-project-e4bf6.appspot.com',
  messagingSenderId: '163489280899',
  appId: '1:163489280899:web:31f64e7c45f95c7c05fcb6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
