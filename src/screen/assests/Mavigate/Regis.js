import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions,FlatList,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
const {width, height} = Dimensions.get('window');

const Regis = ({navigation}) => {
    const FL =[
        
      
      {
        image:"",
    },
    {
      image:"",
  },
  {
    image:"",
},
        
        
        
    ];
  return (
    <SafeAreaView>
      <ScrollView>


    <View style={styles.maincontainer}>
      <View style={{flexDirection: 'row', marginVertical: 80}}>
        <Text style={{fontSize: 25, alignItems: 'baseline', color: 'white',padding:10}}>
          ←
        </Text>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            marginHorizontal: 120,
            color: 'white',
          }}>
          Deposit
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
        <Text style={{marginVertical: 20}}>______</Text>
        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
        <Text style={{marginVertical: 20}}>______</Text>

        <Image
          style={styles.image}
          source={require('/Users/administrator/Desktop/A420/src/screen/assests/image/crown.png')}></Image>
      </View>
      <View style={styles.txt}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{margin: 20}}>
            ✅ You're Registered Almost there . Make A Deposit and Get Started
          </Text>
        </View>
      </View>

      <Text style={{margin: 30, fontSize: 18, color: 'white'}}>Choose One</Text>
     
      <View>
  <FlatList
      data={FL}
      numColumns={4}
      renderItem={({item}) => {
          return(

              <View >
                  
              <View style={{flexDirection:'row'}}>
                  <View style={styles.flat}>

                      <TouchableOpacity>

                  <Text> <Image
          style={styles.image}
          source={require
          ('/Users/administrator/Desktop/A420/src/screen/assests/image/dow.png')}>
              </Image>   {item.id}</Text>
          <Text style ={{margin:10,color:'red'}}>Online Bnking</Text>
          </TouchableOpacity>

                  </View>
                  <View style={styles.flat}>
                  <TouchableOpacity>

<Text> <Image
style={styles.image}
source={require
('/Users/administrator/Desktop/A420/src/screen/assests/image/pay.png')}>
    </Image>   {item.id}</Text>
</TouchableOpacity>
                  
                  </View>
                  </View>
                  <View style={{flexDirection:'row'}}>
                  <View style={styles.flat}>
                  <TouchableOpacity>

<Text> <Image
style={styles.image}
source={require
('/Users/administrator/Desktop/A420/src/screen/assests/image/visa.png')}>
    </Image>   {item.id}</Text>

</TouchableOpacity>
                   </View>
                  <View style={styles.flat} >

                  <TouchableOpacity>

<Text> <Image
style={styles.image}
source={require
('/Users/administrator/Desktop/A420/src/screen/assests/image/b.png')}>
    </Image>   {item.id}</Text>
</TouchableOpacity>
                  
                  </View>
                  </View>
                  </View>
                   )
      }}
      />
        </View>
        <View style={styles.deep}>
        <Text>Welcome To Deposit</Text>
        </View>
       
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
// comment

export default Regis;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'purple',
    height: height * 1,
  },
  image: {
    height: 50,
    marginTop: 20,
    width: 50,
    borderRadius: 800,
    alignSelf: 'center',
    backgroundColor: 'green',
    marginHorizontal: 22,
  },
  txt: {
    borderRadius: 20,
    height: 80,
    width: width / 1.05,
    backgroundColor: '#7500D1',
    borderColor: 'white',
    margin: 10,
  },
  flat:{
      backgroundColor:'white',
      borderRadius:20,
      height:90,
      width:width/2.2,
      margin:5,
      marginHorizontal:7,
      padding:10,
  },
  deep:{
      backgroundColor:'red',
      alignItems:'center',
      borderRadius:10,
      height:30,
      width:80,alignSelf:'center',
      margin:20,
  }
});
