import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const OTPVerification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <Text style={styles.label}>Code</Text>

      {/* Ô nhập OTP */}
      <TextInput
        style={styles.otpInput}
        keyboardType="numeric"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
        placeholder="- - - -"
        placeholderTextColor="#999"
      />

      {/* Gửi lại mã */}
      <TouchableOpacity>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>

      {/* Nút tiếp tục */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  otpInput: {
    fontSize: 24,
    letterSpacing: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
    paddingBottom: 5,
    color: '#000',
  },
  resendText: {
    color: '#28a745',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 15,
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: 50,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 50,
  },
});

export default OTPVerification;
