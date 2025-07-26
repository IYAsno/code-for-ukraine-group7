import React, { useState, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const shouldStop = useRef(false);

  const navigation = useNavigation();
  const [currentPhase, setCurrentPhase] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const squareAnim = useRef(new Animated.ValueXY({ x: 0, y: 20 })).current; 

  const phases = [ "Hold", "Breathe in", "Hold", "Breathe out",];
  const directions = [
    { x: 0, y: 20 },
    { x: 80, y: 20 },
    { x: 80, y: 100 },
    { x: 0, y: 100 },
  ];

  const duration = 3500;
  const totalCycles = 4;

  const startBreathing = async () => {
    if (isRunning) return;
    shouldStop.current = false;
    setIsRunning(true);

    let firstStep = true;

    for (let i = 0; i < totalCycles * directions.length; i++) {
      const stepIndex = i % directions.length;
      setCurrentPhase(phases[stepIndex]);

      if (firstStep) {
        animateTo(directions[stepIndex]);
        firstStep = false;
      } else {
        await animateTo(directions[stepIndex]);
      }

      if (shouldStop.current) {
        setCurrentPhase("Stopped");
        setIsRunning(false);
        return;
      }
    }

    setCurrentPhase("Done");
    setIsRunning(false);
  };

  const stopBreathing = () => {
    if (isRunning) {
      shouldStop.current = true;
    }
  };

  const animateTo = (coords) => {
    return new Promise((resolve) => {
      Animated.timing(squareAnim, {
        toValue: coords,
        duration: duration,
        useNativeDriver: false,
      }).start(() => resolve());
    });
  };

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText5}> 
              ㅤ&#60;ㅤ
              </Text>
            </TouchableOpacity>
      <ImageBackground
        style={styles.container1}
        source={require("./assets/breathexdog.png")}
      >
        <View style={styles.innerContent}>
          <View style={styles.boxArea}>
            <View style={styles.squarePath} />
            <Animated.View
              style={[
                styles.movingCircle,
                {
                  transform: [
                    { translateX: squareAnim.x },
                    { translateY: squareAnim.y },
                  ],
                },
              ]}
            />
          </View>

          <Text style={styles.phase}>{currentPhase}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={startBreathing}
            disabled={isRunning}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            
            onPress={stopBreathing}
            disabled={!isRunning}
          >
            <Text style={styles.buttonText1}>Stop</Text>
          </TouchableOpacity>

         
            <Text style={styles.description}>
            This is an easy breathing exercise to help you feel calm and relaxed. Just follow the moving square.
            </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#2B3A6C",
    height: "100%",
    justifyContent: "center",
  },
  container1: {
    backgroundColor: "#8EA0CF",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 400,
    height: 750,
    borderRadius: 20,
    marginTop: 35,
    position: "absolute",
  },
  innerContent: {
    marginTop: '55%',
    alignItems: "center",
  },
  boxArea: {
    width: 120,
    height: 140,
    marginBottom: 30,
    position: "relative",
  },
  squarePath: {
    position: "absolute",
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: "#2B3A6C",
    top: 20,
    left: 0,
  },
  movingCircle: {
    width: 20,
    height: 20,
    backgroundColor: "#2B3A6C",
    position: "absolute",
    borderRadius: 50,
    left: 0,
    
  },
  phase: {
    fontSize: 24,
    marginBottom: 20,
    color: "#2B3A6C",
  },
  button: {
    backgroundColor: "#2B3A6C",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  description: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    width: 300,
    fontWeight: "bold"
  },
  buttonText1: {
    marginTop: 20
  },
  buttonText5: {
    color: "black",
    position: "absolute",
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
