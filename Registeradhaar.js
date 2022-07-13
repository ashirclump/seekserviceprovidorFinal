// // import React from 'react';

// // import {
// //   Text,
// //   StyleSheet,
// //   View,
// //   Image,
// //   TextInput,
// //   Button,
// //   TouchableOpacity,
// // } from 'react-native';

// // const App = () => {
// //   return (
// //     <View style={style.container}>
// //       <View style={style.body}>
// //         <View>
// //           <Image
// //             source={require('./images/Logo.png')}
// //             style={{
// //               height: 28,
// //               width: 140,
// //               alignSelf: 'center',
// //               marginTop: 15,
// //               marginBottom: 25,
// //               backgroundColor: 'white',
// //             }}
// //           />
// //         </View>

// //         <View>
// //           <TextInput
// //             style={style.red}
// //             placeholder="Adhaar Number"
// //             placeholderTextColor="#79747E"></TextInput>
// //         </View>

// //         <View style={[style.row]}>
// //           <View style={[style.box]} />
// //           <View style={[style.box]} />
// //         </View>

// //         {/* <View>
// //           <TextInput
// //             style={style.box}
// //             placeholder="Adhaar Number"
// //             placeholderTextColor="#79747E"></TextInput>
// //         </View>

// //         <View>
// //           <TextInput
// //             style={style.box}
// //             placeholder="Adhaar Number"
// //             placeholderTextColor="#79747E"></TextInput>
// //         </View>  */}
// //         {/* <View>
// //           <Text style={{fontSize: 20}}>next</Text>
// //         </View> */}
// //         <View style={[style.btn]}>
// //           <TouchableOpacity>
// //             <View style={[style.btn,{
// //                                     marginLeft: 16,
// //                                     marginRight: 10,
// //                                     marginTop: 70,
// //                                     margin: 6,
// //                                     height: 47,
// //                                     width: 310,
// //                                     backgroundColor: '#5E17EB',
// //                                     borderRadius: 10,
// //                                     // alignItems: 'center',
// //                                     justifyContent: 'center',
// //                                     flexDirection: "row",
// //                                     flexWrap: "wrap" }]}>
// //             <View>
// //               <Text style={{fontSize: 16, color: '#ffffff'}}>Next</Text>
// //             </View>
// //             </View>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // };
// // const style = StyleSheet.create({
// //   container: {
// //     backgroundColor: 'white',
// //     felx: 1,
// //     margin: 3,
// //   },
// //   red: {
// //     marginLeft: 16,
// //     marginRight: 10,
// //     margin: 6,
// //     height: 47,
// //     width: 310,
// //     borderWidth: 1,
// //     borderRadius: 12,
// //     padding: 10,
// //   },
// //   //   btn: {
// //   //     marginTop: 100,
// //   //     flexDirection: 'column',
// //   //         flexWrap: "wrap",
// //   btn: {
   
// //   },
// //   box: {
// //     borderWidth: 1,
// //     borderColor: '#5E17EB',
// //     //   margin: 10,
// //     height: 140,
// //     width: 140,
// //     borderStyle: 'dotted',
// //     borderRadius: 10,
// //     textAlign: 'center',
// //     justifyContent: 'center',
// //   },

// //   row: {
// //     flexDirection: 'row',
// //     flexWrap: 'wrap',
// //     // margin:10,
// //     justifyContent: 'space-evenly',
// //   },
 
// // footer:{
// //     justifyContent:'center',
// //     alignItems:'center',
// //     height:50,
        
// // },
// // });

// // export default App;

// import React from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from 'react-native';

// // import { useForm } from "react-hook-form";

// const App = () => {
//   return (
//     <View style={style.container}>
//       <View style={style.body}>
//         <View>

//         <Image
//             source={require('./images/back.png')}
//             style={{
//               // height: 28,
//               // width: 140,
//               // alignSelf: 'center',
//               marginTop: 10,
//               // marginBottom: 25,
//               marginLeft:7,
//               backgroundColor: 'white',

//             }}
//           />

//           <Image
//             source={require('./images/Logo.png')}
//             style={{
//               height: 28,
//               width: 140,
//               alignSelf: 'center',
//               marginTop: 15,
//               marginBottom: 25,
//               backgroundColor: 'white',
//               position:'absolute'
//             }}
//           />
//         </View>

//         <View>
//           <TextInput
//             style={style.red}
//             placeholder="Aadhaar number"
//             placeholderTextColor="#79747E"
//            ></TextInput>
//         </View>

//         <View style={[style.row]}>
//           <View style={[style.box]} />
//           <View style={[style.box]} />
          
//           <Text> I hereby consent to receiving communications
//               from SeekMe for any relevant opportunities
//               </Text>
//         </View>

      
//         <View style={[style.btn]}>
//           <TouchableOpacity>
//             <View style={[style.btn,{
//                                     marginLeft: 16,
//                                     marginRight: 10,
//                                     marginTop: 295,
//                                     margin: 6,
//                                     height: 47,
//                                     width: 310,
//                                     backgroundColor: '#5E17EB',
//                                     borderRadius: 10,
//                                     // alignItems: 'center',
//                                     justifyContent: 'center',
//                                     flexDirection: "row",
//                                     flexWrap: "wrap" }]}>
//             <View>
//               <Text style={{fontSize: 16, color: '#ffffff',top:10}}>Next</Text>
//             </View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };
// const style = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     felx: 1,
//     margin: 3,
//   },
//   red: {
//     marginLeft: 16,
//     marginRight: 10,
//     margin: 6,
//     top:10,
//     height: 47,
//     width: 310,
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 10,
//   },
//   //   btn: {
//   //     marginTop: 100,
//   //     flexDirection: 'column',
//   //         flexWrap: "wrap",
//   btn: {
   
//   },
//   box: {
//     borderWidth: 1.5,
//     borderColor: '#79747E',
//       marginTop: 25,
//       // top:15,
//     height: 140,
//     width: 140,
//     borderStyle: 'dashed',
//     borderRadius: 10,
//     textAlign: 'center',
//     justifyContent: 'center',
    
//   },

//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // margin:10,
//     justifyContent: 'space-evenly',
//   },
 
// footer:{
//     justifyContent:'center',
//     alignItems:'center',
//     height:100,
//     marginTop:270,
        
// },
// });

// export default App;

import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import {CheckBox} from 'react-native-check-box';

function Aadhaar ({ navigation })
{
    return (
      <ScrollView>
      <View style={style.container}>
        <View style={style.body}>
          <TouchableOpacity  onPress={() => navigation.navigate('RegisterBank')}>
            <View
              style={{
                height: 45,
                width: 45,
                // color:"",
                backgroundColor: '#F3F3F3',
                borderRadius: 15,
                justifyContent: 'center',
                marginTop: 10,
                marginLeft: 25,
              }}>
              <Left
                name="left"
                size={18}
                color="black"
                style={{
                  // height: 38,
                  // alignSelf: 'center',
                  // borderWidth:1,
                  // marginBottom: 5,
                  marginLeft: 10,
                }}
              />
            </View>
          </TouchableOpacity>
          <Image
            source={require('./images/Logo.png')}
            style={{
              height: 28,
              width: 140,
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 25,
              backgroundColor: 'white',
              position: 'absolute',
            }}
          />
          <TextInput
            style={style.red}
            placeholder="Aadhar number"
            placeholderTextColor="#79747E"
          />
        </View>
        

        <View style={[style.row]}>
          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" />
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12}}>
              Front Picture
            </Text>
          </View>

          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" />
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12}}>
              Back Picture
            </Text>
          </View>
        </View>

      

        <View style={style.footer}>
          {/* <View> */}
          <TouchableOpacity
       mode="contained" onPress={() => navigation.navigate('RegisterPan')}
        >
            <View style={[style.btn]}>
              <Text style={{color: '#ffffff'}}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    // height: '98%',
    margin:2
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    height:150
  },
  footer: {
    // marginLeft: 16,
    // marginRight: 10,
    // margin: 6,
    // height: 47,
    // width: 310,
    // top:280,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 47,
    width: 310,
    backgroundColor: '#5E17EB',
    justifyContent: 'center',
    // flexDirection: "row",
    alignItems: 'center',
    borderRadius: 10,
  },
  red: {
    marginLeft: 16,
    marginRight: 10,
    // margin: 6,
    height: 47,
    width: 310,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    top: 30,
  },
  box: {
    borderWidth: 1.5,
    borderColor: '#79747E',
    //   margin: 10,
    height: 140,
    width: 140,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  row: {
    flexDirection: 'row',
    // margin: 10,
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginBottom: 290,
  },
});
export default Aadhaar;