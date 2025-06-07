import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const CumprimentosScreen = () => {
    const cumprimentos = [
        { portugues: 'Olá', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/9495565740051120720' },
        { portugues: 'Bom dia', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/8172081487635852235' },
        { portugues: 'Boa tarde', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/9790990762465195759' },
        { portugues: 'Boa noite', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/15841696164765339874' },
        { portugues: 'Tudo bem?', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/7576940547191640456' },
        { portugues: 'Sim', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/15485701659385950720' },
        { portugues: 'Não', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/12271471265523101707' },
        { portugues: 'Tchau', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/1143701065280041219' },
        { portugues: 'Até logo', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/9263376091755774174' },
        { portugues: 'Obrigado(a)', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/4896844990063420536' },
        { portugues: 'De nada', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/10519315173099470305' },
        { portugues: 'Por favor', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/13814979195299306141' },
        { portugues: 'Com licença', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/18416893432531559221' },
        { portugues: 'Até amanhã', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/7576940547191640220' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Cumprimentos em Libras</Text>
            {cumprimentos.map((cumprimento, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.card}
                    onPress={() => {
                        // Adicionar ação ao tocar, se necessário
                    }}
                >
                    <View style={styles.cardContent}>
                        <Text style={styles.textoPortugues}>{cumprimento.portugues}</Text>
                        {cumprimento.imageUrl && (
                            <Image
                                source={{ uri: cumprimento.imageUrl }}
                                style={styles.imagemCumprimento}
                                resizeMode="contain"
                            />
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E0F7FA', // Azul claro
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#00838F', // Azul mais escuro
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
        justifyContent: 'space-between',
    },
    textoPortugues: {
        fontSize: 20,
        color: '#333333',
        marginRight: 10,
    },
     imagemCumprimento: {
        width: 80,
        height: 80,
    },
});

export default CumprimentosScreen;