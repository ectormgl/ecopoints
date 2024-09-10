import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Switch } from 'react-native';

const RegisterScreen = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <View style={styles.container}>
     <View style={styles.topSection} />
     
      <View style={styles.bottomSection}> 
      <Text style={styles.headerText}>Get started</Text>
      
      <Text style={styles.inputText}>Full Name:</Text>
      <TextInput style={styles.input} placeholder="Enter Full Name" />
      
      <Text style={styles.inputText}>Email:</Text>
      <TextInput style={styles.input} placeholder="Enter Email" />
      <Text style={styles.inputText}>Password:</Text>
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry={true} />
      
      <View style={styles.agreeTermContainer}>
        <View style={styles.termContainer}>
          <Switch 
            value={isAgreed} 
            onValueChange={(value) => setIsAgreed(value)} 
            thumbColor={isAgreed ? "#fff" : "#fff"}
            trackColor={{ false: "#767577", true: "#004400" }} 
          />
          <Text style={styles.termText}>I agree to the processing of Personal data</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.signUpWithText}>Sign up with:</Text>

      <View style={styles.iconContainer}>
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'}} style={styles.icon} />
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_X_%28formerly_Twitter%29.svg'}} style={styles.icon} />
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'}} style={styles.icon} />
        <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'}} style={styles.icon} />
      </View>

      <View style={styles.accountText}>
        <Text>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003300',
  },
  topSection: {
    backgroundColor: '#003300', 
    height: '30%',
  },
  bottomSection: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 60, 
    borderTopRightRadius: 60,
    marginTop: -40, 
  },
  headerText: {
    color: '#003300',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 25,
  },
  inputText: {
    padding: 3,
    fontSize: 18,
    marginLeft: 35,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    marginLeft:  30,
    marginRight:  30,
    borderWidth:  1,
    fontSize: 18,
  },
  agreeTermContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft:  30,
  },
  termContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termText: {
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#003300',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:  30,
    marginRight:  30,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:  18, 
  },
  signUpWithText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
  },
  accountText: { 
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  signUpLink: {
    color: '#003300',
    textAlign: 'center',
  },
});

export default RegisterScreen;