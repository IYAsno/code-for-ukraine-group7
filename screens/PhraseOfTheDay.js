import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth=Dimensions.get('window').width;

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.photoCat} source={require('./assets/CatChill3.jpg')} />
        <View style={styles.ground}>
          <View style={styles.day}>
            <Text style={styles.textDay}>
              TODAY
            </Text>
            
            <View style={styles.like}>
              <Image style={styles.photoLike} source={require('./assets/Heart1111.png')} />
            </View>
          </View>

          <Text style={styles.textWishes}>
            WISHES FOR THE DAY
            </Text>

            <Text style={styles.textUnder}>
            Today is definitely your day - just believe and move forward
            </Text>
            

        <View style={styles.photoLapa2}>
          <Image style={styles.photoLapa2} source={require('./assets/Lapa2.png')} />          
        </View>



        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#6F275F',
    flex: 1,
    justifyContent: 'center',
  },
  ground: {
    backgroundColor: "#F8D6EE",
    width: '95%',
    height: '65%',
    borderRadius: 15,
    zIndex: 2,
    marginTop: "-40%",
    bottom: '2%',
  },
  photoCat: {
    borderRadius: 15,
    flex:1,
    aspectRatio: 1,
    margin: '7.5%',
    bottom: '-1%',
  },
  day: {
    backgroundColor: "#6F275F",
    width: '30%',
    height: '8%',
    borderRadius: 15,
    bottom: '4%',
    marginLeft: '4%',
  },
  textDay: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: 25,
    marginLeft: 15,
  },
  textWishes: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 45,
    marginLeft: 15,
  },
  textUnder: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 20,
    marginLeft: 16,
  },
  like: {
    backgroundColor: "#6F275F",
    flexDirection: 'space-betwen',
    width: '38%',
    height: '100%',
    borderRadius: 30,
    bottom: '100%',
    marginLeft: '265%',    
  },
  photoLike: {
    borderRadius: 15,
    flex:1,
    aspectRatio: 1,
    margin: '3.5%',
    bottom: '-1%',
    marginLeft: '6%',
  },
  photoLapa2: {
    borderRadius: 15,
    flex:1,
    aspectRatio: 1,
    margin: '3.5%',
    width: 5,
    bottom: '-12%',
    marginLeft: '30%',
  },
}
);