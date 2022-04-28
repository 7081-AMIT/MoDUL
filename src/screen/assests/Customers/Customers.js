import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  id,
  SafeAreaView,
  Dimensions,
  onPress,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  Pressable,
} from 'react-native';

const {width} = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'Amit',
  },
  {
    id: '2',
    title: 'Rahul',
  },
  {
    id: '3',
    title: 'Aarush',
  },

  {
    id: '4',
    title: 'Aaru',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.id}>{id}</Text>
  </View>
);

const Customers = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      
      <View>
        <Text
          style={{
            alignSelf: 'center',
            margin: 40,
            fontSize: 28,
            fontWeight: 'bold',
            color: 'yellow',
            backgroundColor: 'green',
          }}>
          CUSTOMERS DEATAILS
        </Text>
      </View>

      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
                <Text style={styles.textstyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text
            style={{
              backgroundColor: 'green',
              borderRadius: 20,
              padding: 5,

              //width: 120,
              height: 30,
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              //color:'green',
              fontSize: 20,
            }}>
            Click Me
          </Text>
        </Pressable>
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>navigation.navigate("Home") }>
        <Text
          style={{
            color: 'red',
            fontSize: 28,
            fontWeight: 'bold',
            alignSelf: 'center',margin:20
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Customers;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    borderRadius: 100,
    height: 90,
    width: 150,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tiny: {
    height: 50,
    width: 50,
    borderRadius: 600,
    backgroundColor: 'green',
    padding: 10,
    alignSelf: 'center',
  },

  centerView: {
    flex: 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
    //marginTop:40,
    backgroundColor: 'green',
    borderRadius: 10,
    // height:100,
    paddingBottom: 0,

    width: 150,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'yellow',
    height: 50,
    width: 180,
    alignSelf: 'center',
    marginTop: 150,
  },
  butonClose: {
    backgroundColor: 'white',
  },
});
