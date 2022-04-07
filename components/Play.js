import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardC from "./CardC";
import ButtonC from "./ButtonC";
import NumberList from "./NumberList";

const Play = (props) => {
  const [numberItems, setNumberItems] = useState([]);
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * 99));

  const generateRandomHandler = () => {
    setRandNum((prevNumber) => {
      const max = prevNumber >= props.number ? prevNumber : props.number;
      const min = prevNumber <= props.number ? prevNumber : props.number;

      return Math.floor(Math.random() * (max - min + 1) + min);
    });
  };

  useEffect(() => {
    setNumberItems([...numberItems, randNum]);
    console.log(randNum);
  }, [randNum]);

  return (
    <>
      <CardC width="80%" height="35%" y="flex-end">
        <CardC bgColor="#581845">
          <Text style={styles.text}>{props.number}</Text>
        </CardC>
        <View style={styles.inputContainer}>
          {numberItems.length > 0 ? (
            <>
              <ButtonC
                title="+"
                objectStyle={{ width: "45%", color: "#900C3F" }}
                onPress={generateRandomHandler}
              />
              <ButtonC
                title="-"
                objectStyle={{ width: "45%", color: "#581845" }}
                onPress={generateRandomHandler}
              />
            </>
          ) : (
            <ButtonC
              title="Start"
              objectStyle={{ width: "100%", color: "#581845" }}
            />
          )}
        </View>
      </CardC>
      <NumberList items={numberItems} />
    </>
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
