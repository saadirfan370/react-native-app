import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5 from 'react-native-vector-icons/Entypo';
import CIcon from 'react-native-vector-icons/MaterialIcons';
import Sshop from "./three";
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';
import { NavigationHelpersContext } from "@react-navigation/native";

function Dropdown({ navigation, route }) {
    // const navigate = navigation.navigate;
    // useEffect(()=>{
    //     navigation.setOptions({
    //         title: `Deliver to :`,
    //         headerRight: () => (
    //             <CIcon name="card-travel" style={{marginRight:15}} size={26} color={"#6D6E9C"} />
    //           ),
    //         });
    //       }, []);
    return (
        <>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "space-around", height: 55, backgroundColor: '#fff', alignItems: "center", marginHorizontal: 5 }}>
                    <Text style={{ flexDirection: "row", width: 28 }}><FontAwesome5 name={'menu'} size={28} color={"#6D6E9C"} onPress={() => navigation.openDrawer()} /></Text>
                    <View style={{ width: '70%', padding: 0, margin: 0 }}>
                        <Text style={{ fontSize: 14 }}>Deliver to :</Text>
                        <Text style={{ fontSize: 10, fontWeight: '700', alignItems: 'center' }}>Home</Text>
                    </View>
                    <Text><CIcon name="card-travel" size={26} color={"#6D6E9C"} onPress={() => navigation.navigate('Shop')} /></Text>
                </View>
                <View style={style.min}>
                    <LinearGradient
                        colors={['#F5313F', '#FFA360']}
                        style={style.linearGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={style.idx1}>Hi Jaykey!</Text>
                        <Text style={{ fontSize: 25, paddingHorizontal: 20, borderLeftWidth: 2, borderLeftColor: '#fff', color: '#fff' }}>What pizza do you want to try today?</Text>
                    </LinearGradient>
                </View>

                <View style={{ width: '90%', height: 218, borderRadius: 20, paddingRight: 20, flexDirection: "row", backgroundColor: '#fff', overflow: 'hidden', marginHorizontal: '5%', marginTop: 15, justifyContent: "center", }}>
                    <Image style={{ width: 175, height: 177, top: 14 }} source={require('../assets/img1.png')} />
                    <View style={{ margin: 20, paddingTop: 22 }}>
                        <Text style={{ color: '#F5313F', fontSize: 18, fontWeight: "700" }}>Reorder again?</Text>
                        <Text style={{ color: "#6D6E9C", fontSize: 11, textTransform: "uppercase", fontWeight: "500", width: 180, letterSpacing: 1 }}>
                            Small, thin crust,
                            tomatoes, basil, cheese
                        </Text>
                        <Text style={{ color: "#6D6E9C", fontSize: 20, textTransform: "uppercase", fontWeight: "500", marginTop: 8, letterSpacing: 1 }}>$12</Text>

                        <TouchableOpacity >
                            <LinearGradient
                                colors={['#F5313F', '#FFA360']}
                                style={style.idx2}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0.5 }}
                            ><Text style={{ color: '#fff', fontSize: 15, fontWeight: "600" }}>Add to cart</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={ ()=> navigation.navigate("Page")}>

                <View style={{
                    width: '90%',
                    height: 438,
                    borderRadius: 20,
                    padding: 20,
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    marginHorizontal: '5%',
                    marginTop: 15,
                    alignItems: "center",
                }}>
                
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 25, fontWeight: "300", color: "#F5313F" }}>Create your</Text>
                        <Text style={{ fontSize: 25, fontWeight: "700", color: "#F5313F" }}> own pizza</Text>
                    </View>
                    <Text style={{ fontSize: 10, fontWeight: "500", lineHeight: 12, marginTop: 10, color: "#A0A8CC", textTransform: "uppercase" }}>The cost will depend on your customization</Text>

                    <Image style={{ width: 320, height: 320, top: 20, shadowColor: "#33FF7E20", }} source={require('../assets/img2.png')} />

                
                </View>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
};





const style = StyleSheet.create({
    idx1: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'left',
        color: '#fff',
        marginBottom: 20,
    },
    idx2: {
        width: 110,
        height: 38,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#66F5313F',
        shadowOffset: "0, 6",
        marginTop: 15,
    },
    min: {
        height: 152,
        width: 375,
        left: 0,
    },
    linearGradient: {
        // justifyContent: 'center',
        paddingTop: '10%',
        height: 200,
        width: '100%',
        overflow: "hidden",
        paddingHorizontal: '10%',
    },
})


export default Dropdown;