import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const questions = [
  "What am I feeling right now and why?",
  "What do I need in this moment?",
  "What have I been avoiding lately?",
  "What am I grateful for today?",
  "How can I take better care of myself?",
  "What thought patterns are holding me back?",
  "What do I want to let go of?",
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const goToAnswerScreen = (question) => {
    navigation.navigate("WriteAnswersDog", { question });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>Questions for Self-Discovery</Text>

          {questions.map((q, index) => (
            <View key={index} style={styles.questionBlock}>
              <Text style={styles.questionText}>{q}</Text>
              <TouchableOpacity
                style={styles.plusButton}
                onPress={() => goToAnswerScreen(q)}
              >
                <Ionicons name="add-circle-outline" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.TabNavigationBar}>
              <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MenuDog')}>
                <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('NoteGog')}>
                <Image style={styles.tabIconStar} source={require('./assets/StarPlusImage.png')} />
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MotivationDog')}>
                <Image style={styles.tabIconHeart} source={require('./assets/DogCatChange1.png')} />
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
    height: "85%",
    borderRadius: 25,
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2B3A6C",
    textAlign: "center",
    marginBottom: 20,
  },
  questionBlock: {
    backgroundColor: "#6F275F",
    borderRadius: 18,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    paddingRight: 10,
  },
  plusButton: {
    padding: 5,
  },
  TabNavigationBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#2B3A6C',
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
