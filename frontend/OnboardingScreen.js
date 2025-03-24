import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(0);
  const slideAnim = useRef(new Animated.Value(0)).current;

  const steps = [
    { 
      title: 'Welcome to our store', 
      subtitle: 'Get your groceries in as fast as one hour', 
      image: require('../assets/onboard2.jpg')
    },
    { 
      title: 'Fresh & Organic', 
      subtitle: 'We deliver fresh vegetables and fruits to your home', 
      image: require('../assets/onboard2.jpg')
    },
    { 
      title: 'Fast & Reliable', 
      subtitle: 'Your order will be at your doorstep in no time!', 
      image: require('../assets/onboard2.jpg')
    }
  ];

  const animateSlide = (direction) => {
    Animated.timing(slideAnim, {
      toValue: direction === 'next' ? -width : width,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      setStep((prevStep) => prevStep + (direction === 'next' ? 1 : -1));
      slideAnim.setValue(0);
    });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      animateSlide('next');
    } else {
      navigation.navigate('Login');
    }
  };

  const handleBack = () => {
    if (step > 0) {
      animateSlide('back');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={steps[step].image} style={styles.backgroundImage} resizeMode="cover" />
      <View style={styles.overlay} />
      <View style={styles.textWrapper}>
        <Animated.View style={[styles.textContainer, { transform: [{ translateX: slideAnim }] }]}>
          <Text style={styles.title}>{steps[step].title}</Text>
          <Text style={styles.subtitle}>{steps[step].subtitle}</Text>
        </Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        {step > 0 && step < steps.length - 1 && (
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        {step < steps.length - 1 ? (
          <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.getStartedButton} onPress={handleNext}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Lớp phủ làm chữ nổi bật hơn
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textContainer: {
    width: width - 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  nextButton: {
    position: 'absolute',
    right: 20,
  },
  getStartedButton: {
    position: 'absolute',
    width: width - 40,
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    bottom: 50,
    left: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  getStartedText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default OnboardingScreen;
