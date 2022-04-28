import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  onPress,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';

const Login2 = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.main}>
        <View style={styles.image} style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/setting-removebg-preview.png')}
          />

          <Image
            style={styles.image1}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/dot-removebg-preview.png')}
          />
        </View>
        <View style={styles.txt}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              padding: 10,
              fontWeight: 'bold',
            }}>
            Choose Your own
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              padding: 10,
              fontWeight: 'bold',
            }}>
            ready design
          </Text>
        </View>

        <View>
          <Image
            style={styles.image2}
            source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/11-removebg-preview.png')}></Image>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.txt}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Kitchen-I
            </Text>
            <Text style={{color:'#b5c4c8',marginTop:10}}>The furniture from </Text>
            <Text style={{color:'#b5c4c8',marginTop:5}}> quality designed houses.</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',marginTop:5}}>
              ₹4800
            </Text>
          </View>
          <View style={styles.txt}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              Office-I
            </Text>
            <Text style={{color: '#b5c4c8',marginTop:10}}>
              Highest level of </Text>
              
            <Text style={{marginTop:5,color:'#b5c4c8'}}>refinement and common .</Text>
            
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white',marginTop:5}}>
              ₹6600
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Get Started →
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login2;
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    height: 50,
    borderWidth: 2,
    width: 252,
    borderColor: '#DAC398',
  },
  main: {
    backgroundColor: '#102B33',
    height: 1000,
  },
  txt: {
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    borderRadius: 100,
    height: 60,
    width: 60,
    marginTop: 30,
    marginLeft: 20,
  },
  image1: {
    borderRadius: 100,
    height: 60,
    width: 60,
    marginTop: 30,
    marginLeft: 20,
    marginLeft: 220,
  },
  image2: {
    borderRadius: 5,
    height: 200,
    width: 390,
    marginTop: 30,
    // marginLeft:20,
    //marginLeft:220
  },
});
