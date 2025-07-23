import { View,Text,StyleSheet } from "react-native"

const NumberButtonContainer = ({children
}) =>{

    return (
        <View style={styles.outerContainer}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius:2,
        borderColor:"white",
        borderWidth:2,
        margin:2,
        padding:10
    },
    text:{
        textAlign:"center",
        fontSize:44,
        color:"white",
        fontWeight:"bold"

    }
})

export default NumberButtonContainer