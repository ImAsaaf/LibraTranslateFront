import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type MeuIcone =
  | "information-circle-outline"
  | "hand-right-outline"
  | "hand-wave-outline"
  | "numeric"
  | "video";

interface Categoria {
  titulo: string;
  descricao: string;
  icone: MeuIcone;
  corFundo: string;
  tela?: string;
  linkExterno?: string;
}

const AprenderLibrasScreen = ({ navigation }) => {
  const categorias: Categoria[] = [
    {
      titulo: "Alfabeto Manual",
      descricao: "Aprenda as letras do alfabeto em Libras.",
      icone: "hand-right-outline", // aqui não vai mostrar o ícone, vai mostrar o texto "Aa"
      corFundo: "#FFFFFF",
      tela: "AlfabetoScreen",
    },
    {
      titulo: "Vídeo Explicativo",
      descricao: "Assista a um vídeo com explicações práticas de Libras.",
      icone: "video",
      corFundo: "#FFFFFF",
      linkExterno: "https://www.youtube.com/watch?v=EZxkymw426U&pp=ygUSYWxmYWJldG8gZW0gbGlicmFz",
    },
    {
      titulo: "Cumprimentos",
      descricao: "Aprenda saudações e despedidas em Libras.",
      icone: "hand-wave-outline",
      corFundo: "#FFFFFF",
      linkExterno: "https://youtu.be/R5kKGJvck0w",
    },
    {
      titulo: "Números em Libras",
      descricao: "Domine a contagem de 0 a 10 e além!",
      icone: "numeric",
      corFundo: "#FFFFFF",
      linkExterno: "https://www.youtube.com/watch?v=TFtme0cvf28&pp=ygURbnVtZXJvcyBlbSBsaWJyYXPSBwkJjQkBhyohjO8%3D",
    },
  ];

  const handlePress = (categoria: Categoria) => {
    if (categoria.tela) {
      navigation.navigate(categoria.tela);
    } else if (categoria.linkExterno) {
      Linking.openURL(categoria.linkExterno);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloPrincipal}>Aprenda Libras</Text>
      {categorias.map((categoria, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handlePress(categoria)}
        >
          <View style={styles.cardHeader}>
            {categoria.titulo === "Alfabeto Manual" ? (
              <Text style={styles.iconeTexto}>Aa</Text>
            ) : (
              <MaterialCommunityIcons
                name={categoria.icone as any}
                size={24}
                color="#0D47A1"
                style={styles.cardIcon}
              />
            )}
            <Text style={styles.cardTitulo}>{categoria.titulo}</Text>
          </View>
          <Text style={styles.cardDescricao}>{categoria.descricao}</Text>
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
  tituloPrincipal: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#0D47A1',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    marginHorizontal: 8,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  cardIcon: {
    marginRight: 12,
  },
  iconeTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginRight: 12,
    fontFamily: 'sans-serif',
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212121',
  },
  cardDescricao: {
    paddingTop: 12,
    color: '#333333',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default AprenderLibrasScreen;
