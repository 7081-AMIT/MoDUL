import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  onPress,
  Alert,
  TextInput,Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Home1 = ({navigation}) => {
  return (
    <View>
      <View style={styles.logo1}>
        <Image
          style={styles.logo1}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/logo-4.png')}></Image>
      </View>
      <View style={styles.input}>
        <Text style={{marginTop:5,fontSize:18,fontWeight:'bold'}}>Username</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor={'red'}
          style={styles.input1}
          ></TextInput>
          <Text>Password</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text onPress={() => navigation.navigate("Home")}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home1;

const styles = StyleSheet.create({
  logo1: {
    borderRadius: 200,
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  comlogo: {
    fontSize: 20,
    fontFamily: 'SnellRoundhand-Bold',
  },
  btn: {
    marginTop: 80,
    alignSelf: 'center',
  },
  input:{
      borderRadius:200,
      height:height/9,
      backgroundColor:'green',
      marginHorizontal:50,
      padding:20,
      marginVertical:150
  },
  input1:{
      padding:10,
      fontSize:18,

  }
});
