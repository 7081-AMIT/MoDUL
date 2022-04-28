import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  
  id,TextInput,Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
const {width, height} = Dimensions.get('window');

const F11 = ({navigation}) => {
  const Flatt = [
    {
      name: 'Amit',
      id: '5',
    },
    {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
      {
        name: 'Amit',
        id: '1',
      },
  ];
  return (
    <SafeAreaView>
      <ScrollView> 
    <View style={styles.a1}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          alignSelf: 'center',
          margin: 70,
          color: 'pink',
          backgroundColor: 'yellow',
        }}>
        CustomersDetails
      </Text>
      <View >
        <FlatList
          numColumns={2}
          data={Flatt}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: 'yellow',
                  borderRadius: 10,
                  height: 100,
                  width: 150,
                  alignItems: 'center',
                  margin: 20,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.id}
                  
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.name}
                </Text>
                <TextInput
            keyboardType="email-address"
            placeholder={'Your  Mail '}
            placeholderTextColor="#96ACB1"
            style={styles.input}></TextInput>
             <TextInput
            keyboardType="default"
            placeholder={'Your  Password '}
            placeholderTextColor="#96ACB1"
            style={styles.input}></TextInput>

              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity onPress ={() =>navigation.navigate("Home") }>
        <Text
          style={{
            color: 'white',
            fontSize: 28,
            fontWeight: 'bold',
            alignSelf: 'center',margin:20
          }}>
          Submit
        </Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default F11;

const styles = StyleSheet.create({
    a1:{
        backgroundColor:'red',
    },
  

    
});
