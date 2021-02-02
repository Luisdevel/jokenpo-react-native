import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

const randomPhrases = () => {
  let randomNumbers = Math.random();
  randomNumbers = Math.floor(randomNumbers * 5);

  // Phrases
  const prhases = [
    'Enfrente os problemas e leve a melhor! Levanta, sacode a poeira, dá a volta por cima.',
    'Dê mais atenção ao que você tem de bom na sua vida.',
    'Para chegar ao topo, o que importa é começar!',
    'De nada adianta ter sonhos, se você não se empenhar em correr atrás.',
    'Você pode, corra atrás!',
  ];

  const changePrhase = prhases[randomNumbers];

  Alert.alert(null, changePrhase);
};

const App = () => (
  <View style={styles.container}>
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <Image source={require('./images/logo.png')} />

    <TouchableOpacity style={styles.btn} onPress={randomPhrases}>
      <Text style={styles.textStyle}>Nova frase</Text>
    </TouchableOpacity>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
