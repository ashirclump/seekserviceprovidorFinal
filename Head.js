import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Head = (props) => {
  const {navigation,closeCallback,closeTouch}=props;
 const Ifont = 'Poplin';
        return (
        <View>
             {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16, marginBottom: 13 }}> */}
                                          
                    
                {/* </View> */}
                <View style={{borderWidth:0.5,borderColor:'#EBEBEB'}}>
 <View style={styles.footer}>
          
          {/* <TouchableOpacity
    //  onPress={() =>navigation.navigate("RegisterPan")} style={{ }}
    //  onPress= { () => navigation.navigate("Home")}
        > */}
            <View style={[styles.btn]}>
            <Text style={[{fontFamily: `${ Ifont }`}, styles.head]}>{props.title}</Text>
            </View>
          {/* </TouchableOpacity> */}
        </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        color: 'white',
        fontStyle: 'normal',
        
        // fontFamily:"RammettoOne-Regular",
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 36,

    },
    footer: {
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
})

export default Head;
