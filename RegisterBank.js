import React, { useState, useForm } from 'react';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const R3 = ({ navigation }) => {
  const [isFocused, setFocused] = useState(false)
  const [isFoc, setFoc] = useState(false)
  const [isFocu, setFocu] = useState(false)
  const [isFo, setFo] = useState(false)

  const [text, setText] = useState(false)
  const [tex, setTex] = useState(false);
  const [te, setTe] = useState(false);
  const [texx, setTexx] = useState(false);

  return (
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

      <View style={style.red}>
        <View style={{ position: 'absolute', justifyContent: 'center' }}>
          <View style={{ position: 'absolute' }}>
            {(te || isFo) ? null : <View style={{ flexDirection: 'row' }}>
              <Text style={style.text}>Bank Name</Text><Text style={{ color: '#EA3356' }}> *</Text></View>}
          </View>
          <TextInput onChangeText={t => setTe(t)} style={{ height: 47, width: 310, borderRadius: 12 }}
            onFocus={() => setFo(false)} />
        </View>
      </View>

      <View>
        <View style={style.red}>
          <View style={{ position: 'absolute', justifyContent: 'center' }}>
            <View style={{ position: 'absolute' }}>
              {(text || isFocused) ? null : <View style={{ flexDirection: 'row' }}>
                <Text style={style.text}>Account Number </Text><Text style={{ color: '#EA3356' }}> *</Text></View>}
            </View>
            <TextInput onChangeText={t => setText(t)} style={{ height: 47, width: 310, borderRadius: 12 }}
              secureTextEntry={true} onFocus={() => setFocused(false)} keyboardType='phone-pad'
            />
          </View>
        </View>
      </View>

      <View style={style.red}>
        <View style={{ position: 'absolute', justifyContent: 'center' }}>
          <View style={{ position: 'absolute' }}>
            {(tex || isFoc) ? null : <View style={{ flexDirection: 'row' }}>
              <Text style={style.text}>Re-Enter Account Number </Text><Text style={{ color: '#EA3356' }}> *</Text></View>}
          </View>
          <TextInput onChangeText={a => setTex(a)} style={{ height: 47, width: 310, borderRadius: 12 }}
            onFocus={() => setFoc(false)} keyboardType='phone-pad' />
        </View>

      </View>
      <View style={style.red}>
        <View style={{ position: 'absolute', justifyContent: 'center' }}>
          <View style={{ position: 'absolute' }}>
            {(texx || isFocu) ? null : <View style={{ flexDirection: 'row' }}>
              <Text style={style.text}>IFSC</Text><Text style={{ color: '#EA3356' }}> *</Text></View>}
          </View>
          <TextInput onChangeText={b => setTexx(b)} style={{ height: 47, width: 310, borderRadius: 12 }}
            onFocus={() => setFocu(false)} />
        </View>
      </View>
      <TouchableOpacity style={style.btn} onPress={() => navigation.navigate("Registeradhaar")}>
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
          <Text style={{ fontSize: 16, color: '#ffffff' }}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
    // padding: 19,

    // justifyContent:'center',
    // alignItems:'center'
  },
  btn: {
    marginTop: 230,
  },
  text: {
    marginLeft: 8,
    color: "#79747E",
    fontSize: 16,
  },
});

export default R3;








{/* <View>
        <TextInput
          // value={text}
          // onChangeText={settext}
          style={style.red}
          // onFocus={() => title ? <Text style={{color: 'red',fontSize: 17,height: 13,}}>*</Text>:<Text></Text> }
          // onChangeText ={
          placeholder={('Bank Name*')}
          placeholderTextColor="#79747E"
          label="Password"
          mode="outlined">
        </TextInput>
        {/* <TextInput
          // disableFullscreenUI={true}
          style={style.red}
      keyboardType="numeric"
      placeholder={('**')}

      placeholderTextColor="red"
      // value={inputOTP}
      // onChangeText={text => setInputOTP(text)}
      // style={styles.textInput}
></TextInput> */}

{/* <Text
          style={{
            color: 'red',
            position: 'absolute',
            marginTop: 20,
            marginLeft: 40,
          }}>
          *
        </Text>  */}
{/* </View> */ }

{/* phone */ }
{/* <View>
        <TextInput
          secureTextEntry={true}
          value={num}
          keyboardType={'number-pad'}
          onChangeText={setnum}
          style={style.red}
          placeholderTextColor="#79747E"
          placeholder="Account Number *"></TextInput>
      </View>

      <View>
        <TextInput
          style={style.red}
          placeholderTextColor="#79747E"
          keyboardType={'number-pad'}
          placeholder="Re-enter Account Number *"></TextInput>
        <View>
          <View>
            <TextInput


              style={style.red}
              placeholderTextColor="#79747E"
              placeholder="IFSC*">
            </TextInput>




 */}

{/* <TextInput
      keyboardType="numeric"
      placeholder={('fsdfdsf**')}

      placeholderTextColor="red"
      value={inputOTP}
      onChangeText={text => setInputOTP(text)}
      // style={styles.textInput}
/> */}
{/* 
import React from 'react';
import { AvField } from 'availity-reactstrap-validation';

const MyField = ({label, ...rest}) => {
  if (rest.required) {
    label = <>{label}<sup>*</sup></>;
  }
  return <AvField label={label} {...rest} />;
}

export default MyField; */}
















