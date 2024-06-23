import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';

const OnBoardingScreen = ({ navigation }) => {
  const [dotNumber, setDotNumber] = useState(0);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <StatusBar
        animated={true}
        backgroundColor={dotNumber==1?'#252525':'#284B63'}
      />
      <Swiper
        loop={false}
        autoplay
        autoplayTimeout={10}
        onIndexChanged={newIndex => setDotNumber(newIndex)}
        paginationStyle={{ bottom: 105 }}
        dotStyle={{ width: 7, height: 7, borderRadius: 3.5 }}
        dotColor="#D9D9D9"
        activeDotStyle={{ width: 23, height: 7, borderRadius: 10 }}
        activeDotColor={dotNumber % 2 ? 'white' : '#252525'}
        showsButtons={true}
        buttonWrapperStyle={{ justifyContent: 'center', alignItems: 'flex-end', paddingVertical: 20 }}
        nextButton={<Image style={[styles.oddScreen.nextButton, { width: 70, height: 70 }]} source={dotNumber == 1 ? require('../assets/icons/next_white.png') : require('../assets/icons/next_black.png')} />}
        prevButton={<Text></Text>}
      >
        <Screen1 send={() => { navigation.navigate('Login') }} />
        <Screen2 send={() => { navigation.navigate('Login') }} />
        <Screen3 send={() => { navigation.navigate('Login') }} />
      </Swiper>
    </View>
  );
};

const Screen1 = ({ send }) => {
  return (
    <View testID="Screen1" style={styles.oddScreen.screen}>
      <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 12, marginVertical: 20 }}>
        <Pressable onPress={() => { send() }}><Text style={{ fontFamily: 'Sora-Regular', color: '252525', fontSize: 18, color: '#252525' }}>Saltar</Text></Pressable>
      </View>
      <Image
        style={styles.oddScreen.ballblue}
        source={require('../assets/img/ballblue1.png')}
      />
      <Image
        style={styles.oddScreen.ballred}
        source={require('../assets/img/ballred1.png')}
      />
      <Image
        style={[styles.oddScreen.img, { marginVertical: 20 }]}
        source={require('../assets/img/onboarding1.png')}
      />
      <View>
        <Text style={styles.oddScreen.title}>Facilidade em qualquer lugar!</Text>
        <Text style={styles.oddScreen.text}>
          Através de um código QR, pode fazer exercicios do livro que está a ler.
        </Text>
      </View>
    </View>
  );
};

const Screen2 = ({ send }) => {
  return (
    <View testID="Screen2" style={[styles.oddScreen.screen, { backgroundColor: '#232323' }]}>
      <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 12, marginVertical: 20 }}>
        <Pressable onPress={() => { send() }}><Text style={{ fontFamily: 'Sora-Regular', color: '252525', fontSize: 18, color: 'white' }}>Saltar</Text></Pressable>
      </View>
      <Image
        style={{ width: 232.48, height: 197.67, position: 'absolute', top: 5, right: 5, zIndex: -1 }}
        source={require('../assets/img/ballred2.png')}
      />
      <Image
        style={{ width: 108, height: 116, position: 'absolute', bottom: 0, left: 0 }}
        source={require('../assets/img/ballblue2.png')}
      />
      <View style={{ height: 180, display: 'flex', justifyContent: 'flex-end', marginVertical: 30 }}>
        <Text style={{ color: 'white', fontFamily: 'Sora-SemiBold', fontSize: 26, textAlign: 'center' }}>Aprender é fácil!</Text>
        <Text style={[styles.oddScreen.text, { color: 'white', marginTop: 20 }]}>
          Através dos exercícios incluídos no livro, podes aprender mais facilmente os temas abordados.
        </Text>
      </View>
      <Image
        style={{ width: 300, height: 253.28 }}
        source={require('../assets/img/onboarding2.png')}
      />
    </View>
  );
};

const Screen3 = ({ send }) => {
  return (
    <View testID="Screen3" style={[styles.oddScreen.screen, { justifyContent: 'flex-end' }]}>
      <Image
        style={[styles.oddScreen.ballblue, { zIndex: 1, width: 116, height: 119, top: 0, left: 0 }]}
        source={require('../assets/img/ballblue3.png')}
      />
      <Image
        style={styles.oddScreen.ballred}
        source={require('../assets/img/ballred3.png')}
      />
      <View style={{ height: '85%', display: 'flex', justifyContent: 'center' }}>
        <Image
          style={[styles.oddScreen.img]}
          source={require('../assets/img/onboarding3.png')}
        />
        <Text style={styles.oddScreen.title}>Sê o melhor!</Text>
        <Text style={[styles.oddScreen.text, { marginTop: 3 }]}>
          Compete com outros jogadores do mesmo nível para um lugar no topo do ranking.
        </Text>
      </View>
      <Pressable onPress={() => send()}><Image style={[styles.oddScreen.nextButton, { width: 70, height: 70, marginBottom: 10 }]} source={require('../assets/icons/next_black.png')} /></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  oddScreen: {
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 10,
      backgroundColor: 'white',
      height: '100%'
    },
    ballblue: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 127,
      height: 107
    },
    ballred: {
      position: 'absolute',
      bottom: -50,
      right: 0,
      width: 196.64,
      height: 167.19
    },
    img: {
      width: 352,
      height: 363,
    },
    title: {
      color: '#3E4553',
      fontFamily: 'Sora-SemiBold',
      fontSize: 23,
      textAlign: 'center',
      marginTop: 10,
    },
    text: {
      fontFamily: 'Sora-Regular',
      color: '#353535',
      fontSize: 17,
      textAlign: 'center',
      marginTop: 10,
    },
    nextButton: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,

    },
    nextToLogin: {
      width: 180,
      height: 60,
      backgroundColor: '#252525',
      borderRadius: 100,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 13,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,

    },
    textNextToLogin: {
      fontFamily: 'Sora-SemiBold',
      color: 'white',
      fontSize: 20,
    }
  },
});
/*
var styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
};
*/

export default OnBoardingScreen;
