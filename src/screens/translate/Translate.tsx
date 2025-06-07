import React, { useState, useEffect, useRef } from "react";
import {
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Animated,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Card, IconButton, List, Text } from "react-native-paper";
import { useSettings } from "../../contexts/SettingsContext";
import { Ionicons } from "@expo/vector-icons";

interface DataItem {
    id: number;
    icon: string;
    text: string;
}

const Translate = ({ navigation }) => {
    const { isStatusBarHidden, toggleStatusBar } = useSettings();
    const [data, setData] = useState<DataItem[]>([
        {
            id: 1,
            icon: "camera-outline",
            text: "Toque no botão da câmera abaixo para iniciar a tradução.",
        },
        {
            id: 2,
            icon: "hand-left-outline",
            text: "Aponte a câmera para os sinais que deseja traduzir.",
        },
        {
            id: 3,
            icon: "eye-outline",
            text: "A tradução aparecerá na tela em tempo real.",
        },
        {
            id: 4,
            icon: "alert-circle-outline", 
            text: "Aviso: Este aplicativo realiza a tradução apenas do alfabeto manual (letras).",
        },
    ]);
    const isFocused = useIsFocused();
    const [cameraButtonScale] = useState(new Animated.Value(1));

    const handleCameraButtonPress = () => {
        Animated.sequence([
            Animated.timing(cameraButtonScale, {
                toValue: 0.9,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(cameraButtonScale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start(handleIconButtonCamera);
    };

    const handleIconButtonCamera = () => {
        navigation.navigate("cameraScreens", { screen: "camera" });
    };

    useEffect(() => {
        if (isFocused && !!isStatusBarHidden) {
            toggleStatusBar();
        }
    }, [isFocused, isStatusBarHidden]);

    return (
        <View style={styles.container}>
            <ScrollView
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, padding: 20 }}
            >
                <Card style={styles.instructionsCard}>
                    <Card.Title
                        title="Como Usar a Tradução"
                        titleStyle={styles.instructionsTitle}
                    />
                    <Card.Content>
                        {data.map((item) => (
                            <List.Item
                                key={item.id}
                                titleNumberOfLines={3}
                                title={item.text}
                                left={(props) => (
                                    <List.Icon {...props} icon={item.icon} color="#007AFF" />
                                )}
                                style={styles.listItem} // Estilo para centralizar os itens
                                titleStyle={styles.listItemTitle} // Estilo para centralizar o texto
                            />
                        ))}
                    </Card.Content>
                </Card>
            </ScrollView>

            <TouchableOpacity
                style={styles.cameraButton}
                onPress={handleCameraButtonPress}
            >
                <Animated.View style={{ transform: [{ scale: cameraButtonScale }] }}>
                    <Ionicons name="camera" size={40} color="white" />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5DC",
    },
    instructionsCard: {
        backgroundColor: "#FFFFFF",
        elevation: 4,
        borderRadius: 12,
        marginBottom: 20,
    },
    instructionsTitle: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "#007AFF",
    },
    listItem: {
        alignItems: 'center', // Centraliza os itens da lista
    },
    listItemTitle: {
        textAlign: 'center', // Centraliza o texto dentro do item
    },
    cameraButton: {
        backgroundColor: "#007AFF",
        borderRadius: 50,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 20,
    },
});

export default Translate;