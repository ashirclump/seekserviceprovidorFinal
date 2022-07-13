import React, {useState, useForm} from 'react';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const R3 = ({navigation}) => {
  const [text, settext] = useState('');

  const [num, setnum] = useState(null);

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
      <View>
        <TextInput
          value={text}
          onChangeText={settext}
          style={style.red}
          placeholder={'Bank Name*'}
          placeholderTextColor="#79747E"
          label="Password"
          mode="outlined"></TextInput>
        <Text
          style={{
            color: 'red',
            position: 'absolute',
            marginTop: 20,
            marginLeft: 40,
          }}>
          *
        </Text>
      </View>

      {/* phone */}
      <View>
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
          </View>

          <TouchableOpacity style={style.btn} onPress={() => navigation.navigate("Registeradhaar")}>
            <View
              style={{
                marginLeft: 16,
                marginRight: 10,
                marginTop: 50,
                margin: 6,
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
      </View>
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
    padding: 10,
  },
  btn: {
    marginTop: 230,
  },
});

export default R3;
