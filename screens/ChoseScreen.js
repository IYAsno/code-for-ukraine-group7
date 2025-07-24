import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.backFoto} source={require('./assets/backFoto.png')} />

      <Text style={styles.title}>You prefer....</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Menu')} >
          <Image style={styles.image} source={require('./assets/ChoseCat.jpg')} />
          <Text style={styles.label}>CATS!!!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('MenuDog')} >
          <Image style={styles.image} source={require('./assets/ChoseDog.jpg')} />
          <Text style={styles.label}>DOGS!!!</Text>
        </TouchableOpacity>
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
  backFoto: {
    position: 'absolute',
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
    opacity: 0.1,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '85%',
  },
  card: {
    backgroundColor: '#E8D3F0',
    borderRadius: 20,
    marginBottom: 30,
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    color: '#4A1D5F',
  },
});
