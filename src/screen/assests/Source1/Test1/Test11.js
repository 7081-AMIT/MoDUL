import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
const Test11 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.maincontainer}>
      
     
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignSelf: 'center',
            margin: 80,
          }}>
          Hello
        </Text>
        <TouchableOpacity>
        <Modal
         animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Welcome to modal');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello AMit</Text>
              <Pressable
                style={[styles.button, styles.butonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textstyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
            <Text style={{backgroundColor: 'red',
              borderRadius: 40,
              padding:5,margin:10,
              marginTop:300,
              width: 120,
              height: 50,
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,}}>Show modal</Text>
          </Pressable>
          </TouchableOpacity>
          <View>
      <TouchableOpacity onPress ={() =>navigation.navigate("Home") } >
        <Text style={{color:'black',marginTop:40}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>

          </View>
      

      
    
  );
};

export default Test11;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'orange',
    height: 200 * 5,
  },
  centerView:{
    flex:0.2,
    justifyContent:'center',
    alignSelf:'center',
    //marginTop:40,
    backgroundColor:'green',
    borderRadius:10,
   // height:100,
    paddingBottom:0,
    
    width:150,
  },
  modalView:{
    margin:20,
    backgroundColor:'pink',
    padding:5,
    borderRadius:20,
    alignItems:'center',
    //shadowColor:'red',
    //shadowOffset:{
      //width:0,
      //height:2,
    //},
    button:{
      borderRadius:20,
      padding:10,
      elevation:2,
    },
    buttonOpen:{
      backgroundColor:'red',
    },
    butonClose:{
      backgroundColor:'white',
    },
    text1style:{
    //   olor: "white",
    // fontWeight: "bold",
    // textAlign: "center",c
    },
    


  }
  
});
