import { StyleSheet, View } from "react-native";

const CardC = (props) => {
  const styleObject = {
    height: props.height ?? "50%",
    width: props.width ?? "80%",
    justifyContent: props.y ?? "center",
    alignItems: props.x ?? "center",
    backgroundColor: props.bgColor ?? "#666666",
    borderRadius: props.bRadius ?? 6,
    flex: 1,
  };

  return <View style={styles(styleObject).Card}>{props.children}</View>;
};

export default CardC;

const styles = (styleObject) =>
  StyleSheet.create({
    Card: {
      height: styleObject.height,
      width: styleObject.width,
      justifyContent: styleObject.justifyContent,
      alignItems: styleObject.alignItems,
      backgroundColor: styleObject.backgroundColor,
      borderRadius: styleObject.borderRadius,
    },
  });
