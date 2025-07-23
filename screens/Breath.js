import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch,Button}from 'react-native';

export default function HomeScreen() {
 return (
   <SafeAreaView style={styles.container}>
   <View style={styles.container1}></View>
   <View>
   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
               <Text style={styles.buttonText}> Back </Text>
             </TouchableOpacity>
             </View>
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: '#451C63',
   height: '100%',
justifyContent: 'center',
 },
 container1: {
   backgroundColor: '#A7A3F1',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height:700,
    borderRadius:20, 
    marginTop:35, 
    position: 'absolute',
 },
 button: {
   backgroundColor: '#A7A3F1',
  marginTop:35,
  borderRadius: 50,
  width: '5%',
  height: '5%',
  bottom: '5%'
 },
});