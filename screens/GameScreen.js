import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useState,useEffect } from "react";
import NumberButtonContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import AntDesign from '@expo/vector-icons/AntDesign';

let minboundary=1
let maxboundary=100
const GameScreen = ({ userinput,setisgameover,setGuesses,guesses }) => {
  const initialGuess = generateRandomBetween(1, 100, userinput);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
  minboundary = 1;
  maxboundary = 100;

}, []);
    useEffect(() => {
    if (currentGuess === userinput) {
      setisgameover(true);
    }
  }, [currentGuess, userinput, setisgameover]);
  
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  function generatelowerorhigher(direction) {
   
    if((direction === 'lower' && currentGuess<userinput)||(direction==='higher' && currentGuess>userinput))
    {
        Alert.alert("Dont Lie","You know it is wrong",[{text:"Okay",style:"cancel"}])
        return
    }
    if (direction === 'lower') {
      maxboundary = currentGuess;
    } else if (direction === 'higher') {
        minboundary=currentGuess+1
    }
    const newnumber=generateRandomBetween(minboundary,maxboundary,currentGuess)
    setCurrentGuess(newnumber)
    setGuesses(prev=>prev+1)
   
    
  }

  return (
    <View style={styles.GameScreenContainer}>
      <Title children={"OPPONENTS GUESS"} />
      <NumberButtonContainer children={currentGuess} />
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={generatelowerorhigher.bind(this,'higher')}><AntDesign name="pluscircle" size={34} color="white" />
</PrimaryButton>
        <PrimaryButton onPress={generatelowerorhigher.bind(this,'lower')}><AntDesign name="minuscircle" size={34} color="white" />
</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GameScreenContainer: {
    paddingTop: 40,
  },
  buttonsContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: 20,
},
});
export default GameScreen;
