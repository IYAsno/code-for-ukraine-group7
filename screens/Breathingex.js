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
      <ImageBackground style={styles.container1} source={require('./assets/breathingex.png')}>
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
    backgroundColor: "#451C63",
    height: "100%",
    justifyContent: "center",
  },
  container1: {
    backgroundColor: "#A7A3F1",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 750,
    borderRadius: 20,
    marginTop: 35,
    position: "absolute"
  },
  });