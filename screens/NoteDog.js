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

      <View style={styles.wrapper}>
        <Text style={styles.title}>📝 My Notes</Text>

        <TextInput
          style={styles.input}
          placeholder="Type your thoughts here..."
          placeholderTextColor="#888"
          multiline
          value={text}
          onChangeText={setText}
        />

        <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
          <Text style={styles.photoButtonText}>📷 Add Image</Text>
        </TouchableOpacity>

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.previewImage} />
        )}

        <TouchableOpacity style={styles.saveButton} onPress={addNote}>
          <Text style={styles.saveButtonText}>💾 Save Note</Text>
        </TouchableOpacity>

        <Text style={styles.subTitle}>📚 Your Saved Notes</Text>

        {notes.map((note) => (
          <View key={note.id} style={styles.note}>
            <Text style={styles.noteText}>{note.text}</Text>
            {note.imageUri && (
              <Image source={{ uri: note.imageUri }} style={styles.noteImage} />
            )}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F275F',
  },
  wrapper: {
    backgroundColor: '#C2CCE4',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6F275F',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1.2,
    borderRadius: 12,
    padding: 15,
    minHeight: 100,
    fontSize: 16,
    marginBottom: 10,
  },
  photoButton: {
    backgroundColor: '#C2CCE4',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#6F275F',
    padding: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#C2CCE4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F275F',
    marginBottom: 10,
    marginTop: 10,
  },
  note: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
  },
  noteText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  noteImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  buttonBack: {
    position: 'absolute',
    top: 35,
    left: 20,
    backgroundColor: '#F8D6EE',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    zIndex: 10,
  },
  backText: {
    fontWeight: 'bold',
    color: '#6F275F',
  },
});
