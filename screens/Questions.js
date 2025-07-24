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
          <View style={styles.start}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WriteAnswers')}>
                </TouchableOpacity>
                </View>
      <ImageBackground style={styles.container1} source={require('./assets/questions.png')}>

    
      </ImageBackground>
      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    marginTop: 30,
    
    height: "100%",
    justifyContent: "center",
  }
  });