import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { Button } from 'react-native-paper';
const Home = ({navigation}) => {
  
  return (
    <View style={{backgroundColor: '#ffffff', height: 700}}>
      <View style={style.container}>
        
          <Image
            source={require('./images/Logo.png')}
            style={{
              height: 40,
              width: 200,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
            }}
          />
<Button onPress={() => navigation.navigate('RegisterSecond')}></Button>



      </View>
    </View>
  )
          }
const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginTop: 300,
    // flex:1,
  },
});

export default Home;



// import { Text, View,Image } from 'react-native'
// import React, { Component } from 'react' 
// export class RegisterFirst extends Component 
// {
//   constructor(props)
//     {
//   super(props);
//   setTimeout(()=>
//   {
  
//     this.props.navigation.navigate("RegisterSecond");
//   },5000);
// }
//   render()
//    {
//     return (
//       <View style={{backgroundColor: '#ffffff', height: 700}}>
//       <View >
//         {/* style={style.container}> */}
        
//           <Image
//             source={require('./images/Logo.png')}
//             style={{
//               height: 40,
//               width: 200,
//               alignSelf: 'center',
//               justifyContent: 'center',
//               backgroundColor: '#ffffff',
//             }}
//           />
// {/* <Button onPress={() => navigation.navigate('RegisterSecond')}></Button> */}
//       </View>
//     </View>  
//     )
//   }
// }
// export default RegisterFirst