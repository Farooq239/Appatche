import { BackHandler, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'

const AppDetail = ({ navigation, route }) => {
    const data = route?.params?.apps
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground source={require('../assests/desert.jpg')} style={{ flex: 1, }}>
                <Header navigation={navigation} onPress={() => BackHandler.exitApp()} />
                <ScrollView>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={{ padding: 10, }}
                                onPress={() => navigation.navigate('AppVersionDetail', { item })}>
                                <View style={styles.allApps} >
                                    <Image source={{ uri: `data:image/png;base64,${item?.icon}` }} style={{ height: 50, width: 50 }} />
                                    <Text style={{ color: 'white', left: 10 }} >{item?.appName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={styles.infoView}>
                    <Image source={require('../assests/info-button.png')} style={styles.infoicon} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default AppDetail

const styles = StyleSheet.create({
    allApps: {
        height: 70, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10
    },
    installedContainer: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoView: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },
    infoicon: {
        height: 25, width: 25, tintColor: 'white'
    }
})