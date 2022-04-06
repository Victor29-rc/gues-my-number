import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import ButtonC from "./components/ButtonC";
import CardC from "./components/CardC";
import Play from "./components/Play";

export default function App() {
  const [number, setNumber] = useState("");

  const numberChangeHandler = (value) => {
    setNumber(value);
  };

  const resetPressHandler = () => {
    setNumber("");
  };

  return (
    <View style={styles.play}>
      {number != "" ? (
        <Play number={number} />
      ) : (
        <CardC>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberChangeHandler}
            value={number}
          />
          <View style={styles.buttonContainer}>
            <ButtonC
              title={"reset"}
              objectStyle={{ width: "45%", color: "#660033" }}
              onPress={resetPressHandler}
            />
            <ButtonC
              title={"start"}
              objectStyle={{ width: "45%", color: "#660033" }}
            />
          </View>
        </CardC>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: "#330033",
    marginBottom: 10,
    width: "15%",
    fontSize: 22,
    textAlign: "center",
  },
  play: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "15%",
  },
});
