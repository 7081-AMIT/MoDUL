import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Loginn = ({navigation}) => {
  return (
   
    <SafeAreaView>
       <ScrollView> 
    <View style={{backgroundColor:'#3c1361'}}>
      <View style={styles.container}>
      <View>
        <Text style={styles.txt}>Username:</Text>
        <TextInput
          placeholder="Enter Your name "
          placeholderTextColor={'red'}
          style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.txt}>Password:</Text>
        <TextInput
          placeholder="Enter Your Password "
          placeholderTextColor={'red'}
          style={styles.input}></TextInput>
      </View>
      <View style={styles.txt1}>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
        <Text>jhvkhvmchfsdshdvbjvsbvg</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/google.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/logo-4.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/twitter.png')}></Image>
     </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:18,marginHorizontal:10}}>Don't have an account</Text>
        <TouchableOpacity >
        <Text style={{color:'blue'}}>SignUp </Text></TouchableOpacity>
        <TouchableOpacity><Text style={{color:'blue'}}>Here</Text></TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Loginn;

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    borderRadius: 10,
    height: 50,
    width: 250,
    backgroundColor: 'green',
    padding: 5,
  },
  container: {
    alignSelf: 'center',
    margin: 150,
   // backgroundColor:''
  },
  txt: {
    alignSelf: 'baseline',
    borderRadius: 10,
    height: 30,
    width: 150,
    //backgroundColor: 'green',
    padding: 2,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 100,
    height: 50,
    width: 50,
    padding: 10,
    alignSelf: 'flex-start',
    marginVertical: 0.2,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btn: {
    borderRadius: 10,
    backgroundColor: 'cyan',
    height: 40,
    width: width / 2,
    alignItems: 'center',
    //marginHorizontal:150,
    marginVertical: 50,
    alignSelf: 'center',
  },
  txt1:{
    //margin:50,
    alignSelf:'baseline',
    padding:0.1,

  }
});
