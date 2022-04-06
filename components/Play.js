import { StyleSheet, View, Text } from "react-native";
import CardC from "./CardC";
import ButtonC from "./ButtonC";

const Play = (props) => {
  return (
    <CardC width="80%" height="35%" y="flex-end">
      <CardC bgColor="#581845">
        <Text style={styles.text}>{props.number}</Text>
      </CardC>
      <View style={styles.inputContainer}>
        <ButtonC title="+" objectStyle={{ width: "45%", color: "#900C3F" }} />
        <ButtonC title="-" objectStyle={{ width: "45%", color: "#581845" }} />
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
