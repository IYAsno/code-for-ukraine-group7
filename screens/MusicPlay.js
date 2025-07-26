import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

export default function MusicScreen() {
  const navigation = useNavigation();
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = async (trackFile, trackName) => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }

      const { sound: newSound } = await Audio.Sound.createAsync(trackFile);
      setSound(newSound);
      await newSound.playAsync();

      setIsPlaying(true);
      setCurrentTrack(trackName);
    } catch (error) {
      console.log('Error playing track:', error);
    }
  };

  const handlePlayPause = async () => {
    if (sound && isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else if (sound) {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  const handleRepeat = async () => {
    if (sound) {
      await sound.replayAsync();
    } else {
      Alert.alert('Немає активного треку для повтору');
    }
  };

  const handleNextTrack = () => {
    Alert.alert('⏭ Наступний трек (ще не реалізовано)');
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

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

        <TouchableOpacity style={styles.musicItem} onPress={handlePlayPause}>
          <Text style={styles.hertzText}>
            {isPlaying ? '⏸ Пауза' : '▶️ Продовжити'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.musicItem}
          onPress={() =>
            playTrack(
              require('./assets/autumn-sky-meditation-7618.mp3'),
              'Autumn Sky'
            )
          }>
          <Text style={styles.hertzText}>🌅 Грати Autumn Sky</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.musicItem}
          onPress={() => playTrack(require('./assets/calm-soul-meditation-247330.mp3'), 'Трек 1')}>
          <Text style={styles.hertzText}>🎵 1 Music</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.musicItem}
          onPress={() => playTrack(require('./assets/417hz_frequency_ambient_music_meditationcalmingzenspiritual_music.mp3'), 'Ambiet Music')}>
          <Text style={styles.hertzText}>🎵 2 Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.musicItem} onPress={handleRepeat}>
          <Text style={styles.hertzText}>🔁 Повторити трек</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.musicItem} onPress={handleNextTrack}>
          <Text style={styles.hertzText}>⏭ Наступний трек</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TabNavigationBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('Notes')}>
          <Image style={styles.tabIconStar} source={require('./assets/StarPlusImage.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => navigation.navigate('Motivation')}>
          <Image style={styles.tabIconHeart} source={require('./assets/HeartFoto.png')} />
        </TouchableOpacity>
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
  ground: {
    backgroundColor: '#D5CEEF',
    width: '90%',
    height: '83%',
    borderRadius: 15,
    paddingTop: 40,
    alignItems: 'center',
    bottom: '0.5%',
  },
  title: {
    color: '#441C63',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10,
  },
  menuText: {
    color: '#441C63',
    fontWeight: '600',
    fontSize: 19,
    textAlign: 'center',
    marginBottom: 30,
  },
  musicItem: {
    backgroundColor: '#C1AFE8',
    width: '85%',
    height: 60,
    borderRadius: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hertzText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonBack: {
    position: 'absolute',
    top: 30,
    left: 20,
    backgroundColor: '#D5CEEF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
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
    position: 'absolute',
  },
  tabIconStar: {
    width: 70,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
  },
  tabIconHeart: {
    width: 75,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute',
  },
});
