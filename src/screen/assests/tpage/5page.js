//googlepage

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Button,
//   Alert,
//   onPress,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.maincontainer}>
//         <Text
//           style={{
//             fontSize: 38,
//             alignSelf: 'center',
//             color: 'white',
//             marginTop: 80,
//             fontWeight: 'bold',
//           }}>
//           Login to Continue
//         </Text>
//         <View style={styles.set}>
//           <TouchableOpacity style={{flexDirection: 'row'}}>
//             <Image
//               style={styles.image}
//               source={require('./image/f3.png')}></Image>
//             <View style={{marginTop: 10}}>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   paddingHorizontal: -0.5,
//                   textAlign: 'center',
//                   marginTop: 15,
//                   fontWeight: 'bold',
//                   color: 'black',
//                   paddingRight: 5,
//                 }}>
//                 Login with Google{' '}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             color: 'white',
//             textAlign: 'center',
//             marginTop: 50,
//             fontSize: 28,
//           }}>
//           OR
//         </Text>
//         <View>
//           <TextInput
//             keyboardType="email-address"
//             placeholder={'Your  Mail '}
//             placeholderTextColor="#96ACB1"
//             style={styles.input}></TextInput>

//           {/* <TextInput
//             keyboardType="default"
//             placeholder={'Your Number'}
//             placeholderTextColor="#96ACB1"
//             style={styles.input}></TextInput> */}
//           <TextInput
//             keyboardType="default"
//             placeholder={'Your Password'}
//             placeholderTextColor="#96ACB1"
//             style={styles.input}></TextInput>
//         </View>
//         <TouchableOpacity style={styles.btn4}>
//           <Text
//             style={{fontWeight: 'bold', fontSize: 28, color: 'white'}}
//             onPress={() => Alert.alert('Successfuly Login')}>
//             Next
//           </Text>
//         </TouchableOpacity>
//         <View style={{marginTop: 30, alignSelf: 'center'}}>
//           <View style={{flexDirection: 'row'}}>
//             <Text style={{fontSize: 18, color: 'white'}}>
//               Crete New Account.
//             </Text>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   textDecorationLine: 'underline',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   fontSize: 18,
//                   marginLeft: 10,
//                 }}>
//                 SignUp
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text
//                 style={{
//                   textDecorationLine: 'underline',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   marginLeft: 10,
//                   fontSize: 18,
//                 }}>
//                 Here
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity style={styles.btn5}>
//           <Text
//             style={{fontWeight: 'bold', fontSize: 28, color: 'white'}}
//             onPress={() => Alert.alert('AMIT KUMAR GUPTA' )}>
//             @DESIGNE BY
//           </Text>
//         </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   maincontainer: {
//     backgroundColor: '#4CA1b4',
//     height: height * 1,
//   },
//   image: {
//     borderRadius: 100,

//     //borderRightWidth: 100/25,
//     height: 60,
//     width: 40,

//     marginTop: 10,
//     marginBottom: 200,
//     width: 150,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     paddingRight: 150,
//   },
//   set: {
//     backgroundColor: 'white',
//     marginTop: 20,
//     //borderRadius: 80,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     width: width * 0.85,
//     marginLeft: 30,
//     height: height / 10,

//     //height: 190,
//     //marginHorizontal:20,
//     marginRight: 20,
//     paddingHorizontal: 9,
//     textAlign: 'left',
//     fontSize: 18,
//   },
//   input: {
//     backgroundColor: 'white',
//     marginTop: 20,
//     fontWeight: 'bold',

//     marginLeft: 35,
//     borderRadius: 80,
//     width: width / 1.7,
//     height: 30,
    
//     textAlign: 'center',
//     fontSize: 18,

//     alignSelf: 'center',
//   },
//   btn4: {
//     marginTop: 30,
//     fontSize: 20,
//     //textAlign: 'center',
//     //borderRadius: 10,
//     //color: 'blue',
//     borderWidth: 1,
//     borderRadius: 30,
//     marginLeft: 30,
//     backgroundColor: '#0F5566',
//     width: width / 4,
//     height: 40,
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
//   btn5: {
//     marginTop: 20,
//     fontSize: 20,
//     //textAlign: 'center',
//     //borderRadius: 10,
//     //color: 'blue',
//     borderWidth: 1,
//     borderRadius: 10,
//     //marginLeft: 30,
//     backgroundColor: 'red',
//     width: width / 2,
//     height: 40,
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
// });


//welcompage

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Button,
//   Image,
//   Dimensions,
//   Alert,
//   onpress,
//   TouchableOpacity,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container1}>
// <View style={styles.image}>
//   <Image
//     style={styles.image}
//     source={require('./image/logocom.png')}></Image>
// </View>

//         <Text style={styles.a3}>Welcome!</Text>
//       </View>
//       <View style={styles.container}>
//         <View>
//           <View>
//             <Text style={styles.txt}>Username</Text>
//           </View>
//           <TextInput
//             placeholder="Enter email or Phone"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>

//           <View>
//             <View>
//               <Text style={styles.txt}>Password</Text>
//             </View>
//             <TextInput
//               placeholder="Enter Password"
//               placeholderTextColor={'red'}
//               style={styles.input1}></TextInput>
//           </View>
//           <View style={{flexDirection: 'row'}}>
// <TouchableOpacity style={styles.btn3}>
// <Text
//   style={{fontWeight: 'bold', fontSize: 18}}
//   onPress={() => Alert.alert('Successfuly Sign In')}>
//   Sign In
// </Text>
// </TouchableOpacity>

//             <TouchableOpacity style={styles.btn4}>
//               <Text
//                 style={{fontWeight: 'bold', fontSize: 18}}
//                 onPress={() => Alert.alert('Successfuly Sign Up')}>
//                 Sign Up
//               </Text>
//             </TouchableOpacity>
//           </View>
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: 'bold',
//               textAlign: 'center',
//               marginTop: 20,
//             }}>
//             @DESIGN BY AMIT KUMAR GUPTA
//           </Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container1: {
//     backgroundColor: '#4267B2',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     // padding: 150,
//   },
//   container: {
//     backgroundColor: 'cyan',

//     //paddingTop:490,
//     //borderTopLeftRadius:30,
//     //borderTopRightRadius:30,
//     //marginTop:-30,
//     paddingBottom: 500,
//     marginBottom: 20,
//   },

//   a3: {
//     fontWeight: 'bold',
//     margin: 10,
//     color:'white',
//     fontSize:18,
//     marginTop: 100,
//     marginBottom:50,
//     height: height / 50,
//   },
//   input: {
//     textAlign: 'left',
//     borderRadius: 800,
//     backgroundColor: '#22E383',
//     borderWidth: 1,
//     width: width * 0.9,
//     margin: 20,
//     height: 40,
//     alignSelf: 'baseline',
//   },
//   text1: {
//     marginTop: 0,
//   },
//   input1: {
//     // textAlign:'center',
//     // borderRadius:800,

//     // borderWidth:2,
//     // width:width/2,
//     // alignSelf:'baseline',
//     textAlign: 'left',
//     borderRadius: 800,
//     backgroundColor: '#22E383',
//     borderWidth: 1,
//     width: width * 0.9,
//     height: 40,
//     margin: 20,
//     alignSelf: 'baseline',
//   },
//   txt: {
//     alignSelf: 'auto',
//     marginTop: 20,
//     paddingLeft: 30,
//   },
//   btn3: {
//     marginTop: 30,
//     fontSize: 20,
//     textAlign: 'center',
//     //borderRadius: 10,
//     color: 'blue',
//     borderWidth: 1,
//     borderRadius: 20,
//     backgroundColor: 'green',
//     width: width / 4,
//     height: 30,
//     marginLeft: 65,
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
//   btn4: {
//     marginTop: 30,
//     fontSize: 20,
//     textAlign: 'center',
//     //borderRadius: 10,
//     //color: 'blue',
//     borderWidth: 1,
//     borderRadius: 20,
//     marginLeft: 60,
//     backgroundColor: 'white',
//     width: width / 4,
//     height: 30,
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     height: 150,
//     marginTop: 20,
//     width: 150,
//     borderRadius: 800,
//     alignSelf: 'center',
//     backgroundColor: 'green',
//   },
// });



//facebook



// import React from 'react';
// import {


// SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Button,
//   Image,
//   onPrees,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         <View style={styles.image}>
//           <Image
//             style={styles.image}
//             source={require('./image/Logo.png')}></Image>
//         </View>
//         <View style={styles.main}>
//           <TextInput
//             placeholder="Eter email or Phone"
//             placeholderTextColor={'black'}
//             style={styles.input}></TextInput>

//           <View>
//             <TextInput
//               placeholder="Eter email or Phone"
//               placeholderTextColor={'black'}
//               style={styles.input1}></TextInput>
//           </View>
//           <View>
//             <TouchableOpacity>
//               <Text style={styles.btn} >Login</Text>
//             </TouchableOpacity>
//           </View>

//           <View>
//             <TouchableOpacity>
//               <Text style={styles.btn1}>Login With Browser</Text>
//             </TouchableOpacity>
//           </View>

//           <View>
//             <TouchableOpacity>
//               <Text style={styles.btn2}>SignUp For Facebook</Text>
//             </TouchableOpacity>
//           </View>

//           <View>
//             <TouchableOpacity>
//               <Text style={styles.btn3}>Foget Password</Text>
//             </TouchableOpacity>
//           </View>
//           <View>
//             <Text style={styles.de}>@DESIGN BY AMIT KUMAR GUPTA</Text>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   main: {
//     //backgroundColor: 'skyblue',
//     height: height * 1,
//     width: width * 1,
//     //marginTop:40,
//   },
//   container: {
//     backgroundColor: '#4267B2',
//   },
//   input: {
//     backgroundColor: 'white',
//     marginTop: 50,
//     //borderRadius:600,
//     width: width / 2,
//     height: 50,
//     textAlign: 'center',
//     alignSelf: 'center',
//   },
//   input1: {
//     backgroundColor: 'white',
//     marginTop: 20,
//     //borderRadius:600,
//     width: width / 2,
//     height: 50,
//     textAlign: 'center',
//     alignSelf: 'center',
//   },
//   btn: {
//     backgroundColor: '#1567C6',
//     marginTop: 50,
//     fontSize: 20,
//     //borderRadius: 100,
//     width: width / 2,
//     alignSelf: 'center',
//     color: 'white',
//     textAlign: 'center',
//   },
//   btn1: {
//     // backgroundColor: 'cyan',
//     marginTop: 30,
//     fontSize: 20,
//     textAlign: 'center',
//     //borderRadius: 10,
//     width: width / 2,
//     color: 'white',
//     alignSelf: 'center',
//   },
//   btn2: {
//     marginTop: 30,
//     fontSize: 20,
//     color: 'white',
//     textAlign: 'center',
//     //borderRadius: 10,
//     width: width / 2,
//     color: 'white',
//     alignSelf: 'center',
//   },

//   btn3: {
//     marginTop: 30,
//     fontSize: 20,
//     textAlign: 'center',
//     //borderRadius: 10,
//     color: 'white',
//     width: width / 2,
//     alignSelf: 'center',
//   },

//   image: {
//     height: 150,
//     width: 150,
//     borderRadius: 800,
//     alignSelf: 'center',
//     backgroundColor: '#4267B2',
//   },
//   de: {
//     marginTop: 140,
//     color: 'red',
//     textAlign: 'center',
//   },
// });


//instgram 

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   StyleSheet,
//   Image,
//   Button,
//   Alert,
//   onPress,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// const App = () => {
//   return (
//     // <SafeAreaView>
//     <View>
//       <View style={styles.maincontainer}>
//         <View style={styles.image}>
//           <Image
//             style={styles.image}
//             source={require('./image/insta.png')}></Image>
//         </View>
//         <View style={styles.ss}>
//           <TouchableOpacity style={{flexDirection: 'row'}}>
//             <Image
//               style={styles.img}
//               source={require('./image/faclogo.png')}></Image>
//             <Text
//               style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 fontWeight: 'normal',
//                 marginTop: 40,
//                 alignSelf: 'center',

//                 alignItems: 'center',
//                 //paddingRight:10,
//                 paddingLeft: 5,
//                 //marginHorizontal:20,
//               }}>
//               Login with Facebook
//             </Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.container}>
//           <View style={styles.page}>
//             <Text>Instagram Username :</Text>
//             <TextInput
//               placeholder={'enter email or phone'}
//               placeholderTextColor="white"
//               style={styles.input} ></TextInput>
//           </View>
//           <View style={styles.page}>
//             <Text>Instagram Password :</Text>
//             <TextInput
//               placeholder={'enter password'}
//               placeholderTextColor="white"
//               style={styles.input}></TextInput>
//           </View>
//           <TouchableOpacity>
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontWeight: 'normal',
//                 marginTop: 20,
//                 alignSelf: 'center',
//                 marginTop: 40,
//               }}
//               onPress={() => Alert.alert('Reset password or Not')}>
//               Reset Password
//             </Text>
//           </TouchableOpacity>
//           <View>
//             <TouchableOpacity>
//               <Text
//                 style={styles.main}
//                 onPress={() => Alert.alert('Successfuly Login')}>
//                 Login
//               </Text>
//             </TouchableOpacity>
//             <View style={styles.sett}>
//               <TouchableOpacity style={{flexDirection: 'row'}}>
//                 <Image
//                   style={styles.img2}
//                   source={require('./image/f1.png')}></Image>
//                   <Text style={{fontSize: 18, paddingHorizontal: 10}}>
//                   Login with Facebook{' '}
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{flexDirection: 'row'}}>
//                 <Image
//                   style={styles.img2}
//                   source={require('./image/f2.png')}></Image>
//                 <Text style={{fontSize: 18, paddingHorizontal: 10}}>
//                   Login Insta{' '}
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={{flexDirection: 'row'}}>
//                 <Image
//                   style={styles.img2}
//                   source={require('./image/f3.png')}></Image>
//                   <Text style={{fontSize: 18, paddingHorizontal: 10}}>
//                   Login with Google{' '}
//                 </Text>
//               </TouchableOpacity>
//               <Text style={{fontSize:18,marginTop:10,color:'red'}}>@DESIGN BY AMIT KUMAR GUPTA</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//     // </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   maincontainer: {
//     height: height * 1,
//     backgroundColor: '#3f729b',
//     borderRadius: 30,
//   },
//   container: {
//     marginTop: 20,

//     // height:height*1,
//     // borderRadius:40,
//     // borderRightWidth:30,
//     height: height * 1,
//     backgroundColor: '#22E383',
//     borderRadius: 30,
//   },
//   main: {
//     textAlign: 'center',
//     borderRadius: 600,
//     backgroundColor: '#3f729b',
//     borderWidth: 1,
//     width: width / 2,
//     fontWeight: 'bold',
//     fontSize: 28,
//     margin: 20,
//     marginTop: 20,
//     height: 40,
//     alignSelf: 'center',
//   },
//   page: {
//     marginTop: 20,
//     alignSelf: 'baseline',
//     marginHorizontal: 30,
//     //backgroundColor:'red'
//   },
//   image: {
//     borderRadius: 800,
//     height: 150,
//     marginTop: 20,
//     width: 150,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     paddingRight: 10,
//   },
//   input: {
//     backgroundColor: '#3f729b',
//     marginTop: 10,
//     borderRadius: 10,
//     width: width / 1.2,
//     height: 50,
//     textAlign: 'left',
//     fontSize: 18,
//     //alignSelf: 'center',
//   },
//   input1: {
//     backgroundColor: '#3f729b',
//     marginTop: 10,
//     borderRadius: 10,
//     width: width / 1.2,
//     height: 50,
//     textAlign: 'left',
//     fontSize: 18,
//     //alignSelf: 'center',
//   },
//   img: {
//     borderRadius: 800,
//     height: 40,
//     //marginHorizontal:60,
//     marginTop: 20,
//     width: 40,
//     //paddingRight:70,
//     alignItems: 'center',

//     alignSelf: 'center',
//   },
//   ss: {
//     backgroundColor: 'skyblue',
//     marginTop: 10,
//     borderRadius: 10,
//     width: width * 1,
//     height: 70,
//     //marginHorizontal:20,
//     marginRight: 20,
//     paddingHorizontal: 90,
//     textAlign: 'left',
//     fontSize: 18,
//   },
//   img2: {
//     borderRadius: 800,
//     height: 40,
//     //marginHorizontal:60,
//     marginTop: 20,
//     width: 40,
//     //paddingRight:70,
//     alignItems: 'center',

//     alignSelf: 'center',
//   },
//   sett: {
//     marginHorizontal: 50,
//   },
// });

// loginpage

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,

//   StyleSheet,
//   Button,
//   Dimensions,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// const App = () => {
//   return (
//     <SafeAreaView>
//       <View style={styles.container}>
//         {/* <View style={styles.image}>
//           <Image
//             style={styles.image}
//             source={require('../amit1/src/assests/Screen/images/logo.png')}
//           />
//         </View> */}

//         <View style={styles.login}>
//           <Text style={styles.login}>Login</Text>
//         </View>
//         <View>
//           <Text style={styles.text1}>Name:</Text>

//           <TextInput
//             placeholder="Enter your name"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>

//           <Text style={styles.text1}>Email:</Text>

//           <TextInput
//             placeholder="Enter Your Email"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>
//           <Text style={styles.text1}>Phone:</Text>

//           <TextInput
//             placeholder="Enter Your Phone"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>

//           <Text style={styles.text1}>Address:</Text>

//           <TextInput
//             placeholder="Enter Your Address"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>
//           <Text style={styles.text1}>Password</Text>

//           <TextInput
//             placeholder="Enter Your Password"
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>
//           <Text style={styles.text1}>Confirm Password:</Text>

//           <TextInput
//             placeholder="Enter Your Confirm Password "
//             placeholderTextColor={'red'}
//             style={styles.input}></TextInput>

//           <View style={styles.btn}>

            
//             <Button      style={styles.btn} title="SUBMIT"></Button>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   login: {
//     //backgroundColor:'green',
//     //marginTop:20,
//     fontSize: 50,
//     color: 'red',
//     // justifyContent:'center',
//     alignSelf: 'center',
//   },
//   input: {
//     //backgroundColor:'red',
//     marginTop: 10,
//     // marginRight:100,
//     alignItems: 'stretch',
//     borderWidth: 1,
//     //backgroundColor:'red',
//     //placeholderTextColor:'red',
//     borderRadius: 10,
//     width: width * 1,
//     height: height * 0.04,
//   },
//   text1: {
//     fontSize: 20,
//     //textAlign:'center'
//   },
//   btn: {
//     backgroundColor: 'red',
//     marginTop: 10,
//     fontSize: 20,
//     borderRadius: 10,
//     width: width / 2,
//     alignSelf: 'center',
//   },
//   // image: {
//   //   height: 150,
//   //   width: 150,
//   //   alignSelf: 'center',
//   //   borderRadius: 800,
//   // },
//   container: {
//     backgroundColor: 'cyan',
//     height: height * 1,
//     width: width * 1,
//   },
//   // image: {
//   //   alignItems: 'center',
//   //   marginTop: 20
//   // }
// });
