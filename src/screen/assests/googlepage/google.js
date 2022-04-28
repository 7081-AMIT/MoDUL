import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  onPress,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const Google = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.maincontainer}>
        <Text
          style={{
            fontSize: 38,
            alignSelf: 'center',
            color: 'white',
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          Login to Continue
        </Text>
        <View style={styles.set}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Image
              style={styles.image}
              source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/f3.png')}></Image>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: -0.5,
                  textAlign: 'center',
                  marginTop: 15,
                  fontWeight: 'bold',
                  color: 'black',
                  paddingRight: 5,
                }}>
                Login with Google{' '}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: 50,
            fontSize: 28,
          }}>
          OR
        </Text>
        <View>
          <TextInput
            keyboardType="email-address"
            placeholder={'Your  Mail '}
            placeholderTextColor="#96ACB1"
            style={styles.input}></TextInput>

          {/* <TextInput
            keyboardType="default"
            placeholder={'Your Number'}
            placeholderTextColor="#96ACB1"
            style={styles.input}></TextInput> */}
          <TextInput
            keyboardType="default"
            placeholder={'Your Password'}
            placeholderTextColor="#96ACB1"
            style={styles.input}></TextInput>
        </View>
      


        <TouchableOpacity style={styles.btn4} 
        onPress ={() =>navigation.navigate("Home") }>

          <Text
            style={{fontWeight: 'bold', fontSize: 28, color: 'white'}}>
            Next
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: 30, alignSelf: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: 'white'}}>
              Crete New Account.
            </Text>
            

            <TouchableOpacity style={StyleSheet.Btn} onPress ={() =>navigation.navigate("") }>
            <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                SignUp
              </Text>
                
            </TouchableOpacity>





              
          
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'white',
                  fontWeight: 'bold',
                  marginLeft: 10,
                  fontSize: 18,
                }}>
                Here
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn5}>
          <Text
            style={{fontWeight: 'bold', fontSize: 28, color: 'white',backgroundColor:'green'}}
            onPress={() => Alert.alert('AMIT KUMAR GUPTA' )}>
            @DESIGNE BY
          </Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};
export default Google; 
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#4CA1b4',
    height: height * 1,
  },
  image: {
    borderRadius: 100,
   
    //borderRightWidth: 100/25,
    height:height/15,
    width:width/20,

    marginTop: 10,
    marginBottom: 200,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingRight: 150,
  },
  set: {
    backgroundColor: 'white',
    marginTop: 20,
    //borderRadius: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: width * 0.85,
    marginLeft: 30,
    height: height / 10,

    //height: 190,
    //marginHorizontal:20,
    marginRight: 20,
    paddingHorizontal: 9,
    textAlign: 'left',
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    marginTop: 20,
    fontWeight: 'bold',

    marginLeft: 35,
    borderRadius: 80,
    width: width / 1.7,
    height: 30,
    
    textAlign: 'center',
    fontSize: 18,

    alignSelf: 'center',
  },
  btn4: {
    marginTop: 30,
    fontSize: 20,
    //textAlign: 'center',
    //borderRadius: 10,
    //color: 'blue',
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 30,
    backgroundColor: '#0F5566',
    width: width / 4,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
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
    backgroundColor: '#522G0G',
    width: width / 2,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },
});