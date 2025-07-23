import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children,onPress,style }) => {
    const handlePress = () =>{
            onPress()
    }
  return (
    <View style={[styles.buttonOuterContainer,style]}>
      <Pressable
        style={({pressed})=>pressed?[styles.buttonInnerContainer,styles.pressed]:styles.buttonInnerContainer}
        android_ripple={{ color: "#11545bff" }}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 30,
    overflow: "hidden",
    flex:1,
    
    
  },
  buttonInnerContainer: {
    paddingVertical: 15,
    backgroundColor: "#2fa6b2",
    elevation: 2,
    paddingHorizontal:5
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.5
  }
});
export default PrimaryButton;
