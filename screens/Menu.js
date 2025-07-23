import { View, I18nManager, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate("MainTabs");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.menuText}>MENU</Text>

      <Text style={styles.menuTextUnder}>Which therapy do you want to practice?</Text>

      <Image style={styles.backFoto} source={require('./assets/backFoto.png')} />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Music')}>
            <Text style={styles.buttonText}>MUSIC</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Breath')}>
            <Text style={styles.buttonText}>BREATH</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Questions')}>
            <Text style={styles.buttonText}>QUESTIONS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notes')}>
            <Text style={styles.buttonText}>MY NOTES</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.photoCat} source={require('./assets/CATCAT.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F275F',
    position: 'relative',
  },

  menuText: {
    color: '#F8D6EE',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  menuTextUnder: {
    color: '#F8D6EE',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
    bottom: 15,
  },

  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  buttonView: {
    backgroundColor: '#F8D6EE',
    height: '15%',
    width: '75%',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1.5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6F275F',
  },

  photoCat: {
    position: 'absolute',
    width: '80%',
    height: '40%',
    bottom: '-1.5%',
    marginLeft: '35%',
    resizeMode: 'contain',
  },
     backFoto: {
    position: 'absolute',
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
    bottom: '-3%',
    opacity: 0.1,
},

});
