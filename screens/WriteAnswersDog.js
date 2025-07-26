import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function AnswerScreen({ route }) {
  const { question } = route.params;
  const [answer, setAnswer] = useState("");

  const handleSave = () => {
    Alert.alert("Saved", "Your answer has been saved");
    setAnswer("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.question}>{question}</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write your thoughts here..."
          value={answer}
          onChangeText={setAnswer}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B3A6C",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#F8D6EE",
    width: "90%",
    borderRadius: 20,
    padding: 20,
  },
  question: {
    fontSize: 22,
    color: "#2B3A6C",
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 150,
    textAlignVertical: "top",
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#2B3A6C",
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontSize: 18,
  },
});
