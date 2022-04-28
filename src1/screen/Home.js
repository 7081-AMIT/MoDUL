import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  Button,
  Dimensions,
  ScrollView,
  SafeAreaView
 
} from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
      <SafeAreaView>
           <ScrollView> 
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 40,
          fontSize: 28,
          fontWeight: 'bold',
          borderRadius: 120,
          height: 40,
          width: 170,
          backgroundColor: 'red',
          alignSelf:'center',
          textAlign:'center'
        }}>
        Open Files
      </Text>
      <View style={styles.container1}> 
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Login')}>
          <Text>navigate to Login </Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('OnboardingScreen')}>
          <Text>Navigate to OnbordingScreen</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Login2')}>
          <Text>Navigate to Login2</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}> 
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Google')}>
          <Text>Navigate to Google</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Insta')}>
          <Text>Navigate to Insta</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Facebook')}>
          <Text>Navigate to Facebook</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Customers')}>
          <Text>Navigate to Customers</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Login3')}>
          <Text>Navigate to Login3</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Detail')}>
          <Text>Navigate to Detail</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Register')}>
          <Text>Navigate to Register</Text>
        </TouchableOpacity>
        
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('F11')}>
          <Text>Navigate to F11</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Loginn')}>
          <Text>Navigate to Loginn</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Responsive')}>
          <Text>Navigate to Responsive</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Screen1')}>
          <Text>Navigate to Screen1</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Login1')}>
          <Text>Navigate to Login1</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('SignUp1')}>
          <Text>Navigate to SignUp1</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.container1}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate('Test11')}>
          <Text>Navigate to Test11</Text>
        </TouchableOpacity>
        </View>
     
     
    </View>
    </ScrollView>
    

    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  // Btn:{
  //     marginTop:20,
      
  //     alignSelf:'center',
      
  // },
  container1:{
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:10,
    height:50,
    borderWidth:2,
    width:width/2,
    borderColor:'#DAC398',
    backgroundColor:'yellow'
  }
  
});
