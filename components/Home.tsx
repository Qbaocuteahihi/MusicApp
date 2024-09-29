import React from 'react';
import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '957964176508-vmcdge85tjplvp8p0fu3gd65bo325gs8.apps.googleusercontent.com',
});
const Home: React.FC = () => {
  const navigation = useNavigation();

  const onLogout = async () => {
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

export default Home;
