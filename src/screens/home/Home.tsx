import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { Button, Card, Dialog, Portal } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'; // Importe Ionicons

const Home = ({ navigation }) => { // Certifique-se de que 'navigation' está aqui
  const [visible, setVisible] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogDescription, setDialogDescription] = useState('');

  const informationCards = [
    {
      id: 1,
      title: 'O que são Linguagens de Sinais?',
      image:
        'https://img.freepik.com/vetores-premium/conjunto-de-diferentes-gestos-com-as-maos-ilustracoes-da-palma-da-mao-humana-mostrando-numeros-gesticulando-sinais_74855-20714.jpg?w=740',
      description:
        'Linguagens de sinais são sistemas de comunicação que utilizam gestos, expressões faciais e movimentos das mãos e do corpo para transmitir significados, sendo utilizadas principalmente por comunidades surdas.',
    },
    {
      id: 2,
      title: 'História da LIBRAS',
      image:
        'https://www.handtalk.me/br/wp-content/uploads/sites/8/2017/04/122-capa-blogpost-historia-libras.png',
      description:
        'A LIBRAS tem suas origens no século XIX, com influências da língua de sinais francesa. Foi reconhecida oficialmente no Brasil em 2002 pela Lei nº 10.436.',
    },
    {
      id: 3,
      title: 'Importância das Linguagens de Sinais',
      image:
        'https://academiadelibras.com/wp-content/uploads/2019/12/Dificuldades-dos-surdos-na-sociedade_1-1.jpg',
      description:
        'As linguagens de sinais permitem que pessoas surdas se comuniquem efetivamente, promovendo inclusão social, acesso à educação e participação em diversas atividades sociais.',
    },
    {
      id: 5,
      title: 'Variações Regionais da LIBRAS',
      image:
        'https://static.todamateria.com.br/upload/ma/pa/mapadasregioesdobrasil2-cke.jpg',
      description:
        'Assim como as línguas faladas, a LIBRAS também possui variações regionais, com diferenças na forma de sinalizar certos conceitos e palavras.',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
      }}
    >
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Botão/Link para Aprender Libras (Adicionado AQUI) */}
        <TouchableOpacity
          style={styles.linkAprender}
          onPress={() => navigation.navigate('AprenderLibras')}
        >
          <Ionicons name="book-outline" size={24} color="#0D47A1" style={styles.iconeAprender} />
          <Text style={styles.textoAprender}>Aprender Libras</Text>
        </TouchableOpacity>

        {/* Seus cards existentes */}
        {informationCards.map((item, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <Card
              style={{
                backgroundColor: '#ffffff',
                elevation: 4,
                borderRadius: 16,
                width: '95%',
                marginBottom: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            >
              <Card.Cover
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <Card.Title
                title={item.title}
                titleStyle={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#333',
                }}
                titleNumberOfLines={2}
              />
              <Card.Content>
                <Text style={{ fontSize: 15, color: '#666', marginBottom: 8 }} numberOfLines={3}>
                  {item.description}
                </Text>
                <Button
                  mode="text"
                  onPress={() => {
                    setDialogTitle(item.title);
                    setDialogDescription(item.description);
                    setVisible(true);
                  }}
                >
                  Ver mais
                </Button>
              </Card.Content>
            </Card>
          </View>
        ))}
      </ScrollView>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)} style={styles.dialogContainer}>
          <Dialog.Title style={styles.dialogTitle}>{dialogTitle}</Dialog.Title>
          <Dialog.Content>
            <ScrollView>
              <Text style={styles.dialogText}>{dialogDescription}</Text>
            </ScrollView>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    textAlign: 'center',
  },
  dialogText: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  linkAprender: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  iconeAprender: {
    marginRight: 10,
  },
  textoAprender: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
});

export default Home;  