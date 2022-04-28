
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  Alert,
  onpress,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Welcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container1}>
<View style={styles.image}>
  <Image
    style={styles.image}
    source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/logocom.png')}></Image>
</View>

        <Text style={styles.a3}>Welcome!</Text>
      </View>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.txt}>Username</Text>
          </View>
          <TextInput
            placeholder="Enter email or Phone"
            placeholderTextColor={'red'}
            style={styles.input}></TextInput>

          <View>
            <View>
              <Text style={styles.txt}>Password</Text>
            </View>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={'red'}
              style={styles.input1}></TextInput>
          </View>
          <View style={{flexDirection: 'row'}}>
<TouchableOpacity style={styles.btn3}>
<Text
  style={{fontWeight: 'bold', fontSize: 18}}
  onPress={() => Alert.alert('Successfuly Sign In')}>
  Sign In
</Text>
</TouchableOpacity>

            <TouchableOpacity style={styles.btn4}>
              <Text
                style={{fontWeight: 'bold', fontSize: 18}}
                onPress={() => Alert.alert('Successfuly Sign Up')}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
            }}>
            @DESIGN BY AMIT KUMAR GUPTA
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#4267B2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // padding: 150,
  },
  container: {
    backgroundColor: 'cyan',

    //paddingTop:490,
    //borderTopLeftRadius:30,
    //borderTopRightRadius:30,
    //marginTop:-30,
    paddingBottom: 500,
    marginBottom: 20,
  },

  a3: {
    fontWeight: 'bold',
    margin: 10,
    color:'white',
    fontSize:18,
    marginTop: 100,
    marginBottom:50,
    height: height / 50,
  },
  input: {
    textAlign: 'left',
    borderRadius: 800,
    backgroundColor: '#22E383',
    borderWidth: 1,
    width: width * 0.9,
    margin: 20,
    height: 40,
    alignSelf: 'baseline',
  },
  text1: {
    marginTop: 0,
  },
  input1: {
    // textAlign:'center',
    // borderRadius:800,

    // borderWidth:2,
    // width:width/2,
    // alignSelf:'baseline',
    textAlign: 'left',
    borderRadius: 800,
    backgroundColor: '#22E383',
    borderWidth: 1,
    width: width * 0.9,
    height: 40,
    margin: 20,
    alignSelf: 'baseline',
  },
  txt: {
    alignSelf: 'auto',
    marginTop: 20,
    paddingLeft: 30,
  },
  btn3: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    //borderRadius: 10,
    color: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'green',
    width: width / 4,
    height: 30,
    marginLeft: 65,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn4: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    //borderRadius: 10,
    //color: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 60,
    backgroundColor: 'white',
    width: width / 4,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    marginTop: 20,
    width: 150,
    borderRadius: 800,
    alignSelf: 'center',
    backgroundColor: 'green',
  },
});
