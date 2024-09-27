import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, TextInput } from 'react-native-paper';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (email) {
      // Assume password reset logic goes here
      alert(`Password reset instructions sent to ${email}`);
      navigation.navigate('Login');
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />
        <TouchableOpacity style={styles.ResetButton} onPress={handleResetPassword}>
          <Text style={styles.ResetButtonText}>Send Reset Instructions</Text>
        </TouchableOpacity>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'centre',
        backgroundColor: '#ecf0f1',
        padding: 16,
      },
      card: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
      },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  ResetButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  ResetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
