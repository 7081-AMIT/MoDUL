import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Register = ({navigation}) => {
  return (
    <SafeAreaView> 
       <ScrollView>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 50,
          marginHorizontal: 30,
        }}>
        <Text style={{fontSize: 25, alignItems: 'baseline',color:'white'}}>←</Text>
        <Text style={{fontSize: 28, fontWeight: 'bold', marginHorizontal: 100,color:'white'}}>
          Register
        </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
        <Text style={{margin: 15,color:'white'}}>━━━━</Text>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/2.png')}></Image>
        <Text style={{margin: 15,color:'white'}}>━━━━</Text>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/3.png')}></Image>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Text style={{fontSize: 20, margin: 20,color:'white'}}>ⓘ</Text>
        <Text style={{margin: 15 , color:'white'}}>
          Please enter your information as it is shown on your identity
          documents.
        </Text>
      </View>

<View style={styles.mainview1}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder=""
            placeholderTextColor={'white'}
            style={styles.input2}>Mr.</TextInput>
          <TextInput
            placeholder=""
            placeholderTextColor={'white'}
            style={styles.input2}>Ms.</TextInput>
          
        </View>
        </View>

      <View>
        <TextInput
          placeholder="First Name"
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Enter last 4 digit of SNN"
          placeholderTextColor={'white'}
          style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={{marginHorizontal: 20, margin: 10, fontSize: 22,color:'white'}}>
          Date OF Birth
        </Text>
        <View style={styles.mainview1}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="DD"
            placeholderTextColor={'white'}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="MM"
            placeholderTextColor={'white'}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="YY"
            placeholderTextColor={'white'}
            style={styles.input1}></TextInput>
        </View>
        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress ={() =>navigation.navigate("Home") }>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              padding: 5,color:'purple'
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3c1361',
    height:height*1,

  },
  image: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  input2: {
    //backgroundColor: '#B75CFF',
    height: height / 16,
    width:140,
    marginHorizontal: 20,
    //borderRadius: 10,
    textAlign: 'center',
    margin:10,
    color:'white',
    borderRightWidth:1,
    
  },
  input: {
    borderRadius: 10,
    height: 50,
    width: width / 1.05,
    backgroundColor: '#7500D1',
    margin:5,
    padding: 5,
  },
  input1: {
    //backgroundColor: '#B75CFF',
    height: height / 16,
    width:83,
    marginHorizontal: 20,
    //borderRadius: 10,
    textAlign: 'center',
    margin:10,
    borderRightWidth:1,
    
  },
  text1: {
    backgroundColor: '#B75CFF',
    height: height / 16,
    width:80,
    marginHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    margin:10
  },
  text2: {
    backgroundColor: 'white',
    height: 50,
    width: width / 4,
    marginHorizontal: 47,
    borderRadius: 20,
    marginVertical: 10,
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    borderRadius: 10,
    height: 50,
    width: width / 1.05,
    backgroundColor: 'white',
    margin: 5,
    alignSelf: 'center',
    marginVertical:40
  },
  mainview1: {
    borderRadius: 10,
    height: 70,
    width: width / 1.05,
    backgroundColor: '#A32EFF',
    margin: 5,
    borderColor:'white',
  },
});
