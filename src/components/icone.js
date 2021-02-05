/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const imgPedra = require('../../images/pedra.png');
const imgPapel = require('../../images/papel.png');
const imgTesoura = require('../../images/tesoura.png');

class Icone extends Component {
  render() {
    // this.props.escolha
    // this.props.jogador

    if (this.props.escolha === 'pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );
    }
    if (this.props.escolha === 'papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      );
    }
    if (this.props.escolha === 'tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      );
    }

    return false;
  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtJogador: {
    fontSize: 18,
  },
});

export default Icone;
