import react from "react";
import { View,Text,StyleSheet ,Image} from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


const CustomDrawer = props => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={style.cdn}>
                <View style={{justifyContent:"center",}}>
                <Image style={style.cdm1} source={require('../assets/img3.png')} />
                <Text style={{color:'#6D6E9C',fontSize:18, fontWeight:"500",width:150}}>Jaykey del Mar</Text>
                <Text style={{color:'#6D6E9C',fontSize:12, fontWeight:"500",width:150,marginLeft:3}}>janedone@gmail.com</Text>
                </View>
            </View>

        <View>
                <DrawerItemList {...props} />
        </View>
        
        </DrawerContentScrollView>
    )
}

const style = StyleSheet.create({
    cdn:{
        height:209,
        // backgroundColor:'orange',
        width:280,
        flexDirection:'row',
        justifyContent:"center"
    },
    cdm1:{
        width:57,
        height:57,
        borderRadius:28,
        backgroundColor:'blue',
        flexDirection:"column",
        marginLeft:30,
        marginBottom:10
        
    }
})

export default CustomDrawer;