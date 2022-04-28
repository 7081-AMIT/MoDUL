
import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity,onPress,Image ,Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window');







const Login = ({navigation}) => {
    return (

        

        <View style={styles.container}> 
        <View style={styles.FirstContainer} style={{flexDirection:'row'}}>
            <Text style={styles.FirstContainer}>←</Text>
            <Text style={styles.FirstContainer}>Register</Text>
        </View>
        
            <Text>FOur Screen</Text>
            <TouchableOpacity style={StyleSheet.Btn} onPress ={() =>navigation.navigate("Home") }>
                <Text>Click ME</Text>
            </TouchableOpacity>
        </View>
        
    )
}

export default Login;
const styles =StyleSheet.create({
    container:{
     
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
     
    },
    FirstContainer:{

        fontSize:20,
        

    }
})
















