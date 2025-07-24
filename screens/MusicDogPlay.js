import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MusicScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

<View style={styles.ground}>
  <Text style={styles.title}>MUSIC</Text>

  <Text style={styles.menuText}>
    Help for focusing, relaxing or sleeping
  </Text>

  <TouchableOpacity style={styles.musicItem} onPress={() => {}}>
    <Text style={styles.hertzText}>639HZ</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.musicItem} onPress={() => {}}>
    <Text style={styles.hertzText}>432HZ</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.musicItem} onPress={() => {}}>
    <Text style={styles.hertzText}>396HZ</Text>
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
    backgroundColor: '#bcc5dbff',
    width: '90%',
    height: '85%',
    borderRadius: 15,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    color: '#2B3A6C',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10,
  },
  menuText: {
    color: '#2B3A6C',
    fontWeight: '600',
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 30,
  },
  musicItem: {
    backgroundColor: '#C2CCE4',
    width: '85%',
    height: 60,
    borderRadius: 15,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 25,
  },
  hertzText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    fontWeight: 'bold',
  },
  buttonBack: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#C2CCE4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
