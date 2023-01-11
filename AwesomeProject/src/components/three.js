import react from "react";
import { View, Text,StyleSheet } from "react-native";
import CIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome7 from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/Entypo';

export default function Sshop (){
    return(
        <>
        <View style={{height:307,overflow:"hidden",borderBottomEndRadius:20,borderBottomStartRadius:20}}>
        <View  style={style.ctr}>
            <CIcon name="my-location" size={22} color={"#F5313F"} />
            <Text style={{fontSize:14,alignItems:"center",textAlign:"center" ,marginLeft:15,fontWeight:'700',color:'#6D6E9C'}}> Current Location</Text>
        </View>
        <View  style={style.ctr}>
        <FontAwesome7 name={'home'} size={22} color={"#F5313F"} />
            <View style={{marginLeft:15}}>
                <Text style={{fontSize:14,fontWeight:'700',color:'#6D6E9C'}}>Home</Text>
                <Text style={{fontSize:14,fontWeight:'300',color:'#6D6E9C'}}>3728  Brand Road, Swift Current</Text>
            </View>
        </View>
        <View  style={style.ctr}>
        <FontAwesome6 name={'location-pin'} size={22} color={"#F5313F"} />
            <View style={{marginLeft:15}}>
                <Text style={{fontSize:14,fontWeight:'700',color:'#6D6E9C'}}>Other</Text>
                <Text style={{fontSize:14,fontWeight:'300',color:'#6D6E9C'}}>81 Springside, Lancaster</Text>
            </View>
        </View>
        <View  style={style.ctr}>
        <CIcon name="work" size={22} color={"#F5313F"} />
            <View style={{marginLeft:15}}>
            <Text style={{fontSize:14,fontWeight:'700',color:'#6D6E9C'}}>Work</Text>
            <Text style={{fontSize:14,fontWeight:'300',color:'#6D6E9C'}}>4932 Sixth Street, Westminster</Text>
            </View>
        </View>
        <View style={style.ctr1}>
            <FontAwesome7 name={'pluscircleo'} size={22} color={"#FFA360"} />
            <View style={{marginLeft:15}}>
                <Text style={{fontSize:16,fontWeight:'700',lineHeight:20,color:"#FFA360"}}>Add a new address</Text>
            </View>
        </View>
        </View>
        </>
    )
}

const style  = StyleSheet.create({
    ctr1:{
        paddingHorizontal:40,
    marginTop:12,
    alignItems:"center",
    paddingBottom:12,
    flexDirection:"row",
    },
  ctr:{
    paddingHorizontal:40,
    marginTop:12,
    alignItems:"center",
    paddingBottom:12,
    borderBottomWidth:0.5,
    borderBottomColor:'#6D6E9C',
    flexDirection:"row"
  },
})