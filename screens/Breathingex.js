import React, { useState, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Picker
} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [cycles, setCycles] = useState(3);
  const [currentPhase, setCurrentPhase] = useState("Start");
  const [isRunning, setIsRunning] = useState(false);

  const squareAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const phases = ["Inhale", "Hold", "Exhale", "Hold"];
  const directions = [
    { x: 100, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
    { x: 0, y: 0 },
  ];

  const startBreathing = async () => {
    setIsRunning(true);
    for (let i = 0; i < cycles; i++) {
      for (let j = 0; j < 4; j++) {
        setCurrentPhase(phases[j]);
        await animateTo(directions[j]);
        await wait(4000);
      }
    }
    setCurrentPhase("Done");
    setIsRunning(false);
  };

  const animateTo = (coords) => {
    return new Promise((resolve) => {
      Animated.timing(squareAnim, {
        toValue: coords,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => resolve());
    });
  };

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container1} source={require('./assets/breathingex.png')}>

         
        <View style={styles.boxArea}>
          <Animated.View
            style={[
              styles.movingSquare,
              {
                transform: [
                  { translateX: squareAnim.x },
                  { translateY: squareAnim.y },
                ],
              },
            ]}
          />
          <View style={styles.squarePath} />
        </View>

        <Text style={styles.phase}>{currentPhase}</Text>

       
        <TouchableOpacity
          style={styles.button}
          onPress={startBreathing}
          disabled={isRunning}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          This exercise helps reduce anxiety by syncing your breath with movement:
          4 seconds inhale → hold → exhale → hold.
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#451C63",
    height: "100%",
    justifyContent: "center",
    
  },
  container1: {
    backgroundColor: "#A7A3F1",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 750,
    borderRadius: 20,
    marginTop: 35,
    position: "absolute",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#4b0082",
  },
  boxArea: {
    width: 120,
    height: 120,
    marginBottom: 30,
    position: "relative",
  },
  squarePath: {
    position: "absolute",
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#451C63",
    top: 0,
    left: 0,
  },
  movingSquare: {
    width: 20,
    height: 20,
    backgroundColor: "#451C63",
    position: "absolute",
    borderRadius: 5,
  },
  phase: {
    fontSize: 24,
    marginBottom: 20,
    color: "#4b0082",
  },
  button: {
    backgroundColor: "#451C63",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  description: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 20,
  },
});
