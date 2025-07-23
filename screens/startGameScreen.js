import { TextInput, View, StyleSheet, Alert,Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({inputhandler}) {
  const [enteredtext, setEnteredtext] = useState("");

  const handleinput = (e) => {
    setEnteredtext(e);
  };

  const onSubmitNumber = () => {
    const number = parseInt(enteredtext);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid Number", "Please Enter A Number Between 1 and 99", [
        { text: "Okay",onPress:onResetHandler,style:"destructive" },
      ]);
      return;
    }
    inputhandler(number)
  };
  const onResetHandler = () => {
    setEnteredtext("");
  };
  return (
    <View>
    
    <Text style={styles.rootText}>Enter Your Guess</Text>

    <View style={styles.inputContainer}>

      <TextInput
        style={styles.inputBox}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredtext}
        onChangeText={handleinput}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton children={"Reset"} onPress={onResetHandler} />
        <PrimaryButton children={"Confirm"} onPress={onSubmitNumber} />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    rootText:{
        marginTop:80,
        fontWeight:"bold",
        height:50,
        fontSize:40,
        color:"#0fe9f9ff",
        textAlign:"center",
        
    },  
  inputContainer: {
    flexDirection: "column",
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#0d6eb4ff",
    padding: 17,
    elevation: 50,
    borderRadius: 10,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  inputBox: {
    alignSelf: "center",
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#c6dfe1ff",
    borderBottomWidth: 3,
    marginVertical: 10,
    color: "yellow",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
