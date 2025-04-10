import {StyleSheet, Text, View, TextInput,TouchableOpacity,} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

const SignScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Burada giriş işlemleri yapılacak
    console.log('Sign In:', { email, password });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign In</Text>
            <Text style={styles.subHeaderText}>Please enter a valid account</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="youremails@gmail.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder="******"
              />
              <TouchableOpacity style={styles.forgetButton}>
                <Text style={styles.forgetButtonText}>Forget Password</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>Or</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome6 name="x-twitter" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't Have Account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#123458",
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666",
  },
  inputContainer: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  forgetButton: {
    alignSelf: "flex-end",
    padding: 4,
  },
  forgetButtonText: {
    color: "#123458",
    fontSize: 14,
    fontWeight: "500",
  },
  signInButton: {
    backgroundColor: "#123458",
    padding: 16,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    paddingHorizontal: 15,
    color: '#666',
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#666',
    fontSize: 14,
  },
  signUpButtonText: {
    color: '#123458',
    fontSize: 14,
    fontWeight: '600',
  },
});
