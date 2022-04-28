import React from 'react'
import { StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    id,TextInput,Dimensions } from 'react-native'
    const {width, height} = Dimensions.get('window');

const F12 = ({navigation}) => {
    const FlatList1 =[
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
        {
            name:"Amit",
            Age:"22",
        },
    ]
    return (
        <View style={styles.a2}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
           <FlatList
           numColumns="6"
           data={FlatList1}
           renderItem={({item}) =>{
               return(
                   <View style={styles.a1}>
                       <Text>{item.name}</Text>
                       <Text>{item.Age}</Text>
                   </View>
               )
           }}
           
           
           />
        </View>
        </View>
    )
}

export default F12

const styles = StyleSheet.create({
    a2:{
       // margin:50,
        backgroundColor:'green',
        height:100
    },
    a2:{
        margin:60,
    }
})
