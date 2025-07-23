import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();
  const handlePress = () => navigation.navigate("MainTabs");

 return (
   <SafeAreaView style={styles.container}>

    <View style={styles.ground}>
        <Text style={styles.menuText}>What are you felling right now?</Text>
    </View>
   </SafeAreaView>
   
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: '#441C63',
   height: '100%',
   justifyContent: 'center',
 },
 ground:{
    backgroundColor: "#D5CEEF",
    width: '95%',
    height: '95%',
    borderRadius: 15,
    bottom: '2%',
    position: 'absolute',
 },
   menuText: {
    color: '#441C63',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: '4%',
    marginBottom: 20,
  },
   myTabNavigation: {
    backgroundColor: '#5C5A5A',
    width: '120%',
    height: '13%',
    bottom: '-83%',
    marginLeft: '-5%',
   },
}
);