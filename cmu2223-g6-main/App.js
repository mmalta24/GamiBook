import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Screens
import OnBoardingScreen from './screens/OnBoardingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import LibraryScreen from './screens/LibraryScreen'
import RankingScreen from './screens/RankingScreen'
import ProfileScreen from './screens/ProfileScreen'
import SpinnerScreen from './screens/SpinnerScreen'
import Notifications from './screens/NotificationsScreen';
import ChangePwScreen from './screens/ChangePwScreen';
import ChangeAvatarScreen from './screens/ChangeAvatarScreen';
import Achievements from './screens/AchievementsScreen';
import AddBookScreen from './screens/AddBookScreen';
import BookScreen from './screens/BookScreen';
import ExerciseScreen from './screens/ExerciseScreen';

//Icons
import HomeIcon from './assets/icons/home.svg';
import HomeIconOpacity from './assets/icons/homeOpacity.svg'
import LibraryIcon from './assets/icons/library.svg'
import LibraryIconOpacity from './assets/icons/libraryOpacity.svg'
import RankingIcon from './assets/icons/ranking.svg'
import RankingIconOpacity from './assets/icons/rankingOpacity.svg'
import ProfileIcon from './assets/icons/profile.svg'
import ProfileIconOpacity from './assets/icons/profileOpacity.svg'


//Tab
const Tab = createBottomTabNavigator();

//Stack
const Stack = createNativeStackNavigator();


//Nav
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#2C2C2C', height: 64, paddingVertical: 3, paddingTop: 10 }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <HomeIcon width={23} height={25} /> : <HomeIconOpacity width={23} height={25} />
          ),

          tabBarLabel: ({ focused, color, size }) => (
            <React.Fragment>
              <Text style={{ color: focused ? '#FFFFFF' : '#A0A0A0', fontFamily: 'Sora-Regular', fontSize: 13, marginBottom: 4 }}>Home</Text>
              {focused && <View style={{ width: 40, height: 4, backgroundColor: 'white', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}></View>}
            </React.Fragment>

          ),
        }} />
      <Tab.Screen
        name="Biblioteca"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <LibraryIcon width={22} height={28} /> : <LibraryIconOpacity width={22} height={28} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <React.Fragment>
              <Text style={{ color: focused ? '#FFFFFF' : '#A0A0A0', fontFamily: 'Sora-Regular', fontSize: 13, marginBottom: 4 }}>Biblioteca</Text>
              {focused && <View style={{ width: 65, height: 4, backgroundColor: 'white', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}></View>}
            </React.Fragment>
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <RankingIcon width={27.78} height={25} /> : <RankingIconOpacity width={27.78} height={25} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <React.Fragment>
              <Text style={{ color: focused ? '#FFFFFF' : '#A0A0A0', fontFamily: 'Sora-Regular', fontSize: 13, marginBottom: 4 }}>Ranking</Text>
              {focused && <View style={{ width: 55, height: 4, backgroundColor: 'white', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}></View>}
            </React.Fragment>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            focused ? <ProfileIcon width={25.76} height={25} /> : <ProfileIconOpacity width={25.76} height={25} />
          ),
          tabBarLabel: ({ focused, color, size }) => (
            <React.Fragment>
              <Text style={{ color: focused ? '#FFFFFF' : '#A0A0A0', fontFamily: 'Sora-Regular', fontSize: 13, marginBottom: 4 }}>Perfil</Text>
              {focused && <View style={{ width: 35, height: 4, backgroundColor: 'white', borderTopLeftRadius: 3, borderTopRightRadius: 3 }}></View>}
            </React.Fragment>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false)
  const [userToken, setUserToken] = useState("")

  //AsyncStorage
  const checkForFirstTimeLoaded = () => {
    AsyncStorage.getItem('@didOnboarding').then(value => {
      if (value == null) setIsFirstTimeLoad(true);
      else {
        AsyncStorage.getItem('@accessToken').then(user => {
          if (user !== null) setUserToken(user);
        })
      }
    });
    setLoading(false);
  }

  useEffect(() => checkForFirstTimeLoaded(), []);

  if (loading) return <View></View>

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {isFirstTimeLoad && <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />}
        {!userToken && <Stack.Screen name="Login" component={LoginScreen} />}
        {!userToken && <Stack.Screen name="Register" component={RegisterScreen} />}
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ChangePw" component={ChangePwScreen} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  /*if (isFirstTimeLoad) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={Tabs} />
          <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ChangePw" component={ChangePwScreen} />
          <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
          <Stack.Screen name="Achievements" component={Achievements} />
          <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (!isFirstTimeLoad && !userToken) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={Tabs} />
          <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="ChangePw" component={ChangePwScreen} />
          <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
          <Stack.Screen name="Achievements" component={Achievements} />
          <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
          <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ChangePw" component={ChangePwScreen} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
};
/*
const [didOnboarding, setDidOnboarding] = useState(false);

const checkStorage = async () => {
  const result = await AsyncStorage.getItem('@didOnboarding');
  return true;
  /*
  if (result !== null) {
    setDidOnboarding(true);
  }
}
 
useEffect(() => {
  const timerId = setInterval(() => { }, 100);
  checkStorage();
  return () => clearInterval(timerId);
}, []);
 
if (didOnboarding) {
  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ChangePw" component={ChangePwScreen} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        );
      }
      
      return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="SpinnerScreen" component={SpinnerScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ChangePw" component={ChangePwScreen} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
        <Stack.Screen name="Achievements" component={Achievements} />
        <Stack.Screen name="AddBookScreen" component={AddBookScreen} />
        <Stack.Screen name="BookScreen" component={BookScreen} />
        <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        );*/

export default App;
