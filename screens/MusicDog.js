import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.ground}>
        <Text style={styles.menuText}>What are you feeling right now?</Text>

        <View style={styles.distanceBetween}>
          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/BlackSadDog.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>Insomnia</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/Overwork.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>Overwork</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.distanceBetween}>
          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/SadLabrador.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>Anxiety</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/SadDober.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>Sadness</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.distanceBetween}>
          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/ChillDog.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>I want to relax</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <Image style={styles.imageEmote} source={require('./assets/SadShiba.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Text style={styles.buttonText}>Depression</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2B3A6C',
    height: '100%',
    justifyContent: 'center',
  },
  ground: {
    backgroundColor: '#C2CCE4',
    width: '90%',
    height: '90%',
    borderRadius: 15,
    bottom: '-3%',
    alignItems: 'center',
  },
  menuText: {
    color: '#2B3A6C',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
  },
  distanceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 15,
  },
  imageEmote: {
    width: 135,
    height: 135,
    borderRadius: 10,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#2B3A6C',
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
  buttonBack: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#D5CEEF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
