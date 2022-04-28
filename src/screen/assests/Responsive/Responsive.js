import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,Modal,Pressable,
  
  
  onPress,
  SafeAreaView,ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');

const Responsive = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView> 
       <ScrollView>
    <View style={styles.maincontainer}>
      <View>
        <Text style={styles.txt}>Responsive Coding</Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 50}}>
        <TouchableOpacity style={styles.btn5}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              color: 'black',
              backgroundColor: 'white',
            }}
            onPress={() => Alert.alert('AMIT KUMAR GUPTA')}>
            Button1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn5}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 28,
              color: 'black',
              backgroundColor: 'white',
            }}
            onPress={() => Alert.alert('AMIT KUMAR GUPTA')}>
            Button2
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 45,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red',
            }}>
            Dart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red',
            }}>Php</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red'
            }}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red',
            }}>c++</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red',
            }}>HTML</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{
              fontWeight: 'bold',
              fontSize: 25,
              alignSelf: 'center',
              marginTop: 20,
              color:'white',
              textDecorationLine:'underline',
              textDecorationColor:'red',
            }}>CSS</Text>
            
        </TouchableOpacity>
      </View>

      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Amit!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <View>
      <TouchableOpacity onPress ={() =>navigation.navigate("Home") } >
        <Text style={{color:'white',marginTop:40}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
    </View>
    



    </View>
     </ScrollView>

    </SafeAreaView>
  );
};

export default Responsive;

const styles = StyleSheet.create({
  txt: {
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 180,
    //backgroundColor:'green',
    color: 'white',
    borderRadius: 100,
    width: 235,
    height: 40,
  },
  maincontainer: {
    backgroundColor: 'black',
    height: 200 * 5,
  },
  btn5: {
    marginTop: 40,
    fontSize: 20,
    //textAlign: 'center',
    //borderRadius: 10,
    //color: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 20,

    //marginLeft: 30,
   // backgroundColor: '#522G0G',
    width: width / 3,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom:252
  },
  modalView: {
    margin: 20,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1.25,
    shadowRadius: 5,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "pink",
  },
  buttonClose: {
    backgroundColor: "pink",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:18,
    fontWeight:'bold'
  },
  modalText: {
    marginBottom: 28,
    textAlign: "center"
  }
});
