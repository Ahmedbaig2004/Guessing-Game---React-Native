
import { Text,StyleSheet } from "react-native"
const Title = ({children}) =>{

    return(
        <Text style={styles.titleStyle }>{children}</Text>
    )
}
export default Title

const styles = StyleSheet.create({
    titleStyle :{
        fontFamily:"open-sans-bold",
        fontSize:28,
        color:"#0fe9f9ff",
        fontWeight:"bold",
        textAlign:"center",
        borderColor:"#0fe9f9ff",
        borderWidth:4,
        padding:10,
        margin:13


    }
})  