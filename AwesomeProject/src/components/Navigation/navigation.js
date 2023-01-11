import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from "./chat";
import Dropdown from "../Home";
import { View ,Image} from "react-native";
import Profile from "../profile";
import CustomDrawer from "../CustomDrawer";
import Payment from "../payment";
import Order from "../order";
import Address from "../address";
import Help from "../help";
import Logout from "../Logout";
import FontAwesome5 from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/Entypo';
import FontAwesome7 from 'react-native-vector-icons/AntDesign';
import Sshop from "../three";
import Page1 from "../screen/page1";
import Page2 from "../screen/page2";
import Page3 from "../screen/page3";
import Final from "../screen/finalscreen";


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Drawer" 
    screenOptions={{
    }}
    >
      <Stack.Screen name="Drawer" component={MyDrawer}  
      options={{
        headerShown:false
      }} />
      <Stack.Screen name="Shop" component={Sshop} />
      <Stack.Screen name="Page" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Final" component={Final} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <>
        <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          // headerShown: false,
          headerTitleStyle:{},
          drawerLabelStyle:{
            marginLeft:-20
          },
          
          drawerStyle:{
            backgroundColor: '#fff',
            width: 240,
          },
          drawerActiveBackgroundColor:'#FFA360',
          drawerActiveTintColor:"#fff",
          
          }}>
            <Drawer.Screen name="Profile" component={Profile}
            options={{
              drawerIcon:()=>{ 
              return <Image source={require("../assets1/Template/Icon/Vector.png")} style={{width:19}} />
            },
            }}
            />
            <Drawer.Screen name="Home" component={Dropdown} 
            options={{
              headerShown:false,
              drawerIcon:({color,size}) =>{
                return <FontAwesome7 name={'home'} size={22} color={"#F5313F"} />
              }
            }}
            />
            <Drawer.Screen name="chat" component={Chat} 
            options={{
              drawerIcon:({color,size}) =>{
                return <FontAwesome6 name={'chat'} size={22} color={"#F5313F"} />
              }
            }}
            />
            <Drawer.Screen name="Payment" component={Payment} 
             options={{
              drawerIcon:({color,size}) =>{
                return <FontAwesome5 name={'payments'} size={22} color={"#F5313F"} />
              }
            }}
            />
            <Drawer.Screen name="Order History" component={Order} 
            options={{
              drawerIcon:({color,size}) =>{
                return <FontAwesome5 name={'history-edu'} size={22} color={"#F5313F"} />
              }
            }}
            />
            <Drawer.Screen name="Address" component={Address} 
            options={{
              drawerIcon:({color,size}) =>{
                return <FontAwesome6 name={'location-pin'} size={22} color={"#F5313F"} />
              }
            }}/>
            <Drawer.Screen name="Help" component={Help} 
            options={{
              drawerIcon:({color,size}) =>{
                return <FontAwesome7 name={'question'} size={22} color={"#F5313F"} />
              }
            }}/>
            <Drawer.Screen name="Logout" component={Logout} 
            options={{
              headerShown:false,
              drawerIcon:({color,size}) =>{
                return <FontAwesome7 name={'logout'} size={22} color={"#F5313F"} />
              }
            }}
            />
        </Drawer.Navigator>
    </>
  );
}



// function multiple (a){
//   return function (b){
//     return a+b;
//   }
// }

// multiple (2)(3)