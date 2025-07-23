import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({guesses,usernumber,restartGame}) => {
  return (
    <View style={styles.root}>
      <View style={styles.titlestyle}>
        <Title>Game Is Over</Title>
      </View>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.outerText}>
        The Computer took <Text style={styles.innerText}>{guesses}</Text> tries to guess
        the Number <Text style={styles.innerText}>{usernumber}</Text>
      </Text>
<PrimaryButton onPress={restartGame} style={styles.buttonStyle}>Restart Game</PrimaryButton>
    
      
    </View>
  );
};
export default GameOverScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    width: 300,
    height: 300,
    marginTop: 40,
    borderRadius:200,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  titlestyle: {
    width: "100%",
  },
  outerText: {
    color: "white",
    marginTop: 50,
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  innerText: {
    color: "#0fe9f9ff",
    fontFamily: "open-sans-bold",
  },
  buttonStyle:{
    flex:0,
    marginTop:30
  }
});
