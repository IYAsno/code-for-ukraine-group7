import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from "./screens/ProfileScreen.js";
//import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/Home.js";
import MenuScreen from "./screens/Menu.js";
import PhraseOfTheDayScreen from "./screens/PhraseOfTheDay";
import MusicScreen from "./screens/Music.js";
import InputScreen from "./screens/Input";
import BreathScreen from "./screens/Breath";
import QuestionsScreen from "./screens/Questions";
import NotesScreen from "./screens/Notes";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu " component={MenuScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Motivation" component={PhraseOfTheDayScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}



export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Input" >
       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Motivation" component={PhraseOfTheDayScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Menu" component={MainTabs} options={{ headerShown: false }}/>
       <Stack.Screen name="Music" component={MusicScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Input" component={InputScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Breath" component={BreathScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="Notes" component={NotesScreen} options={{ headerShown: false }}/>
     </Stack.Navigator>
   </NavigationContainer>
 );
}
