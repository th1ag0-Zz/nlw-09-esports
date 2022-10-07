import { Text, View, StatusBar } from "react-native";
import { Background } from "./src/components/Background";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Background>
        <View>
          <Text>Open up App.tsx to start working on your app! aaaa</Text>
        </View>
      </Background>
    </>
  );
}
