import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
// import CheckBox from 'react-native-check-box';
// import {Checkbox} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Home from './Home';
import ImagePicker ,{openPicker} from 'react-native-image-crop-picker';
import Screen from './Screen';

const App = (props) => {
  const {navigation}=props;
  // const myAlert = ({}) =>Alert.alert("Hurray ! You got 1 month Plus membership worth ₹999 for free",
  // "Enjoy the plus features and earn more everyday",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel"
  //         },
  //         { text: "OK",  onPress: () => navigation.navigate("Booking") }
  //       ]
  //     );
 
  
 
    // const [uri, setUri] = React.useState(props.source?.uri || undefined);
    // const pickPicture = () => {
    //   ImagePicker.openPicker({
    //     width: 500,
    //     height: 500,
    //     // cropping: true,
    //   }).then((image) => {
    //     setUri(image.path);
    //     props.onChange?.(image);
    //   });
    // };
    
      
   




//   const openPicker = () => 
//   ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//       includeBase64: true
//   }).then(image => {("", { img : image });
  
//     //  console.log();
// });

  const [modal, setmodal] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.body}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Registeradhaar')}>
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
            placeholder="PAN"
            placeholderTextColor="#79747E"
          />
        </View>

        {/* <View style={[style.row]}>
        <TouchableOpacity  onPress={openPicker}>
          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" style={{position:'absolute',top:50}}/>
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12,top:60}}>
              Front Picture
            </Text>
            <TouchableOpacity onPress={pickPicture}>
        <Image
          style={style.avatar}
          {...props}
          source={uri ? { uri } : props.source}
        />
      </TouchableOpacity>
          </View>
          </TouchableOpacity>

<TouchableOpacity onPress={openPicker}>
          <View style={[style.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" />
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12}}>
              Back Picture
            </Text>
          </View>
          </TouchableOpacity>
        </View> */}
        <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-evenly'}}>
<Screen/>
<Screen/>
</View>
        <View>
          <View style={{bottom: 30, marginLeft: 10}}>
            <CheckBox
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: '#5E17EB', false: ''}}
              onPress={() => setmodal(true)}
            />
          </View>

          <View
            style={{
              bottom: 25,
              position: 'absolute',
              padding: 1,
              alignSelf: 'center',
            }}>
            <Text style={{color: '#161616', fontSize: 14}}>
              I hereby consent to receiving communications
            </Text>
            <Text style={{color: '#161616', fontSize: 14}}>
              from SeekMe for any relevant opportunities
            </Text>
          </View>
        </View>
        
        <View style={style.footer}>
          {/* <View> */}
          <TouchableOpacity
            // disabled={!modal}
            onPress= { () => navigation.navigate("Home")}
            
            disabled={!toggleCheckBox}>
            <View style={[style.btn]}>
              <Text style={{color: '#ffffff'}}>Submit</Text>
            </View>
          </TouchableOpacity>

         
        </View>

      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    // height: '115%',
    margin: 2,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    height: 150,
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
    marginBottom: 270,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: '#161616CC',

    // alignItems: 'center',
  },
  avatar: {
    // paddingTop: 20,
    height: 130,
    width: 130,
    bottom:9,
    // backgroundColor:'red',
    // position:'absolute',
    // borderRadius: 100,
    // padding: 20,
  },
  modalview: {
    flex:0.6,
    height:240,
    width:320,
    // flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    marginLeft:10,
    marginTop: 200,
    borderRadius: 20,
  },
});
export default App;
