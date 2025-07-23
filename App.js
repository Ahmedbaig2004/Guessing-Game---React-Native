import StartGameScreen from "./screens/startGameScreen";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";



export default function App() {

  const [userinput,setUserInput] = useState()
  const [gameisover,setisgameover]=useState(true)
  const [guesses,setGuesses] = useState(0)

  const [fontsloaded] = useFonts({
    'open-sans':require("./assets/fonts/OpenSans-Bold.ttf"),

  })
  if(!fontsloaded){
    return null
  }
  const restartGame = () =>{
    setisgameover(true)
    setUserInput(undefined)
    setGuesses(0)
  }
  let screen = <StartGameScreen inputhandler={inputhandler}/>
  if(userinput){
    screen = <GameScreen userinput ={userinput} setisgameover={setisgameover} setGuesses={setGuesses} guesses={guesses}/>
  }
  if(gameisover && userinput){
    screen=<GameOverScreen usernumber={userinput} guesses={guesses} restartGame={restartGame}/>

  }
  function inputhandler(number)
  {
    setUserInput(number)
    setisgameover(false)
  }
  return (
    <LinearGradient
      colors={["#271395ff", "#236bfbff", "#1c078fff"]}
      style={styles.mainview}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.mainview}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainview}>

        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.10
  }
});
