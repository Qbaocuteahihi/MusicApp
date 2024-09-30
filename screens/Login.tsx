// Login.tsx
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types'; // Import kiểu định nghĩa
import { firebase } from '@react-native-firebase/auth';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
type LoginProps = {
  navigation: LoginScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Login'>;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  const handleGoogleLogin = async () => {
    const provider = firebase.auth.GoogleAuthProvider;

    try {
      await firebase.auth().signInWithRedirect(provider);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Đăng nhập với Google" onPress={handleGoogleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
