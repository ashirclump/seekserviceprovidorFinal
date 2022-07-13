import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';


const Book = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  const [value, setValue] = React.useState('first');
  return (
    
    <View style={style.container}>
      <View style={style.body}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterPan')}>
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
        <Text
          style={{
            alignSelf: 'center',
            top: 20,
            justifyContent: 'center',
            // marginTop: 15,
            // marginBottom: 25,
            fontSize: 20,
            color: '#161616',
            fontWeight: '700',
            position: 'absolute',
          }}>
          Delay Booking
        </Text>
        <View style={style.red}>
          <Text style={{marginLeft: 16, justifyContent: 'center'}}>
            Delay By
          </Text>
        </View>
      </View>


      <View style={[style.row]}>

      <TouchableOpacity>
        <View style={[style.box]}>
        <Text style={{margin: 3, color: '#161616', fontSize: 12}}>
            15 mins
          </Text>
        </View>
        </TouchableOpacity>


<TouchableOpacity>
<View style={[style.box, {borderColor: '#5E17EB',backgroundColor:'#F2ECFD'}]}>
          {/* <AntDesign name="pluscircle" size={30} color="#5E17EB" /> */}
          <Text style={{margin: 3, color: '#161616', fontSize: 12}}>
            20 mins
          </Text>
        </View>

</TouchableOpacity>

<TouchableOpacity>
<View style={[style.box]}>
          {/* <AntDesign name="pluscircle" size={30} color="#5E17EB" /> */}
          <Text style={{margin: 3, color: '#161616', fontSize: 12}}>
            30 mins
          </Text>
        </View></TouchableOpacity>       
  
      </View>
      

      <View style={style.Rea}>
        <Text style={{marginLeft: 16, justifyContent: 'center'}}>
          Reason For Delay
        </Text>
      </View>


{/*     
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View>
        <Text>              First</Text>
        <RadioButton value="first" />
      </View>
      <View>
        <Text style={{flexWrap:'wrap',marginTop:26,position:'absolute'}}>               Second</Text>
        <RadioButton value="seco"  />
      </View>
    </RadioButton.Group>

 */}



      <View style={{margin:2,padding:2,justifyContent:'space-around',flexDirection:'column',backgroundColor:'#fff',color:'#161616',fontSize:14}} >
      <View>
      <Text style={style.Text}>A reason here for delay of booking </Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        color="#5E17EB"
        onPress={() => setChecked('first')}
      />
      </View>


      <View>
      <Text style={style.Text}>A reason here for delay of booking, a reasonhere for delay of booking
        </Text>

      <RadioButton
      color="#5E17EB"
      value="Second"
      status={ checked == 'Second' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('Second')}      />
      </View>


      <View>
      <Text style={style.Text}>A reason here for delay of booking </Text>
      <RadioButton
      color="#5E17EB"
        value="Third"
        status={ checked === 'Third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Third')}
      />
      </View>

      <View>
      <Text style={style.Text}>A reason here for delay of booking a reasonhere for delay of booking </Text> 
        <RadioButton
        color="#5E17EB"
        value="fourth"
        status={ checked === 'Fourth' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Fourth')}
      />
      </View>
        </View>
    
<View style={{height:120,borderRadius:20,margin:10,backgroundColor:'#F3F3F3'}}>
      <TextInput placeholder="or comment here.."></TextInput>
</View>

        <View >
          <TouchableOpacity style={[style.btn]}>
            {/* mode="contained" */}
            {/* // onPress={() => navigation.navigate('Pan')}> */}
            <Text style={{color: '#ffffff',alignSelf:'center',alignContent:'center'}}>Submit</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
        }

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // height: '90%',
    margin: 2,
    //   alignSelf:'center'
  },
  body: {
    justifyContent: 'center',
  },

  btn: {
    height: 47,
    width: 320,
    marginLeft:9,
    // margin:10,
    backgroundColor: '#5E17EB',
    justifyContent:'center',
    borderRadius: 10,
  },
  red: {
    backgroundColor: '#F3F3F3',
    color: '#757575',
    height: 76,
    padding: 10,
    top: 30,
    // justifyContent: 'center',
  },
  box: {
    borderWidth: 1,
    borderColor: '#E3E3E3',
      margin: 15,
    height: 47,
    width: 95,
    margin: 40,
    //   borderStyle: 'dashed',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Rea:{
    backgroundColor: '#F3F3F3',
    color: '#757575',
    height: 46,
    justifyContent:'center',
    // padding: 20,
    // marginTop: 15,
  },

  row: {
    flexDirection: 'row',
    // margin: 10,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
      // marginBottom: 340,
  },
  Text:{
    position:'absolute',
    marginTop:5,
    marginLeft:35,
  },
});

export default Book;
