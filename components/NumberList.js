import { StyleSheet, View, ScrollView, Text } from "react-native";

const NumberList = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {props.items.map((item) => {
          return (
            <Text style={styles.item} key={Math.random()}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NumberList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: "80%",
  },
  item: {
    marginVertical: 8,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#FFC300",
    borderRadius: 6,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});
