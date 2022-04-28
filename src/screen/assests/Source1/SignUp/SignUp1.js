import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  onPress,Alert,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SignUp1 = ({navigation}) => {
  return (
      <SafeAreaView>
          
      <View style={{flexDirection:'row'}}>
    <View style={styles.txt}>
      <Text
        style={{
          fontSize: 15,
          marginTop: 50,
          alignSelf: 'center',
          backgroundColor: 'cyan',
        }}>
        Welcome to my SignUppage{' '}
      </Text>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Username:
      </Text>
      <View>
        <TextInput
          keyboardType="email-address"
          placeholder={'Your  Mail '}
          placeholderTextColor="#96ACB1"
          style={styles.input1}></TextInput>
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Password:
      </Text>
      <View>
        <TextInput
          keyboardType="default"
          placeholder={'Your Password '}
          placeholderTextColor="#96ACB1"
          style={styles.input1}></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.btn5}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              color: 'red',
              backgroundColor: '#96ACB1',
            }}
            onPress ={() =>navigation.navigate("Home") } >
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.txt}>
      <Text
        style={{
          fontSize: 15,
          marginTop: 50,
          alignSelf: 'center',
          backgroundColor: 'cyan',
        }}>
        Welcome to my SignUppage
      </Text>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Username:
      </Text>
      <View>
        <TextInput
          keyboardType="email-address"
          placeholder={'Your  Mail '}
          placeholderTextColor="#96ACB1"
          style={styles.input1}></TextInput>
      </View>
      <Text
        style={{
          marginLeft: 10,
          marginTop: 10,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        Password:
      </Text>
      <View>
        <TextInput
          keyboardType="default"
          placeholder={'Your Password '}
          placeholderTextColor="#96ACB1"
          style={styles.input1}></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.btn5}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              color: 'red',
              backgroundColor: '#96ACB1',
            }}
            onPress ={() =>navigation.navigate("Home") } >
           SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>

    </SafeAreaView>
  );
};

export default SignUp1;

const styles = StyleSheet.create({
  txt: {
    backgroundColor: '#96ACB1',
    height: 200 * 1.9,
    width:200*0.97,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  input1: {
    backgroundColor: 'white',
    marginTop: 10,
    fontWeight: 'bold',

    marginLeft: 5,
    borderRadius: 80,
    width: width / 2,
    height: 30,

    textAlign: 'center',
    fontSize: 18,

    alignSelf: 'center',
  },
  btn5: {
    marginTop: 40,
    fontSize: 20,
    //textAlign: 'center',
    //borderRadius: 10,
    //color: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    //marginLeft: 30,
    //backgroundColor: '#522G0G',
    width: width / 4,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
});
