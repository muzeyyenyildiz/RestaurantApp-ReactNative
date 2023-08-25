import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({term, onTermChange,onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign
        style={styles.iconStyle}
        name="search1"
        size={25}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara..."
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: { marginHorizontal: 10 },
  inputStyle: { flex: 1, fontSize: 18 },
});
