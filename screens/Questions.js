import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
  useNavigation
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <ScrollView>
       
          <Text style={styles.mainText}>Questions For Self-Discovery</Text>

          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}>
             </TouchableOpacity>
          
            <Text style={styles.buttonText}>What am I feeling right now and why?</Text>

            <TouchableOpacity
            style={styles.buttonView}
            onPress={() => {}}> 

            </TouchableOpacity>
            
            
            
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#6F275F",
    height: "100%",
    justifyContent: "center",
  },
  container1: {
    backgroundColor: "#F8D6EE",
    width: "90%",
    height: "85%",
    borderRadius: 20,
    marginTop: "10%",
    bottom: "2%",
  },
  mainText: {
    fontWeight: "bold",
    margin: 35,
    fontSize: 35,
    alignSelf: "center",
    left: 25,
  },
  buttonView: {
    backgroundColor: "#6F275F",
    width: "90%",
    height: "40 %",
    marginLeft: "5%",
    borderRadius: 20,
  },
  buttonText: {
    bottom: "0%",
    textAlign: "center",
    width: "90%",   
    height: "25%",
    color: "#fff",
    fontSize: 20,
    margin: "5%",
  },
});
