import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhoneNumberLogin = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.length > 3) {
      navigation.navigate('OTPVerification'); // Chuyển sang màn hình nhập mã OTP
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Ô nhập số điện thoại */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={[styles.continueButton, phoneNumber.length > 3 ? styles.activeButton : styles.disabledButton]}
        onPress={handleContinue}
        disabled={phoneNumber.length <= 3}
      >
        <Text style={styles.continueText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  backText: {
    fontSize: 24,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingVertical: 10,
  },
  countryCode: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  continueButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4CAF50',
  },
  disabledButton: {
    backgroundColor: '#CCC',
  },
  continueText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default PhoneNumberLogin;
