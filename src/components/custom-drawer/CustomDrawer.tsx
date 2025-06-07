import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { useAuth } from "../../contexts/AuthContext";

export default function CustomDrawer(props: any) {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.header}>
          <Avatar.Icon icon="account" size={80} color="#ffffff" style={styles.avatar} />
          <Text style={styles.name}>{user?.name || "Usuário"}</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <Text style={styles.version}>Versão 1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#f0e6d6",
    paddingVertical: 20,
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#d48405",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  footer: {
    padding: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  version: {
    fontSize: 12,
    color: "#888",
  },
});
