import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';

const MainScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        {/* Add Image here */}
        <Image
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230824/original/pngtree-office-worker-man-sitting-behind-a-desk-with-a-laptop-picture-image_8323981.png',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Discover your dream job here</Text>
        <Text style={styles.subtitle}>
          Explore all the existing job roles based on your interest and study major
        </Text>

        <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signUpButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.RegisterButton} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.RegisterButtonText}>Register</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  LoginButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  RegisterButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  RegisterButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MainScreen;
