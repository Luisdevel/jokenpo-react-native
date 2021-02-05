import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import Top from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    // gera número aleatório ( 0, 1, 2)
    const numAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    let resultado = '';

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou';
      }

      if (escolhaUsuario === 'papel') {
        resultado = 'Computador ganhou';
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado,
    });
  }

  render() {
    return (
      <View>
        <Top />

        <View style={styles.actionsPainel}>
          <View style={styles.changeBTN}>
            <Button
              title="pedra"
              onPress={() => {
                this.jokenpo('pedra');
              }}
            />
          </View>

          <View style={styles.changeBTN}>
            <Button
              title="papel"
              onPress={() => {
                this.jokenpo('papel');
              }}
            />
          </View>

          <View style={styles.changeBTN}>
            <Button
              title="tesoura"
              onPress={() => {
                this.jokenpo('tesoura');
              }}
            />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResult}>{this.state.resultado}</Text>

          <Icone change={this.state.escolhaComputador} play="Computador" />
          <Icone change={this.state.escolhaUsuario} play="Você" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  changeBTN: {
    width: 90,
  },
  actionsPainel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  palco: {
    alignItems: 'center',
    marginTop: 10,
  },
  txtResult: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
