import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const NumerosScreen = () => {
    const numerosEmLibras = [
        { numero: '0', imageUrl: '' },
        { numero: '1', imageUrl: '' },
        { numero: '2', imageUrl: '' },
        { numero: '3', imageUrl: '' },
        { numero: '4', imageUrl: '' },
        { numero: '5', imageUrl: '' },
        { numero: '6', imageUrl: '' },
        { numero: '7', imageUrl: '' },
        { numero: '8', imageUrl: '' },
        { numero: '9', imageUrl: '' },
        { numero: '10', imageUrl: '' },
        { numero: '+10 (exemplo)', imageUrl: '' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Números em Libras</Text>
            <View style={styles.numerosContainer}>
                {numerosEmLibras.map((numeroItem, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => {
                            // Adicionar ação ao tocar, se necessário
                        }}
                    >
                        <Text style={styles.textoNumero}>{numeroItem.numero}</Text>
                        {numeroItem.imageUrl && (
                            <Image
                                source={{ uri: numeroItem.imageUrl }}
                                style={styles.imagemNumero}
                                resizeMode="contain"
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F1F8E9', // Verde muito claro
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#388E3C', // Verde escuro
        textAlign: 'center',
    },
    numerosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Centralizar os cards
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12, // Mais arredondado
        padding: 16,
        marginBottom: 16,
        marginHorizontal: 8, // Espaçamento entre os cards
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 100, // Largura fixa para os cards
        height: 100, // Altura fixa para os cards
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoNumero: {
        fontSize: 28, // Tamanho menor
        fontWeight: '600', // Um pouco menos bold
        color: '#1B5E20', // Verde ainda mais escuro
    },
    imagemNumero: {
        width: 60, // Menor
        height: 60, // Menor
        marginTop: 8,
    },
});

export default NumerosScreen;