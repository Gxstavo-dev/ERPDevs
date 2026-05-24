import { View } from "react-native";
import { indexStyles } from "../src/styles/index";

export default function Home() {
  return (
    <View style={indexStyles.contenedor}>
      <View style={indexStyles.nav}></View>
      <View style={indexStyles.main}></View>
    </View>
  );
}
