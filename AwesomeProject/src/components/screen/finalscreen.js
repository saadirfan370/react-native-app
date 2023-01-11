import react, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TouchableHighlight, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome8 from 'react-native-vector-icons/FontAwesome5';
import AIcon from 'react-native-vector-icons/AntDesign';

export default function Final() {

    return (
        <>
            <View style={style.pag2}>
                <LinearGradient
                    colors={['#F5313F', '#FFA360']}
                    style={style.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <View style={{ flexDirection: "row", width: '100%', justifyContent: "space-between", marginTop: 10 }}>
                        <View>
                            <FontAwesome8 name="pizza-slice" style={{ color: "#fff", marginBottom: 10 }} size={30} />
                            <View style={{ width: 200 }}>
                                <Text style={{ width: 189, height: 29, color: '#fff', fontSize: 25, fontWeight: '300' }}>Check your </Text>
                                <Text style={{ width: 189, height: 29, fontSize: 25, fontWeight: '700', color: '#fff', }}>custom pizza</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <View style={{ width: '100%', marginTop: "-50%", flex: 1, marginLeft: "40%", justifyContent: "center", alignItems: "center" }}>
                <View style={{ width: 480, height: 480, borderRadius: 240, backgroundColor: "#fff", borderWidth: 20, borderColor: 'rgba(218, 218, 229, 0.5  )', alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ width: 400, height: 400, alignItems: "center", justifyContent: "center" }} source={require("../assets1/toppings.png")} />
                </View>
            </View>
            <View style={{width:'65%',height:"45%",position:"absolute",backgroundColor:"#fff",top:'35%',borderRadius:20,opacity:0.9,marginLeft:-10}}>
                <View style={{marginHorizontal:25,marginVertical:20}}>
                <AIcon name="shoppingcart" size={18} style={{color:"#F5313F"}} />
                <Text style={{fontSize:12,paddingBottom:10,fontWeight:"600",color:"#F5313F",borderColor:"#6D6E9C",borderBottomWidth:0.7,textTransform:"uppercase"}}>order summary</Text>
                    <View style={{marginTop:20,paddingBottom:20,borderColor:"#6D6E9C",borderBottomWidth:0.7}}>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Medium Size</Text>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Thick Crust</Text>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Pepperoni</Text>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Black Olives</Text>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Mushroom</Text>
                        <Text style={{color:"#6D6E9C",fontSize:12}}>Onions</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{color:"#6D6E9C",fontSize:14}}>Total: $14.00</Text>
                    </View>
                </View>
            </View>
            <View style={{
                width: '100%', height: 60, justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0
            }}>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center" }}>

                    <LinearGradient
                        colors={['#F5313F', '#FFA360']}
                        style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center" }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: '#fff' }}>Confirm Pizza</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    pag2: {
        height: 170,
    },
    linearGradient: {
        height: '100%',
        width: '100%',
        overflow: "hidden",
        paddingHorizontal: '5%',
        paddingTop: 10
    },
    container: {
        flex: 1,
    },
    item: {
        width: 200,
        marginTop: 15,
        height: 60,
        marginVertical: 8,
        marginHorizontal: 16,
        border: ' 0.5px solid #DADAE5',
        backgroundColor: '#ffff',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    titlePrice: {
        fontSize: 12,
    },
    sizeBtnBox: {
        width: '100%',
        height: 40,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"

    },
    sizeBtn: {
        width: 90,
        height: 38,
        borderRadius: 18,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
    },
    tecno: {
        width: 9,
        height: 9,
        borderRadius: 6,
    }

})

