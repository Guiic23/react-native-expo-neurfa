import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";


export function Banner() {

    const [page, setPage] = useState(0);

    const onPageSelected = (e) => {
        setPage(e.nativeEvent.position);
    };
    return (
        <View style={styles.container}>
            <PagerView initialPage={0} style={styles.content} onPageSelected={onPageSelected}>
                <View key="1" style={styles.page}>
                    <Image source={require("../../assets/images/banner1.png")} style={{ width: "100%", height: 200 }} />
                </View>
                <View key="2" style={styles.page}>

                    <Image source={require("../../assets/images/banner2.png")} style={{ width: "100%", height: 200 }} />
                </View>
                <View key="3" style={styles.page}>
                    <Image source={require("../../assets/images/banner3.png")} style={{ width: "100%", height: 200 }} />
                </View>
            </PagerView>
            <View style={styles.bulletContent}>
                <View style={[styles.bullet, page === 0 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 1 && styles.activeBullet]}></View>
                <View style={[styles.bullet, page === 2 && styles.activeBullet]}></View>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, }}>
                <Text style={{ fontSize: 20, fontFamily: "bold", }}>Categorias</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 10,
            }}>

                <View style={styles.cat}>
                    <Image source={require("../../assets/images/cat1.png")} style={{ width: 90, height: 100, marginTop: -10, }} />
                    <Text style={{ fontSize: 15, fontFamily: "bold", }}>Pé</Text>
                </View>
                <View style={styles.cat}>
                    <Image source={require("../../assets/images/cat2.png")} style={{ width: 90, height: 100, marginTop: -10, }} />
                    <Text style={{ fontSize: 15, fontFamily: "bold", }}>Costas</Text>
                </View>
                <View style={styles.cat}>
                    <Image source={require("../../assets/images/cat3.png")} style={{ width: 90, height: 100, marginTop: -10, }} />
                    <Text style={{ fontSize: 15, fontFamily: "bold", }}>Facial</Text>
                </View>
            </View>

            <View style={styles.pro}>
                 <View style={styles.prod}></View>
                 <View style={styles.prod}></View>
                 <View style={styles.prod}></View>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    prod:{
        marginTop: 80,
        width: 120,
        height: 120,
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 10,
        borderColor: "#000",
    borderWidth: 2,
    shadowColor: "#000", // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.5, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Altura da sombra no Android


    },



    pro: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    cat: {
        width: 80,
        height: 80,
        backgroundColor: "#000",
        margin: 22,
        borderRadius: 50,
        alignItems: "center",

    },
    content: {
        marginTop: 10,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        widht: "100%",
        height: 200,



    },

    page: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        padding: 10,




    },
    bulletContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bullet: {

        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#999",
        margin: 10,

    },

    activeBullet: {

        backgroundColor: "#000",

    },
    text: {
        fontSize: 20,
        fontFamily: "bold",
    },

});