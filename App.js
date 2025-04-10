import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignScreen from './components/SignScreen';
import SignUpScreen from './components/SignUpScrenn';

const Stack = createNativeStackNavigator();

function WelcomeScreen({ navigation }) {
  return (
    <View name="container" style={styles.container}>
      <SafeAreaView>
        <View name="imageContainer" style={styles.imageContainer}>
          <Image name="tinyLogo"
            style={styles.tinyImage}
            source={require('./assets/photo-holiday.jpeg')}
          />
        </View>
        <View name="containerTextArea" style={styles.containerTextArea}>
          <Text name="containerHeader" style={styles.containerHeader}>Winter{'\n'}Vacation Trips</Text>
          <Text name="containerText" style={styles.containerText}>Escape the ordinary and embrace the magic of winter! Whether you're dreaming of snowy mountains, cozy cabins, or festive city lights, we have the perfect getaway for you. Book your winter escape now and create unforgettable memories!</Text>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignScreen')}
        >
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignScreen" 
          component={SignScreen}
          options={{
            title: 'Sign In',
            headerStyle: {
              backgroundColor: '#123458',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#123458',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    display:"flex",
    height: "100%",
    flexWrap: "wrap",
    flexDirection: "column",
    width:"100%",
    padding:15,
    borderRadius:10,
    backgroundColor:"#f3f3f3",
  },
  imageContainer:{
    display: "flex",
    alignItems: "center",
    width: "100%" ,
    alignContent: "center",
    flexWrap: "wrap",
  },
  containerTextArea:{
    display:"flex",
    width: "100%" ,
    alignContent: "flex-start",
    flexWrap: "wrap",    
    height: "45%",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "15px",
  },
  containerHeader:{
    fontSize:36,
    fontFamily:"ui-monospace",
    fontWeight:'bold',
    color:"#1f1f1f",
  },
  containerText:{
    fontSize: 14,
    marginTop: 30,
    paddingLeft: 3,

  },
  tinyImage: {
    height: "450px",
    width: "90vw",
    borderRadius:15,
  },
  button:{
    fontSize: 20,
    padding: 12,
    width: 170,
    border: 0,
    backgroundColor:"#123458",
    borderRadius: 19,
    color:"#f3f3f3",
  },
  buttonText: {
    color: '#f3f3f3',
    fontSize: 20,
    textAlign: 'center',
  }
});
