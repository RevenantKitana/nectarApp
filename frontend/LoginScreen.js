import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/onboard3.jpg')} // Hình nền
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Tiêu đề */}
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        {/* Các nút đăng nhập */}
        <TouchableOpacity 
            style={styles.loginButton} 
            onPress={() => navigation.navigate('PhoneNumberLogin')}
>
        <Image source={require('../assets/phone.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>


        <TouchableOpacity style={[styles.loginButton, styles.facebookButton]}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.loginButton, styles.googleButton]}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* Nút chuyển sang đăng ký */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Làm tối ảnh nền
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
    marginBottom: 30,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
  },
  facebookButton: {
    backgroundColor: 'rgba(24, 119, 242, 0.8)',
  },
  googleButton: {
    backgroundColor: 'rgba(219, 68, 55, 0.8)',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 20,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
