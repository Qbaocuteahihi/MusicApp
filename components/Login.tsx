import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const [user, setUser] = useState<null | FirebaseAuthTypes.User>(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Cấu hình Google Sign-In
    GoogleSignin.configure({
      webClientId: '957964176508-vmcdge85tjplvp8p0fu3gd65bo325gs8.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
 
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      setUser(userCredential.user);
      navigation.navigate('Home')
   
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <Text>Welcome, {user.displayName}</Text>
      ) : (
        <Button title="Sign in with Google" onPress={onGoogleButtonPress} />
      )}
    </View>
  );
};

export default Login;
