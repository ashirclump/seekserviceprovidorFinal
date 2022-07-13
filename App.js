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
const Stack = createNativeStackNavigator()

export default function App() {
  // const newLocal = "A";
  return (
    <>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  options={{ headerShown: false }} name="RegisterFirst" component={RegisterFirst}/>

          <Stack.Screen  options={{ headerShown: false }}  name="RegisterSecond" component={RegisterSecond} color="yellow"/>

          <Stack.Screen  options={{ headerShown: false }} name="RegisterBank" component={RegisterBank} color='blue' />

          <Stack.Screen  options={{ headerShown: false }} name="Registeradhaar" component={Registeradhaar} color='blue' />

          <Stack.Screen  options={{ headerShown: false }}  name= "RegisterPan" component={RegisterPan} color="yellow"/>

          <Stack.Screen  options={{ headerShown: false }}  name="Home" component={Home} />
          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </>
    
  );
}
