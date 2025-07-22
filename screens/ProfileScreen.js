import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function ProfileScreen() {
  const navigation = useNavigation();

    const [likes, setLikes] = useState(0);


 return (

   <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
       </View>

       <View style={styles.phrathe}>
       </View>

   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: '#fff',
   height: '100%',
   justifyContent: 'center',
 },

 logo: {
  width: '45%',
  height: '25%',
  backgroundColor: '#D3D3D3',
  bottom: '3%',
  borderRadius: 50,
 },
 
 phrathe: {
  backgroundColor: '#D3D3D3',
  width: '60%',
  height: '20%',
  bottom: '0%',
  borderRadius: 25,
 },

});