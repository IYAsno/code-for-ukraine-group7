import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const navigation = useNavigation();

 return (
   <SafeAreaView style={styles.container}>

    <Image style={styles.backFoto} source={require('./assets/backFoto.png')} />

    <View style={styles.logo}>
    <Image style={styles.logoImage} source={require('./assets/newLogo.png')} />

    <View style={styles.buttonView}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChoseScreen')}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
            </View>

    </View>

   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: '#451C65',
   height: '100%',
justifyContent: 'center',
 },
 logo: {
    backgroundColor: '#F8D6EE',
    borderRadius: 100,
    width: '43%',
    height: '20%',
    position: 'absolute',
 },
 logoImage: {
    width: '150%',
    height: '150%',
    marginLeft: '-25%',
    bottom: '-29%',
    position: 'absolute',
 },
   backFoto: {
    position: 'absolute',
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
    opacity: 0.1,
},
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F8D6EE',
  }
});
