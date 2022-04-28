
import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity,onPress,Image, SafeAreaView,ScrollView} from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler';
const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <ScrollView>
        <View style={{backgroundColor:'#102B33',height:800}}>
        <View style={styles.main}>
            <View style={styles.image}>
                <Image style={styles.image} source={require
                      ('/Users/administrator/Desktop/A420/src/screen/assests/image/ej.png')}/>
                 




            </View>
            
            <View style={styles.txt}>
        <Text style={{color:'white',fontSize:22,padding:10}}>Ready Made</Text>  
        <Text style={{color:'white',fontSize:22,padding:10}}>rooms to go</Text>
        </View>
        <Text style={{color:'#b5c4c8',marginLeft:50,marginRight:50,fontSize:18}}>
            Virtual digital showroomtransform
            your dreames into really at one touch of screen.
        </Text>
            <Text></Text>
            <View style={styles.container} >
            <TouchableOpacity onPress ={() =>navigation.navigate("Login2") }>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white'}} >Get Started       →</Text>
            </TouchableOpacity>

            </View>
        </View>
        </View>
        </ScrollView>
        
        </SafeAreaView>
    )
}

export default OnboardingScreen;
const styles =StyleSheet.create({
    container:{
        marginTop:60,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:10,
        height:50,
        borderWidth:2,
        width:252,
        borderColor:'#DAC398'
    },
    /*main:{
        backgroundColor:'#102B33',
       // height:1000,
    }*/
    txt:{
        margin:120,
        marginLeft:40,
        
        
    },
    image:{
        borderRadius:100,
        height:60,
        width:60,
        marginTop:60,
        marginLeft:20
    }
})

















