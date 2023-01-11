import react from "react";
import { View, Text,StyleSheet } from "react-native";

export default function Order (){
    return(
        <>
        <View  style={style.ctr}>
            <Text>Order</Text>
        </View>
        </>
    )
}

const style  = StyleSheet.create({
  ctr:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
})