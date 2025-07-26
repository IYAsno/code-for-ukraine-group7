import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
  Button,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation();
  const handlePress = () => navigation.navigate("MainTabs");

  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground style={styles.container1} source={require('./assets/breathe.png')}>
       <Text style={styles.description}>
                              Square Breathing is a simple breathing exercise that helps you feel calm and focused.

                            </Text>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText5}> 
                    ㅤ&#60;ㅤ
                    </Text>
                  </TouchableOpacity>
                  
      <View style={styles.start}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Breathingex')}>
                  <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
                </View>
    
      </ImageBackground>
      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    
    height: "100%",
    justifyContent: "center",
  },
  container1: {

    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 750,
    borderRadius: 20,
    marginTop: 60,
    position: "absolute"
  },
  start: {
    backgroundColor: "#451C63",
    borderRadius: 20,
    width: '60%',
    height: '8%',
    borderWidht: 60,
    borderColor: 'black',
    bottom: -150
  },
  backgroundimage: {
    height : "80%",
    width: "80%",
    position: "absolute",
  },
  buttonText: {
   color: '#fff',
   
   justifyContent: 'center',
   textAlign: 'center',
   fontSize: 35,
   padding: '1.9%'

  },
  buttonBack: {
    position: 'absolute',
    top: 25,
    left: 25,
    backgroundColor: '#451C63',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText5: {
    color: "#ffff"
  },
  description: {
    marginTop: 60,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 20,
    fontWeight: "bold"
  },

}
);
