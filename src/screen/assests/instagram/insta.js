import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Alert,
  onPress,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Insta = ({navigation}) => {
  return (
    // <SafeAreaView>
    <View>
      <View style={styles.maincontainer}>
        <View style={styles.image}>
          <Image
            style={styles.image}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/insta.png')}></Image>
        </View>
        <View style={styles.ss}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image
              style={styles.img}
              source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/faclogo.png')}></Image>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                fontWeight: 'normal',
                marginTop: 40,
                alignSelf: 'center',

                alignItems: 'center',
                //paddingRight:10,
                paddingLeft: 5,
                //marginHorizontal:20,
              }}>
              Login with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.page}>
            <Text>Instagram Username :</Text>
            <TextInput
              placeholder={'enter email or phone'}
              placeholderTextColor="white"
              style={styles.input}></TextInput>
          </View>
          <View style={styles.page}>
            <Text>Instagram Password :</Text>
            <TextInput
              placeholder={'enter password'}
              placeholderTextColor="white"
              style={styles.input}></TextInput>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                marginTop: 20,
                alignSelf: 'center',
                marginTop: 40,
              }}
              onPress={() => Alert.alert('Reset password or Not')}>
              Reset Password
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
              <Text
                style={styles.main}
                onPress ={() =>navigation.navigate("Home") }>
                Login
              </Text>
            </TouchableOpacity>
            <View style={styles.sett}>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image
                  style={styles.img2}
                  source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/f1.png')}></Image>
                <Text style={{fontSize: 18, paddingHorizontal: 10}}>
                  Login with Facebook{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image
                  style={styles.img2}
                  source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/f2.png')}></Image>
                <Text style={{fontSize: 18, paddingHorizontal: 10}}>
                  Login Insta{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Image
                  style={styles.img2}
                  source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/f3.png')}></Image>
                <Text style={{fontSize: 18, paddingHorizontal: 10}}>
                  Login with Google{' '}
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 18, marginTop: 10, color: 'red'}}>
                @DESIGN BY AMIT KUMAR GUPTA
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
};
export default Insta;
const styles = StyleSheet.create({
  maincontainer: {
    height: height * 1,
    backgroundColor: '#3f729b',
    borderRadius: 30,
  },
  container: {
    marginTop: 20,

    // height:height*1,
    // borderRadius:40,
    // borderRightWidth:30,
    height: height * 1,
    backgroundColor: '#22E383',
    borderRadius: 30,
  },
  main: {
    textAlign: 'center',
    borderRadius: 600,
    backgroundColor: '#3f729b',
    borderWidth: 1,
    width: width / 2,
    fontWeight: 'bold',
    fontSize: 28,
    margin: 20,
    marginTop: 20,
    height: 40,
    alignSelf: 'center',
  },
  page: {
    marginTop: 20,
    alignSelf: 'baseline',
    marginHorizontal: 30,
    //backgroundColor:'red'
  },
  image: {
    borderRadius: 800,
    height: 150,
    marginTop: 20,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  input: {
    backgroundColor: '#3f729b',
    marginTop: 10,
    borderRadius: 10,
    width: width / 1.2,
    height: 50,
    textAlign: 'left',
    fontSize: 18,
    //alignSelf: 'center',
  },
  input1: {
    backgroundColor: '#3f729b',
    marginTop: 10,
    borderRadius: 10,
    width: width / 1.2,
    height: 50,
    textAlign: 'left',
    fontSize: 18,
    //alignSelf: 'center',
  },
  img: {
    borderRadius: 800,
    height: 40,
    //marginHorizontal:60,
    marginTop: 20,
    width: 40,
    //paddingRight:70,
    alignItems: 'center',

    alignSelf: 'center',
  },
  ss: {
    backgroundColor: 'skyblue',
    marginTop: 10,
    borderRadius: 10,
    width: width * 1,
    height: 70,
    //marginHorizontal:20,
    marginRight: 20,
    paddingHorizontal: 90,
    textAlign: 'left',
    fontSize: 18,
  },
  img2: {
    borderRadius: 800,
    height: 40,
    //marginHorizontal:60,
    marginTop: 20,
    width: 40,
    //paddingRight:70,
    alignItems: 'center',

    alignSelf: 'center',
  },
  sett: {
    marginHorizontal: 50,
  },
});
