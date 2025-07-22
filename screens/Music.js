import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function HomeScreen() {
 return (
   <SafeAreaView style={styles.container}>

    <View style={styles.ground}>
        <Text style={styles.menuText}>MUSIC</Text>

        <Text style={styles.menuTextUnder}>Help for focusing, relaxing or sleeping.</Text>

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
 ground:{
    backgroundColor: "#D5CEEF",
    width: '95%',
    height: '85%',
    borderRadius: 15,
    bottom: '5%',
 },
   menuText: {
    color: '#441C63',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    marginTop: '4%',
    marginRight: '45%',
    marginBottom: 20,
  },
   menuTextUnder: {
    color: '#441C63',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
    bottom: 20,
    marginRight: '5%'
  },
}
);