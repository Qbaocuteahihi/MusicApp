// Home.tsx
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types'; // Import kiểu định nghĩa
import { firebase } from '@react-native-firebase/auth';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeProps = {
  navigation: HomeScreenNavigationProp;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Chào mừng đến với trang chủ!</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Home;
