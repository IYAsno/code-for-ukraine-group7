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
import BreathingexScreen from "./screens/Breathingex";
import MusicPlayScreen from "./screens/MusicPlay";
import ChoseScreenScreen from "./screens/ChoseScreen";
import MenuDogScreen from "./screens/MenuDog";
import MusicDogScreen from "./screens/MusicDog";
import MusicDogPlayScreen from "./screens/MusicDogPlay";
import BreathDogScreen from "./screens/BreathDog";
import BreathingexDogScreen from "./screens/BreathingexDog.js";
import QuestionsDogScreen from "./screens/QuestionsDog.js";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Motivation" component={PhraseOfTheDayScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Music" component={MusicScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notes" component={NotesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Breath" component={BreathScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Questions" component={QuestionsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="WriteAnswers" component={WriteAnswersScreen} options={{ headerShown: false }} />
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
       <Stack.Screen name="Breathingex" component={BreathingexScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="MusicPlay" component={MusicPlayScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="ChoseScreen" component={ChoseScreenScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="MenuDog" component={MenuDogScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="MusicDog" component={MusicDogScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="MusicDogPlay" component={MusicDogPlayScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="BreathDog" component={BreathDogScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="BreathingexDog" component={BreathingexDogScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="QuestionsDog" component={QuestionsDogScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="MusicPlay" component={MusicPlayScreen} options={{ headerShown: false }}/>
       <Stack.Screen name="WriteAnswers" component={WriteAnswersScreen} options={{ headerShown: false }}/>
     </Stack.Navigator>
   </NavigationContainer>
 );
}
