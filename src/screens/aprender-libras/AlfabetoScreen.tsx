import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const imagens = {
  A: require('../../assets/images/img/A.jpeg'),
  B: require('../../assets/images/img/B.jpeg'),
  C: require('../../assets/images/img/C.jpeg'),
  D: require('../../assets/images/img/D.jpeg'),
  E: require('../../assets/images/img/E.jpeg'),
  F: require('../../assets/images/img/F.jpeg'),
  G: require('../../assets/images/img/G.jpeg'),
  H: require('../../assets/images/img/H.jpeg'),
  I: require('../../assets/images/img/I.jpeg'),
  J: require('../../assets/images/img/J.jpeg'),
  K: require('../../assets/images/img/K.jpeg'),
  L: require('../../assets/images/img/L.jpeg'),
  M: require('../../assets/images/img/M.jpeg'),
  N: require('../../assets/images/img/N.jpeg'),
  O: require('../../assets/images/img/O.jpeg'),
  P: require('../../assets/images/img/P.jpeg'),
  Q: require('../../assets/images/img/Q.jpeg'),
  R: require('../../assets/images/img/R.jpeg'),
  S: require('../../assets/images/img/S.jpeg'),
  T: require('../../assets/images/img/T.jpeg'),
  U: require('../../assets/images/img/U.jpeg'),
  V: require('../../assets/images/img/V.jpeg'),
  W: require('../../assets/images/img/W.jpeg'),
  X: require('../../assets/images/img/X.jpeg'),
  Y: require('../../assets/images/img/Y.jpeg'),
  Z: require('../../assets/images/img/Z.jpeg'),
};

const alfabeto = [
  { letra: 'A', descricao: 'A mão fechada com o polegar ao lado do rosto.' },
  { letra: 'B', descricao: 'A mão fechada com os dedos unidos.' },
  { letra: 'C', descricao: 'A mão em forma de "C".' },
  { letra: 'D', descricao: 'A mão fechada com o indicador para cima.' },
  { letra: 'E', descricao: 'Os dedos curvados e unidos, tocando a ponta dos dedos.' },
  { letra: 'F', descricao: 'O indicador e o polegar se tocam, os outros dedos estendidos.' },
  { letra: 'G', descricao: 'O indicador e o polegar estendidos horizontalmente.' },
  { letra: 'H', descricao: 'O indicador e o médio estendidos horizontalmente.' },
  { letra: 'I', descricao: 'Apenas o dedo mínimo estendido.' },
  { letra: 'J', descricao: 'O mínimo estendido, movendo-se em forma de "J".' },
  { letra: 'K', descricao: 'O indicador e o médio estendidos e o polegar entre eles.' },
  { letra: 'L', descricao: 'O indicador e o polegar estendidos em forma de "L".' },
  { letra: 'M', descricao: 'Três dedos (polegar, indicador e médio) entrelaçados na palma.' },
  { letra: 'N', descricao: 'Dois dedos (indicador e médio) entrelaçados na palma.' },
  { letra: 'O', descricao: 'A ponta dos dedos se tocam formando um círculo.' },
  { letra: 'P', descricao: 'O indicador e o médio flexionados e o polegar estendido.' },
  { letra: 'Q', descricao: 'O indicador e o polegar flexionados para baixo.' },
  { letra: 'R', descricao: 'O indicador e o médio entrelaçados.' },
  { letra: 'S', descricao: 'A mão fechada com o polegar sobre os dedos.' },
  { letra: 'T', descricao: 'O polegar entre o indicador e o médio.' },
  { letra: 'U', descricao: 'Os dedos indicador e médio estendidos e unidos.' },
  { letra: 'V', descricao: 'Os dedos indicador e médio estendidos e separados.' },
  { letra: 'W', descricao: 'Os dedos indicador, médio e anelar estendidos e separados.' },
  { letra: 'X', descricao: 'O indicador curvado.' },
  { letra: 'Y', descricao: 'O polegar e o mínimo estendidos.' },
  { letra: 'Z', descricao: 'O indicador estendido, movendo-se em forma de "Z".' },
];

const AlfabetoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Alfabeto Manual</Text>
      {alfabeto.map((letra, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => {
            // Ação ao tocar (opcional)
          }}
        >
          <View style={styles.cardContent}>
            <Text style={styles.letra}>{letra.letra}</Text>
            <Image
              source={imagens[letra.letra]}
              style={styles.imagemLetra}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.descricao}>{letra.descricao}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0D47A1',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  letra: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A148C',
    marginRight: 16,
  },
  descricao: {
    fontSize: 16,
    color: '#333333',
  },
  imagemLetra: {
    width: 80,
    height: 80,
  },
});

export default AlfabetoScreen;
