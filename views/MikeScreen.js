import { View, Text, Pressable } from "react-native";

export default function MikeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.push("Mike")}>
        <Text>Mike</Text>
      </Pressable>
    </View>
  );
}
