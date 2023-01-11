import react from "react";
import { View, Text,StyleSheet } from "react-native";
import CIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome7 from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/Entypo';

export default function Help (){
    return(
        <>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text>Help</Text>
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