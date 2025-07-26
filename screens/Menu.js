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
      </View>

      <Image style={styles.photoCat} source={require('./assets/CatFff.png')} />

      <Text style={styles.catMessage}>
        “Today is definitely your day - just believe and move forward”
      </Text>

      <View style={styles.TabNavigationBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Notes')}>
          <Image style={styles.tabIconStar} source={require('./assets/StarPlusImage.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Motivation')}>
          <Image style={styles.tabIconHeart} source={require('./assets/HeartFoto.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F275F',
    position: 'relative',
    zIndex: -3,
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
    height: '17%',
    width: '75%',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1.4,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    bottom: '2.5%'
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
    width: '60%',
    height: '30%',
    bottom: '1.5%',
    left: '40%',
    resizeMode: 'contain',
    zIndex: -1,
  },

  catMessage: {
    position: 'absolute',
    bottom: '27%',
    left: '5%',
    right: '5%',
    textAlign: 'center',
    color: '#F8D6EE',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 15,
    padding: 10,
    overflow: 'hidden',
  },

  backFoto: {
    position: 'absolute',
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
    bottom: '0%',
    opacity: 0.1,
    zIndex: -2,
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
});
