import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  onPrees,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Facebook = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.image}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/Logo.png')}></Image>
        </View>
        <View style={styles.main}>
          <TextInput
            placeholder="Eter email or Phone"
            placeholderTextColor={'black'}
            style={styles.input}></TextInput>

          <View>
            <TextInput
              placeholder="Eter email or Phone"
              placeholderTextColor={'black'}
              style={styles.input1}></TextInput>
          </View>
          <View>
            <TouchableOpacity onPress ={() =>navigation.navigate("Home") } >
              <Text style={styles.btn}>Login</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.btn1}>Login With Browser</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.btn2}>SignUp For Facebook</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.btn3}>Foget Password</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.de}>@DESIGN BY AMIT KUMAR GUPTA</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Facebook;
const styles = StyleSheet.create({
  main: {
    //backgroundColor: 'skyblue',
    height: height * 1,
    width: width * 1,
    //marginTop:40,
  },
  container: {
    backgroundColor: '#4267B2',
  },
  input: {
    backgroundColor: 'white',
    marginTop: 50,
    //borderRadius:600,
    width: width / 2,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },
  input1: {
    backgroundColor: 'white',
    marginTop: 20,
    //borderRadius:600,
    width: width / 2,
    height: 50,
    textAlign: 'center',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#1567C6',
    marginTop: 50,
    fontSize: 20,
    //borderRadius: 100,
    width: width / 2,
    alignSelf: 'center',
    color: 'white',
    textAlign: 'center',
  },
  btn1: {
    // backgroundColor: 'cyan',
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    //borderRadius: 10,
    width: width / 2,
    color: 'white',
    alignSelf: 'center',
  },
  btn2: {
    marginTop: 30,
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    //borderRadius: 10,
    width: width / 2,
    color: 'white',
    alignSelf: 'center',
  },

  btn3: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    //borderRadius: 10,
    color: 'white',
    width: width / 2,
    alignSelf: 'center',
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 800,
    alignSelf: 'center',
    backgroundColor: '#4267B2',
  },
  de: {
    marginTop: 140,
    color: 'red',
    textAlign: 'center',
  },
});
