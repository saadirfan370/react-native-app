import react, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TouchableHighlight, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient'



export default function Page1({ navigation }) {
    const [smallStyleBox, setSmallStyleBox] = useState(true)
    const [mediumStyleBox, setMediumStyleBox] = useState(null)
    const [largeStyleBox, setlargeStyleBox] = useState(null)
    const [sixePrice, setSizePrice] = useState('$10.00')
    const goToChat = name => {
        navigation.navigate('Page2', {
          username: name,
        });
      };

    return (
        // <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Profile</Text></View>
        <>
            <View style={style.pag2}>
                <LinearGradient
                    colors={['#F5313F', '#FFA360']}
                    style={style.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0.5 }}
                >
                    <View style={{ flexDirection: "row", width: '100%', justifyContent: "space-between" }}>
                        <View style={{ width: 200 }}>
                            <Text style={{ width: 189, height: 29, color: '#fff', fontSize: 20, fontWeight: '300' }}>Create Your Pizza</Text>
                            <Text style={{ width: 189, height: 15, fontSize: 10, fontWeight: '700', color: '#fff', opacity: 0.8, textTransform: "uppercase" }}>size, crust, toppings</Text>
                        </View>
                        <View style={{ width: 80 }}>
                            <Text style={{ width: 80, height: 32, fontSize: 20, fontWeight: "700", color: "#fff" }}>{sixePrice}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={{ width: '100%', marginTop: -90, flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 300, height: 300, borderRadius: 150, backgroundColor: "#fff", borderWidth: 20, borderColor: 'rgba(218, 218, 229, 0.5  )', alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ width: 230, height: 230, alignItems: "center", justifyContent: "center" }} source={require("../assets1/pizza1.png")} />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 150 }}>
                <View style={{ width: 330, height: 139, backgroundColor: '#fff', borderRadius: 15, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: "#6D6E9C" }}>Choose your </Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "#6D6E9C" }}>size</Text>
                    </View>
                    <View style={style.container}>



                        <View style={style.sizeBtnBox}>

                            {/* <Text style={styles.sizeBtn}>Small</Text> */}
                            <View style={style.sizeBtn}>
                                {smallStyleBox ? <LinearGradient colors={['#FFA360', '#F5313F']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    style={{
                                        width: "100%", height: '100%', borderRadius: 18,
                                        alignItems: 'center',
                                        boxShadow: '0 6 25 rgba(245, 49, 63, 0.9)',
                                        justifyContent: 'center',
                                    }}>

                                    <Text onPress={() =>{goToChat("small"), setSmallStyleBox(true), setMediumStyleBox(null), setlargeStyleBox(null) }} style={{ fontWeight: 'bold', color: 'white' }} >
                                        Small
                                    </Text>
                                </LinearGradient> :
                                    <Text onPress={() => { setSmallStyleBox(true), setMediumStyleBox(null), setlargeStyleBox(null), setSizePrice('$10.00') }} style={style.sizeBtn}>Small</Text>
                                }
                            </View>
                            <View style={style.sizeBtn}>
                                {mediumStyleBox ? <LinearGradient colors={['#FFA360', '#F5313F']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    style={{
                                        width: "100%", height: '100%', borderRadius: 18,
                                        alignItems: 'center',
                                        boxShadow: '0 6 25 rgba(245, 49, 63, 0.9)',
                                        justifyContent: 'center',
                                    }}>

                                    <Text onPress={() => {goToChat("Medium"),  setSmallStyleBox(null), setMediumStyleBox(true), setlargeStyleBox(null) }} style={{ fontWeight: 'bold', color: 'white' }}>
                                        Medium
                                    </Text>
                                </LinearGradient> :
                                    <Text onPress={() => { setSmallStyleBox(null), setMediumStyleBox(true), setlargeStyleBox(null), setSizePrice('$12.00') }}
                                        style={style.sizeBtn}>Medium</Text>
                                }
                            </View>
                            <View style={style.sizeBtn}>
                                {largeStyleBox ? <LinearGradient colors={['#FFA360', '#F5313F']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    style={{
                                        width: "100%", height: '100%', borderRadius: 18,
                                        alignItems: 'center',
                                        boxShadow: '0 6 25 rgba(245, 49, 63, 0.9)',
                                        justifyContent: 'center',
                                    }}>

                                    <Text onPress={() => {goToChat("Large"),  setSmallStyleBox(null), setMediumStyleBox(null), setlargeStyleBox(true) }} style={{ fontWeight: 'bold', color: 'white' }}>
                                        Large
                                    </Text>
                                </LinearGradient> :
                                    <Text onPress={() => { setSmallStyleBox(null), setMediumStyleBox(null), setlargeStyleBox(true), setSizePrice('$16.00') }} style={style.sizeBtn}>Large</Text>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                width: '100%', height: 60, justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0
            }}>
                <TouchableOpacity
                    style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center" }}
                    onPress={() => navigation.navigate('Page2')}
                >

                    <LinearGradient
                        colors={['#F5313F', '#FFA360']}
                        style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center" }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0.5 }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "700", color: '#fff' }}>Next</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    pag2: {
        height: 250,
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
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 100,
        marginTop: 20,
        borderRadius: 20
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
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
        // backgroundColor:'white',
        // backgroundColor:'yellow',
        borderRadius: 18,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
    }
})

