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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/BlackSadDog.jpg')} />
              <Text style={styles.buttonText}>Insomnia</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/Overwork.jpg')} />
              <Text style={styles.buttonText}>Overwork</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.distanceBetween}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/SadLabrador.jpg')} />
              <Text style={styles.buttonText}>Anxiety</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/SadDober.jpg')} />
              <Text style={styles.buttonText}>Sadness</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.distanceBetween}>
          <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/ChillDog.jpg')} />
              <Text style={styles.buttonText}>I want to relax</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MusicDogPlay')}>
              <Image style={styles.imageEmote} source={require('./assets/SadShiba.jpg')} />
              <Text style={styles.buttonText}>Depression</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>

        <View style={styles.TabNavigationBar}>
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MenuDog')}>
            <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('NoteDog')}>
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
    alignItems: 'center',
    backgroundColor: '#2B3A6C',
    height: '100%',
    justifyContent: 'center',
  },
  ground: {
    backgroundColor: '#C2CCE4',
    width: '90%',
    height: '83%',
    borderRadius: 15,
    bottom: '0.5%',
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
});
