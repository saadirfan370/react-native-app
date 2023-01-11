import react, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TouchableHighlight, Button } from "react-native";
import LinearGradient from 'react-native-linear-gradient'

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Pepperoni",
      imgsrc:require("../assets1/pepperoni.png"),
      price:"+0.00",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Onions",
      imgsrc:require("../assets1/onions.png"),
      price:"+0.00",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Mushrooms",
      imgsrc:require("../assets1/mushrooms.png"),
      price:"+0.00",
    },
    {
        id: "69694a0f-3da1-471f-bd96-145571e29d72",
      title: "Spinach",
      imgsrc:require("../assets1/spinach.png"),
      price:"+0.00",
    }
  ];
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[style.item]}>
        <Image style={{width:60, height:60,marginHorizontal:10}} source={item.imgsrc} />
        <View>
            <Text style={[style.title]}>{item.title}</Text>
            <Text style={[style.titlePrice, ]}>{item.price}</Text>
        </View>
        <View style={{width:15,height:15,borderColor:"#6D6E9C",borderWidth:2,position:"absolute",borderRadius:7,marginLeft:170,alignItems:"center",justifyContent:"center",}}>
            <View style={[style.tecno,backgroundColor]}></View>
        </View>
    </TouchableOpacity>
  );

export default function Page3({navigation}) {
    const [thiknessPrice, setThiknessPrice] = useState('$12.00')
    const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6D6E9C" : "rgba(218, 218, 229, 0.8)";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
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
                            <Text style={{ width: 80, height: 32, fontSize: 20, fontWeight: "700", color: "#fff" }}>{thiknessPrice}</Text>
                        </View>
                    </View>
                </LinearGradient>
                <View style={{ width: '100%', marginTop: -90, flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 300, height: 300, borderRadius: 150, backgroundColor: "#fff", borderWidth: 20, borderColor: 'rgba(218, 218, 229, 0.5  )', alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ width: 230, height: 230, alignItems: "center", justifyContent: "center" }} source={require("../assets1/pizza1.png")} />
                    </View>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 120 }}>
                <View style={{ width: 330, height: 170, backgroundColor: 'rgba(218, 218, 229, 0.3)', borderRadius: 15, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: '300', color: "#6D6E9C" }}>Choose up to </Text>
                        <Text style={{ fontSize: 20, fontWeight: '600', color: "#6D6E9C" }}>7 toppings</Text>
                    </View>
                    <Text style={{fontSize:12,marginTop:8}}>Free 3 add-ons</Text>
                    <View style={style.container}>
                        <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                width: '100%', height: 60, justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0
            }}>
                <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: "center" }}
                onPress={()=> navigation.navigate("Final")}
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
        width:200,
        marginTop:15,
        height:60,
        marginVertical: 8,
        marginHorizontal: 16,
        border:' 0.5px solid #DADAE5',
        backgroundColor:'#ffff',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
      },
      title: {
        fontSize: 14,
        fontWeight:'bold'
      },
    titlePrice:{
    fontSize:12,
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
    tecno:{
        width:9,
        height:9,
        borderRadius:6,
    }

})

