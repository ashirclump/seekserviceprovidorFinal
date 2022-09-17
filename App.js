import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
// import HomeScreen from './HomeScreen';
// import Screen from './Screen';
import Booking from './Booking';
import RegisterFirst from './RegisterFirst'
import RegisterSecond from './RegisterSecond'
import RegisterBank from './RegisterBank'
import Registeradhaar from './Registeradhaar'
import RegisterPan from './RegisterPan'
import Home from './Home';
import Demo from './Demo';
// import io from  'socket.io-client';

// let socket = io("http://13.126.187.109:4000", 
// { rejectUnauthorized: false });
// socket.on("orderPlaced", (data) => {
//   console.log(data);
// });


const Stack = createNativeStackNavigator()

function App() {
  
  return (
   
      
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Demo'
        >
        <Stack.Screen  options={{ headerShown: false }}  name="Demo" component={Demo} />

          <Stack.Screen  options={{ headerShown: false }} name="RegisterFirst" component={RegisterFirst}/>

          <Stack.Screen  options={{ headerShown: false }}  name="RegisterSecond" component={RegisterSecond}/>

          <Stack.Screen  options={{ headerShown: false }} name="RegisterBank" component={RegisterBank} />

          <Stack.Screen  options={{ headerShown: false }} name="Registeradhaar" component={Registeradhaar}  />

          <Stack.Screen  options={{ headerShown: false }}  name= "RegisterPan" component={RegisterPan}/>

          <Stack.Screen  options={{ headerShown: false }}  name="Home" component={Home} />
          
        </Stack.Navigator>
    </NavigationContainer>
    
   
    
  );
}
export default App;