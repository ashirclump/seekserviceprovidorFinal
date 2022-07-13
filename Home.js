
import React, { Component,useState } from 'react'
import {ImageBackground, Modal,Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Location from 'react-native-vector-icons/Ionicons';
import Noti from 'react-native-vector-icons/Ionicons';
import Dot from 'react-native-vector-icons/Entypo';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import Arrow from 'react-native-vector-icons/Feather';
// import X from 'react-native-vector-icons/Feather';
import X from 'react-native-vector-icons/Octicons';

// import AppIntroSlider from 'react-native-app-intro-slider';
// import { color } from '@mui/system';
// import LinearGradient from 'react-native-linear-gradient';
// const Location = 'Location';

const Home =()=>{
  // const [height, setHeight] = React.useState(30);
  const [pop, setpop] = useState(true);  

  const slider = [
    {
      id: 1,
      title: ' Now \n even',
      image: require('./images/baner.png')
      // image: require('./images/doller.png')
    },
    {
      id: 2,
      title: ' Now \n even',
      image: require('./images/baner.png')
      // image: require('./images/doller.png')
    },
    {
      id: 3,
      title: ' Now \n even',
      image: require('./images/baner.png')
      // image: require('./images/doller.png')
    },
    {
      id: 4,
      title: ' Now \n even ',
      image: require('./images/baner.png')
      // image: require('./images/doller.png')
    }
  ]


    return (
      <ScrollView>
<View>
            <Modal animationType="slide" 
            transparent={true} 
            visible={pop}>

              <View style={style.modalcontainer}>
                <View style={style.modalview}>
                  <ImageBackground
                    source={require('./images/Modal.png')}
                    style={{height:240,width:320}}>
                 <TouchableOpacity 
                //  onPress={() => setpop(true)}
                     onPress={() => setpop(false)}
                    disabled={!setpop}>
                    <X
                      name="x-circle-fill"
                      size={25}
                      // color="#EBEBEB"
                      style={{
                        // flexDirection: 'row',
                        // justifyContent: 'flex-end',
                        marginLeft: 280,
                      }}
                    />
                  </TouchableOpacity>
                 
                 
                 <Image
                    source={require('./images/Face.png')}
                    style={{alignSelf:'center',top:20}}
                  />
                    <Text style={{marginVertical:50,textAlign:'center',margin:45,fontSize:16,fontWeight:'700',color:'#161616',lineHeight:24}}>
                      "Hurray ! You got 1 month Plus membership worth ₹999 for
                      free", "Enjoy the plus features and earn more everyday",
                    </Text>
                  </ImageBackground>
                </View>
              </View>
            </Modal>
          </View>

      <View>
        
      <TouchableOpacity>      
      <View style={{borderWidth:1,borderRadius:15,backgroundColor:'#E5E5E5',borderColor:'#E5E5E5', width:45,height:45,top:8,left:7 }} >
          {/* {/ <Icon name="navicon" size={20} color="black" style={{left:15,top:7}} /> /} */}
       <Image source={require("./images/menus.png")} style={{height:30,width:30,top:7,left:6}} />
        {/* <Image source={require("./images/line2.png")} style={{top:5,height:2.5}} />
        <Image source={require("./images/line3.png")} style={{top:11, height:2.5}} /> */}
      </View>
      </TouchableOpacity>
      <View style={{position:'absolute', alignSelf:'center',top:8}}>
        <Text style={{color:'#757575',right:10,fontSize:12}}>Location</Text>
      </View>
      <View style={{position:'absolute',left:82,top:23}}> 
      <Location name="md-location-sharp" size={17} color="black" style={{left:15,top:7}} />
      <Image source={require("./images/shadow.png")} style={{left:19,top:6}} />
     
      </View>
      <Text style={{position:'absolute',top:28,left:120,color:'#161616',fontWeight:'700',fontSize:14,fontFamily:'SF Pro'}}>Ayodhya Nagar, Bhopal</Text>
        <TouchableOpacity style={{bottom:36}} > 
        {/* onPress={() => {
    alert('You tapped the button!');}}  */}
        <View style={{alignSelf:'flex-end',position:"absolute",right:7,borderWidth:1,borderRadius:15,backgroundColor:'#E5E5E5',borderColor:'#E5E5E5', width:45,height:45}}> 
        <Noti name="notifications" size={25} color="black" style={{left:9,top:7}}  />
        </View>
        </TouchableOpacity>
        
       
        
        <View style={{borderWidth:22,borderRadius:10,borderColor:'#5E17EB',width:'95%',height:100,top:40,left:10}} >
        <Text style={{color:'#161616',fontWeight:'700',left:30,top:9.5}}>Hello, Ana</Text>
        <Text style={{left:30,top:11}} >You’ve completed 3 jobs today !</Text>
        <Image source={require("./images/hii.png")} style={{alignSelf:'flex-end',right:18,bottom:25,height:25,width:25}} />
        </View>

<View style={{top:60,left:10}}>
          <Text style={{color:'#161616',fontWeight:'700',fontSize:16}}>Ongoing service</Text>
</View>
<View>
<Image source={require("./images/banner.png")} style={{width:350,top:70,left:17,borderRadius:15}} />

</View>
<TouchableOpacity>
<View style={{position:'absolute',bottom:220,left:42,borderWidth:1,borderRadius:16,backgroundColor:'#665C50',borderColor:'#665C50', width:130,height:33}} >
  <Text style={{fontWeight:'510',color:'white',alignSelf:'center',top:5}}>Facial for glow</Text>
</View>
</TouchableOpacity>
{/* {/ <LinearGradient colors={['#8C52FF', '#8C52FF']} start={{ x: 1, y: 1 }} end={{ x: 1, y: 1 }}> /} */}
<View style={{position:'absolute',top:410,left:24}}>
        <Image source={require("./images/sadow.png")} style={{opacity: 0.3}} />
        </View>
{/* {/ </LinearGradient> /} */}
<View>
<Dot name="dot-single" size={35} color="white" style={{left:30,bottom:45}} />
<Dot name="dot-single" size={35} color="white" style={{left:30, bottom:48}} />
<Text style={{color:'white',bottom:112,left:62,fontSize:18,fontWeight:'500',}} >Clean up</Text>
<Text style={{color:'white',bottom:105,left:62,fontSize:18,fontWeight:'500'}} >Gold Facial</Text>
<Text style={{color:'white',bottom:88,left:47}}>45  mins</Text>
</View>
<View style={{position:'absolute',alignSelf:'flex-end',top:510,right:95}}>
  <TouchableOpacity>
<View style={{borderWidth:1,borderRadius:15,backgroundColor:'#665C50',borderColor:'#665C50', width:45,height:45,}}>
<Clock name="clock-time-three-outline" size={35} color="white" style={{alignSelf:'center',top:3}} />
</View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{position:'absolute',bottom:1,left:60,borderWidth:1,borderRadius:15,backgroundColor:'#665C50',borderColor:'#665C50', width:45,height:45,}}>
<Arrow name="arrow-up-right" size={35} color="white"  style={{alignSelf:'center',top:3}} />
</View>
</TouchableOpacity>
</View>
<View style={{bottom:30}}>
 
           <FlatList
             data={slider}
             horizontal={true}
             slider={true}
             showsHorizontalScrollIndicator={false}
             renderItem={({ item }) => {

                return (
                 <View style={{ alignContent: 'center', alignItems: 'center',left:8 }}>
                   <Image
                     style={{ padding: 40, margin: 10, borderRadius: 20,height:160,width:352 }}
                     source={item.image}
                   />
                   <Image
                    style={{height:165,width:242,top:9.5,left:120,borderRadius:20,position:'absolute'}}
                     source={require("./images/doller.png")}
                   />
 
                   <Text style={{ fontSize: 22, color: 'white', fontWeight: '500', textAlign: 'center', position: 'absolute', top: 40,alignSelf:'flex-start',left:15 }}>{item.title}</Text>
                   <Text style={{ fontSize: 22, color: 'white', fontWeight: '500', textAlign: 'center', position:'absolute', top: 40,alignSelf:'flex-start',left:78, color:'#F5C443'}}>earn</Text>
                   <Text style={{ fontSize: 22, color: 'white', fontWeight: '500', textAlign: 'center', position:'absolute', top: 65,alignSelf:'flex-start',left:80, color:'#F5C443'}}>more</Text>

 
                 </View>
               )
 
             }}
              />

           <View>

           </View>
           </View>
<View style={{borderWidth:1,borderRadius:25,backgroundColor:'#8C52FF',borderColor:'#8C52FF',width:327,height:55,alignSelf:'center',bottom:10}}>
  
  <TouchableOpacity>
  <View style={{borderWidth:1,borderRadius:25,backgroundColor:'#FFFFFF',borderColor:'#FFFFFF',width:102,height:33,alignSelf:'flex-start',top:10,left:12}}>
<Text style={{alignSelf:'center',top:5,fontWeight:'500'}}>this week</Text>
  </View>
  </TouchableOpacity>
  <Text style={{color:"white",alignSelf:'center',bottom:15,fontWeight:'500',left:10}}>this month</Text>
  <Text style={{color:"white",alignSelf:'flex-end',fontWeight:'500',bottom:35,right:20}}>this year</Text>
</View>




      </View>
      

      </ScrollView>
    )
  }

  const style = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    backgroundColor: '#161616CC',

    // alignItems: 'center',
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


export default Home;