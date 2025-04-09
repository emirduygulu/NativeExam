import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
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
      <button name='button' style={styles.button}>Let's Go!</button>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // root : {
  // display:"flex",
  // height: "100%",
  // flexWrap: "wrap",
  // flexDirection: "column",
  // },
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
  }
});
