import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate("MainTabs");


  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Enter your username
      </Text>

      <TextInput
        style={styles.usernameEntry}
        value={username}
        onChangeText={setUsername}
        placeholder={"Username"}
      />

      <Button title="Log in" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'ff',
    gap: 10,
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usernameEntry: {
    backgroundColor: 'white',
    padding: 10,
  }
});