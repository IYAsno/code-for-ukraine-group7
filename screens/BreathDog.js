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

      <ImageBackground style={styles.container1} source={require('./assets/breathedog.png')}>
       <Text style={styles.description}>
                              Square Breathing is a simple breathing exercise that helps you feel calm and focused.

                            </Text>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText5}> 
                    ㅤ&#60;ㅤ
                    </Text>
                  </TouchableOpacity>
      <View style={styles.start}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BreathingexDog')}>
                  <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
                </View>
    
      </ImageBackground>
      <View>
        
      </View>
      <View style={styles.TabNavigationBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MenuDog')}>
          <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('NotesDog')}>
          <Image style={styles.tabIconStar} source={require('./assets/StarPlusImage.png')} />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MotivationDog')}>
          <Image style={styles.tabIconHeart} source={require('./assets/HeartFoto.png')} />
        </TouchableOpacity>
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
    height: 800,
    borderRadius: 20,
    marginTop: 40,
    position: "absolute"
  },
  start: {
    backgroundColor: "#2B3A6C",
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
    backgroundColor: '#2B3A6C',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText5: {
    color: "#ffff"
  },
  description: {
    marginTop: 65,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  TabNavigationBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#8B4B99',
  width: '100%',
  height: '8%',
  borderTopWidth: 0.5,
  borderColor: '#ffffff',
  position: 'absolute',
  bottom: 0,
},

tabButton: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

tabIcon: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
},
tabIconStar: {
  width: 70,
  height: 50,
  resizeMode: 'contain',
},
tabIconHeart: {
  width: 75,
  height: 50,
  resizeMode: 'contain',
},
TabNavigationBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#384476',
  width: '100%',
  height: '8%',
  borderTopWidth: 0.5,
  borderColor: '#ffffff',
  position: 'absolute',
  bottom: 0,
},

tabButton: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

tabIcon: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
},
tabIconStar: {
  width: 70,
  height: 50,
  resizeMode: 'contain',
},
tabIconHeart: {
  width: 75,
  height: 50,
  resizeMode: 'contain',
},
}
);
