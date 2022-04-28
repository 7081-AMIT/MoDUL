import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,

  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Login3 = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={styles.image}>
          <Image
            style={styles.image}
            source={require('../amit1/src/assests/Screen/images/logo.png')}
          />
        </View> */}

        <View style={styles.login}>
          <Text style={styles.login}>Login</Text>
        </View>
        <View>
          <Text style={styles.text1}>Name:</Text>

          <TextInput
            placeholder="Enter your name"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>

          <Text style={styles.text1}>Email:</Text>

          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>
          <Text style={styles.text1}>Phone:</Text>

          <TextInput
            placeholder="Enter Your Phone"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>

          <Text style={styles.text1}>Address:</Text>

          <TextInput
            placeholder="Enter Your Address"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>
          <Text style={styles.text1}>Password</Text>

          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>
          <Text style={styles.text1}>Confirm Password:</Text>

          <TextInput
            placeholder="Enter Your Confirm Password "
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>

          <View style={styles.btn}>

            
           <TouchableOpacity onPress ={() =>navigation.navigate("Home") }>
             <Text style={styles.btn}>Submit</Text>
           </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login3;
const styles = StyleSheet.create({
  login: {
    //backgroundColor:'green',
    //marginTop:20,
    fontSize: 50,
    color: 'red',
    // justifyContent:'center',
    alignSelf: 'center',
  },
  input: {
    //backgroundColor:'red',
    marginTop: 10,
    // marginRight:100,
    alignItems: 'stretch',
    borderWidth: 1,
    //backgroundColor:'red',
    //placeholderTextColor:'red',
    borderRadius: 10,
    width: width * 1,
    height: height * 0.04,
  },
  text1: {
    fontSize: 20,
    //textAlign:'center'
  },
  btn: {
    backgroundColor: 'red',
    marginTop: 10,
    fontSize: 20,
    borderRadius: 10,
    width: width / 2,
    alignSelf: 'center',
  },
  // image: {
  //   height: 150,
  //   width: 150,
  //   alignSelf: 'center',
  //   borderRadius: 800,
  // },
  container: {
    backgroundColor: 'cyan',
    height: height * 1,
    width: width * 1,
  },
  // image: {
  //   alignItems: 'center',
  //   marginTop: 20
  // }
});
