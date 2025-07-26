import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Alert, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth=Dimensions.get('window').width;

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

        </View>

<View style={styles.TabNavigationBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Menu')}>
          <Image style={styles.tabIcon} source={require('./assets/MenuButtonImage.png')} />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Notes')}>
          <Image style={styles.tabIconStar} source={require('./assets/StarPlusImage.png')} />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MotivationDog')}>
          <Image style={styles.tabIconHeart} source={require('./assets/HeartFoto.png')} />
        </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#2B3A6C',
    flex: 1,
    justifyContent: 'center',
  },
  ground: {
    backgroundColor: "#C2CCE4",
    width: '95%',
    height: '65%',
    borderRadius: 15,
    zIndex: 2,
    marginTop: "-40%",
    bottom: '2%',
  },
  photoDog: {
    borderRadius: 15,
    width: '9%',
    aspectRatio: 1,
    marginTop: '-80%',
    zIndex: 0,
},
  day: {
    backgroundColor: "#2B3A6C",
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
    backgroundColor: "#2B3A6C",
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
}
);