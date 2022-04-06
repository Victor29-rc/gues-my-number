import { StyleSheet, View, Button } from "react-native";

const ButtonC = (props) => {
  const styleObject = {
    width: props.objectStyle.width ?? "45%",
    color: props.objectStyle.color ?? "blue",
  };

  return (
    <View style={styles(styleObject).buttonStyle}>
      <Button
        color={styleObject.color}
        title={props.title}
        onPress={props.onPress}
      />
    </View>
  );
};

export default ButtonC;

const styles = (objectStyle) =>
  StyleSheet.create({
    buttonStyle: {
      width: objectStyle.width,
    },
  });
