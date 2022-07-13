


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
     onPress={() => setpop(true)}
        //  onPress={() => setpop(false)}
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
