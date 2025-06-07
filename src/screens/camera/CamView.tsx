import { Camera, CameraType, FlashMode, CameraView } from "expo-camera";
import * as FileSystem from "expo-file-system";
import React, { useState, useEffect, useRef } from "react";
import { Linking, View, Dimensions, StyleSheet } from "react-native";
import {
  ActivityIndicator,
  Card,
  Text,
  Dialog,
  Portal,
  IconButton,
  Button,
} from "react-native-paper";
import uploadImage from "../../services/translate";
import { Ionicons } from '@expo/vector-icons';

interface ImageData {
  base64: string;
  height: number;
  uri: string;
  width: number;
}

const windowHeight = Dimensions.get("window").height;
const cardHeight = windowHeight * 0.6;
const primaryColor = '#6200EE';
const accentColor = '#03DAC6';
const darkGray = '#424242';

export default function CamView({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
  const cameraRef = useRef(null);
  const [cameraIsReady, setCameraIsReady] = useState<boolean>(false);
  const [facing, setFacing] = useState<CameraType>("front");
  const [flash, setFlash] = useState<FlashMode>("off");
  const [hasError, setHasError] = useState<boolean>(false);
  const [letter, setLetter] = useState<string>("");

  const showDialog = () => setVisibleDialog(!visibleDialog);
  const hideDialog = () => setVisibleDialog(!visibleDialog);

  const navigateToTranslateScreen = () =>
    navigation.navigate("drawerScreens", { screen: "translate" });

  const handleCogButton = () => {
    navigateToTranslateScreen();
    Linking.openSettings();
  };

  const requestCameraPermissions = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();
    const microphonePermission =
      await Camera.requestMicrophonePermissionsAsync();

    setHasPermission(
      cameraPermission.granted === true && microphonePermission.granted === true
    );
  };

  const onCameraReady = () => {
    setCameraIsReady(true);
  };

  const toggleCameraFacing = () =>
    setFacing((current) => (current === "back" ? "front" : "back"));

  const toggleCameraflash = () =>
    setFlash((current) => (current === "off" ? "on" : "off"));

  const sendImage = async (imageData: ImageData) => {
    try {
      const data = {
        filename: `image_${Date.now()}.${imageData.uri.slice(-3)}`,
        content: imageData.base64,
      };

      const response = await uploadImage(data);

      if (response) {
        const predictedLetter: string = response.predicted_letters[0];
        setLetter(predictedLetter);
      } else {
        setHasError(!hasError);
      }

      showDialog();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const takePicture = async () => {
    if (cameraIsReady && cameraRef.current) {
      try {
        const options = {
          quality: 0.5,
          base64: true,
          onPictureSaved: (data: ImageData) => {
            sendImage(data);
          },
        };

        await cameraRef.current.takePictureAsync(options);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    requestCameraPermissions();

    if (hasPermission === false) {
      showDialog();
    }
  }, [hasPermission]);

  if (hasPermission === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" color={primaryColor} />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionDeniedContainer}>
        <Portal>
          <Dialog visible={visibleDialog} onDismiss={hideDialog}>
            <Dialog.Title>Permissão de Câmera</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">
                Por favor, conceda permissão de acesso à câmera nas
                configurações do dispositivo.
              </Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Fechar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Button
          icon="cog-outline"
          mode="contained"
          onPress={handleCogButton}
          style={{ backgroundColor: primaryColor }}
        >
          Acessar configurações
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.instructionArea}>
        <View style={styles.instructionContainer}>
          <Ionicons name="hand-right-outline" size={24} color="#fff" style={{ marginRight: 5 }} />
          <Text style={styles.instructionText}>FAÇA O SINAL</Text>
        </View>
        <Card style={styles.cameraCard}>
          <View style={{ height: cardHeight }}>
            <CameraView
              ref={cameraRef}
              onCameraReady={onCameraReady}
              facing={facing}
              flash={flash}
              style={{ flex: 1 }}
            />
          </View>
        </Card>
        <View style={styles.controlsContainer}>
          <IconButton
            style={[styles.controlButton, { backgroundColor: darkGray }]}
            icon={flash === "off" ? "flashlight-off" : "flashlight"}
            iconColor="#fff"
            size={50}
            onPress={toggleCameraflash}
            disabled={!cameraIsReady || visibleDialog}
          />
          <IconButton
            style={[styles.controlButton, { backgroundColor: darkGray }]}
            icon="camera-iris"
            iconColor="#fff"
            size={60}
            onPress={async () => await takePicture()}
            disabled={!cameraIsReady || visibleDialog}
          />
          <IconButton
            style={[styles.controlButton, { backgroundColor: darkGray }]}
            icon="camera-flip"
            iconColor="#fff"
            size={50}
            onPress={toggleCameraFacing}
            disabled={!cameraIsReady || visibleDialog}
          />
        </View>
      </View>
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={hideDialog}>
          <Dialog.Title>Tradução do Sinal</Dialog.Title>
          <Dialog.Content>
            {hasError ? (
              <Text variant="bodyMedium" style={{ color: "red" }}>
                Ocorreu um erro. Tente novamente.
              </Text>
            ) : (
              <>
                <Text variant="bodyMedium">
                  Confira a tradução da letra correspondente ao sinal em LIBRAS
                  que você fez:
                </Text>
                <Text style={styles.predictedLetter}>{letter}</Text>
              </>
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  permissionDeniedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  instructionArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginBottom: 15,
  },
  instructionText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: 'sans-serif',
  },
  cameraCard: {
    height: cardHeight,
    width: '95%',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  controlButton: {
    borderRadius: 30,
    elevation: 3,
  },
  predictedLetter: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: primaryColor,
    marginTop: 10,
  },
});