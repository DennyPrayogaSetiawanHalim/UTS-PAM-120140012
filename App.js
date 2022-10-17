import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Speech from 'expo-speech';
import * as React from 'react';

export default function App() {
  let kalimat;
  let angka = Math.random() * 10;
  function generateKalimat(){
    switch(Math.round(angka)){
      case 0:
        kalimat = "Spread love everywhere you go. Let no one ever come to you without leaving happier. Mother Teresa";
        break;
      case 1:
        kalimat = "Your worth consists in what you are and not in what you have. Thomas Edison";
        break;
      case 2:
        kalimat = "We must not allow other people’s limited perceptions to define us. Virginia Satir";
        break;
      case 3:
        kalimat = "Tell me and I forget. Teach me and I remember. Involve me and I learn. Benjamin Franklin";
        break;
      case 4:
        kalimat = "It is during our darkest moments that we must focus to see the light. Aristotle";
        break;
      case 5:
        kalimat = "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart. Helen Keller";
        break;
      case 6:
        kalimat = "The only true wisdom is knowing that you know nothing. Socrates";
        break;
      case 7:
        kalimat = "Be the change that you wish to see in the world. Mahatma Gandhi";
        break;
      case 8:
        kalimat = "You only live once, but if you do it right, once is enough. Mae West";
        break;
      case 9:
        kalimat = "If you want to live a happy life, tie it to a goal, not to people or things. Albert Einstein";
        break;
    }
  }
  generateKalimat();
  var tts = () => {
    Speech.speak(kalimat)
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={{fontSize:20}}>{kalimat}</Text>
      <Button title="Text To Speech" onPress={tts}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
