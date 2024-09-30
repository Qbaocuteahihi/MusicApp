// firebaseConfig.js
import firebase from '@react-native-firebase/app'; // Sử dụng @react-native-firebase/app thay vì firebase/app
import '@react-native-firebase/auth'; // Cài đặt Firebase Auth

const firebaseConfig = {
  apiKey: "AIzaSyA_ZAmxqJOybHf_0PEsBhHMCLQLdZbXr-M",
  authDomain: "login-2311.firebaseapp.com",
  projectId: "login-2311",
  storageBucket: "login-2311.appspot.com",
  messagingSenderId: "957964176508",
  appId: "1:957964176508:android:60e3fdbe0182277f2f4df9",
};

// Khởi tạo Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };