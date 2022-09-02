import React ,{useState} from 'react';
import { Button, Card } from 'react-native-paper';
// import { CallingCodePicker } from '@digieggs/rn-country-code-picker';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import PhoneInput from "react-native-phone-number-input";


const App =({navigation})=>{
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  // const phoneInput = useState<PhoneInput>(null);
return(

      <View style={style.container}>
        <View>
          <Image
            source={require('./images/Logo.png')}
            style={{
              height: 28,
              width: 140,
              alignSelf: 'center',
              marginTop: 15,
              marginBottom: 25,
              backgroundColor: 'white',
            }}
          />
        </View>
        <View>
          <TextInput
            style={style.red}
            placeholder="Full Name"
            placeholderTextColor="#79747E"></TextInput>
        </View>



 <View style={{height:49,width:310,margin: 6,
    borderRadius: 10,marginLeft: 15,borderWidth: 1,}}>



          <View style={{height:47,width:380,backgroundcolor:'red',marginLeft:6 ,justifyContent:'center'
  }}>
          <PhoneInput  
           // State={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            placeholder='Mobile Number'
            // ContainerStyle={{backgroundColor: 'red'}}




            ContainerStyle={{backgroundColor: 'red'}}
            textInputStyle={{color:"#79747E",padding:0,alignSelf:'center'}}
            codeTextStyle={{color:"#79747E",height:22}}
            flagButtonStyle={{color:"#79747E",marginRight:0}}
            textContainerStyle={{backgroundColor:'#fff',borderLeftWidth:1,padding:0,height:47,marginRight:15,}}
            // placeholder="Numéro de téléphone"
            phoneInputContainer={false}
            textInputProps={{placeholderTextColor:"#79747E",fontSize:16}}

            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            // onChangeCountry={() => {
            //   const checkValid = phone.current?.isValidNumber(value);
            //   setShowMessage(true);
            //   setValid(checkValid ? checkValid : false);
            // }}
           
          ></PhoneInput>
          </View> 
       </View>

        <View>
          <TextInput
            style={style.red}
            placeholderTextColor="#79747E"
            placeholder="Email address"></TextInput>
          <View>
            <View>
              <TextInput
                style={style.red}
                placeholderTextColor="#79747E"
                placeholder="City"></TextInput>
            </View>

            <View>
              <Image
                source={require('./images/Vector.jpg')}
                style={{
                  height: '9%',
                  width: '3%',
                  marginTop:28,
                  marginLeft: 302,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  position: 'absolute',
                }}
              />

              <TextInput
                style={style.red}
                placeholder="Work type"
                placeholderTextColor="#79747E"></TextInput>
            </View>
          </View>
        </View>

        <TouchableOpacity style={style.btn} onPress={() => navigation.navigate("RegisterBank")}>
          <View
            style={{
              marginLeft: 16,
              marginRight: 10,
              marginTop: 60,
              // margin: 6,
              height: 47,
              width: 310,
              backgroundColor: '#5E17EB',
              borderRadius: 10,
              // flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: '#ffffff'}}>Next</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  red: {
    marginLeft: 16,
    marginRight: 10,
    margin: 6,
    height: 47,
    width: 310,
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  btn: {
    marginTop: 170,
  },
 
})

export default App;




 {/* phone */}
        {/* <CallingCodePicker onValueChange={callingCode => setSelectedCallingCode(callingCode)} />; */}
        
        {/* <View style={style.red}>
          
          <Image
            source={require('./images/Flagg.png')}
            style={{
              height: 22,
              width: 22,
              marginLeft:4,
              backgroundColor: 'white',
              justifyContent:'center'
            }}
          />
          <Text style={{position: 'absolute', marginLeft: 43, marginTop: 12,fontSize:16}}>
            +91
          </Text>

          {/* <Ionicons name='albums'
            style={{ fontSize: 20,position:'absolute',justifyContent:"space-between",margin:15,alignSelf:'flex-end'}}
          ></Ionicons> */}

          {/* <View style={{position: 'absolute', marginTop: 14}}>
            <Image
              source={require('./images/SortDown.png')}
              style={{
                height: 15,
                width: 15,
                marginHorizontal: 70,
                backgroundColor: 'white',
                // flexDirection: 'row',
              }}
            />
          </View> */}

          {/* <TextInput
            placeholderTextColor="#79747E"
            placeholder="Mobile Number"
            style={{
              borderLeftWidth: 1,
              position: 'absolute',
              marginLeft: 90,
              padding: 9,
            }}></TextInput>
        </View> */}