import React ,{useState } from 'react';
import { ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  Modal,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import X from 'react-native-vector-icons/Feather';
import Y from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';

import ImagePicker ,{openCamera, openPicker} from 'react-native-image-crop-picker';

const Screen = (props) => {
  const {navigation,closeCallback,closeTouch}=props;
  const [pop, setpop] = useState([]);  
  // const closeCallback={() => setPop(false)};
  // const closeTouch={() => setPop(false)};
  const [uri, setUri] = useState(props.source?.uri || undefined);
  const pickPicture = () => {
    

    ImagePicker.openCamera({
      // width: 300,
      // height: 300,
      // cropping: true,
    }).then((image) => {
      setUri(image.path);
      props.onChange?.(image);
    });
  };

  const openPicker = () => {
  ImagePicker.openPicker({
    // width: 300,
    // height: 300,
    // cropping: true,
  }).then((image) => {
    setUri(image.path);
    props.onChange?.(image);
  });
};
    // const Ifont = 'Poplin';
    
    return (
        <View>
             {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}> */}
             <View style={[styles.row]}>
        <TouchableOpacity>
          <View style={[styles.box]}>
            <AntDesign name="pluscircle" size={30} color="#5E17EB" style={{position:'absolute',top:50}}/>
            <Text style={{margin: 3, color: '#8C52FF', fontSize: 12,top:70}}>
            {props.title}
            </Text>
            <TouchableOpacity  onPress={() => setpop(true)}>
        <Image
          style={styles.avatar}
          {...props}
          source={uri ? { uri } : props.source}
        />
      </TouchableOpacity>
          </View>
          </TouchableOpacity>

        {/* </View> */}
                    {/* <TouchableOpacity onPress={() => props.navigation.goBack()} style={{position:'absolute', top:8,  left:22,  }}>
                  
                    </TouchableOpacity>                        
                    <Text style={[{fontFamily: `${ Ifont }`}, styles.head]}>{props.title}</Text> */}
                </View>
                {/* <View style={{borderWidth:0.5,borderColor:'#EBEBEB'}}> */}

                {/* </View> */}

                <TouchableWithoutFeedback >
                <Modal animationType="slide" 
                dismiss={pop}
            transparent={true} 
            visible={pop}
            onRequestClose={() => setpop(false)}
            onBackdropPress={closeCallback}
            onBackButtonPress={closeTouch}
            onPressOut={() => setpop(false)}
            closeCallback={() => setpop(false)}
            closeTouch={() => setpop(false)}
           
            >

              <View style={styles.modalcontainer}>
                <View style={styles.modalview}>
                 
                  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={pickPicture}>
                  <X
                      name="camera"
                      size={45}
                      color="#EBEBEB"
                      style={{
                        
                        justifyContent: 'flex-start',
                        
                      }}
                    />
                    </TouchableOpacity>
                  <TouchableOpacity onPress={openPicker}>
                  <Y
                      name="images-outline"
                      size={45}
                      color="#EBEBEB"
                      style={{
                        
                        
                        
                      }}
                    />
                    </TouchableOpacity>
                    </View>
                  
                </View>
              </View>
            </Modal>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'black',
        fontStyle: 'normal',
        
        // fontFamily:"RammettoOne-Regular",
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 36,

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
      // flexDirection: 'row',
      
      // margin: 10,
      // justifyContent: 'space-evenly',
      // backgroundColor: '#fff',
      marginBottom: 270,
      // flexWrap:'wrap',
    },
    modalcontainer: {
      flex: 1,
      // backgroundColor: '#161616CC',
      flexDirection:'column',
  right:10
      // alignItems: 'center',
    },
    modalview: {
    
      height:70,
      width:320,
      justifyContent:'space-evenly',
     
      backgroundColor: '#5E17EB',
      borderColor: '#fff',
      
     
      borderRadius: 10,
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 30
    },
})

export default Screen;
