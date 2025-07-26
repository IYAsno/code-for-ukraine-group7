import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function NotesScreen() {
  const [text, setText] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [notes, setNotes] = useState([]);

  const navigation = useNavigation();

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Дозвіл потрібен', 'Будь ласка, дозволь доступ до галереї');
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const addNote = () => {
    if (!text && !imageUri) return;

    const newNote = {
      id: Date.now().toString(),
      text,
      imageUri,
    };

    setNotes([newNote, ...notes]);
    setText('');
    setImageUri(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.contentWrapper}>
        <View style={styles.notesArea}>
          <Text style={styles.title}>NOTES</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Enter a note..."
            placeholderTextColor="#888"
            multiline
            value={text}
            onChangeText={setText}
          />

          <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
            <Text style={styles.photoButtonText}>Add a photo</Text>
          </TouchableOpacity>

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
          )}

          <TouchableOpacity style={styles.saveButton} onPress={addNote}>
            <Text style={styles.saveButtonText}>Save notes</Text>
          </TouchableOpacity>

          <View style={styles.sectionDivider} />

          <ScrollView style={styles.notesContainer}>
            {notes.map((note, index) => (
              <View key={note.id}>
                <View style={styles.note}>
                  {note.text && <Text style={styles.noteText}>{note.text}</Text>}
                  {note.imageUri && (
                    <Image source={{ uri: note.imageUri }} style={styles.noteImage} />
                  )}
                </View>
                {index < notes.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

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
    backgroundColor: '#2B3A6C',
  },
  buttonBack: {
    position: 'absolute',
    top: 35,
    left: 20,
    backgroundColor: '#2B3A6C',
    padding: 8,
    borderRadius: 8,
    zIndex: 10,
    borderColor: '#C2CCE4',
    borderWidth: 1,
  },
  backText: {
    color: '#C2CCE4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentWrapper: {
    flex: 1,
    padding: 15,
    paddingTop: 70, 
  },
  notesArea: {
    flex: 1,
    backgroundColor: '#C2CCE4',
    borderRadius: 20,
    padding: 15,
    marginTop: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2B3A6C',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#2B3A6C',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    minHeight: 100,
    fontSize: 16,
    marginBottom: 15,
  },
  photoButton: {
    backgroundColor: '#2B3A6C',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  photoButtonText: {
    color: '#C2CCE4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: '#2B3A6C',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  saveButtonText: {
    color: '#C2CCE4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionDivider: {
    borderBottomColor: '#2B3A6C',
    borderBottomWidth: 1,
    marginVertical: 15,
    width: '100%',
  },
  note: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  noteImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },
  divider: {
    borderBottomColor: '#2B3A6C',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%',
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