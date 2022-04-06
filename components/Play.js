import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardC from "./CardC";
import ButtonC from "./ButtonC";

const Play = (props) => {

  const [randNum, setRandNum] = useState(0);

  const generateRandomHandler = () => {

    const max = randNum > props.number ? randNum : props.number;
    const min = randNum < props.number ? randNum : props.number;

    setRandNum(
      Math.floor(Math.random() * max)
    );
  }

  return (
    <CardC width="80%" height="35%" y="flex-end">
      <CardC bgColor="#581845">
        <Text style={styles.text}>{props.number}</Text>
      </CardC>
      <View style={styles.inputContainer}>
       {/*  <ButtonC title="+" objectStyle={{ width: "45%", color: "#900C3F" }} />
        <ButtonC title="-" objectStyle={{ width: "45%", color: "#581845" }} /> */}
        <ButtonC title="Start" objectStyle={{ width: "100%", color: "#581845" }} />
      </View>
    </CardC>
  );
};

export default Play;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
    marginTop: "10%",
    marginBottom: "5%",
  },
  text: {
    color: "#FFC300",
    fontSize: 32,
  },
});
