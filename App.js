import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {  } from "react-native-web";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import ButtonC from "./components/ButtonC";
import CardC from "./components/CardC";
import Play from "./components/Play";

export default function App() {
  const [number, setNumber] = useState("");
  const [start, setStart] = useState(false);

  const numberChangeHandler = (value) => {
    setNumber(value);
  };

  const resetPressHandler = () => {
    setNumber("");
  };

  const startChangeHandler = () => {
    return setStart((prevState) => !prevState);
  }

  let gameStarted = number != "" && start;
  let parentContainerStyle = gameStarted ? 'play' : 'container';

  return (
      <View style={styles[parentContainerStyle]}>
      {gameStarted ? (
        <Play number={number} />
      ) : (
        <Pressable style={styles.pressable}>
          <CardC>
            <TextInput accessibilityState={{selected: false}}
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
                onPress={startChangeHandler}
              />
            </View>
          </CardC>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#FFC300",
  },
  play: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "15%",
  },
  pressable: {
    flex: 1,  alignItems: "center", justifyContent: "center"
  }
});
