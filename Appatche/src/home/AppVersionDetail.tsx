import { BackHandler, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../component/Header'

const AppVersionDetail = ({ navigation, route }) => {
    const item = route?.params?.item
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground source={require('../assests/desert.jpg')} style={{ flex: 1, }}>
                <Header navigation={navigation} onPress={() => navigation.goBack()} />
                <View style={{ alignItems: 'center', height: '80%', justifyContent: 'center' }} >
                    <Text style={styles.item}>{item.appName}</Text>
                    <Text style={styles.item}>{item.versionName}</Text>
                    <Text style={styles.item}>{item.packageName}</Text>
                </View>

                <View style={styles.infoView}>
                    <Image source={require('../assests/info-button.png')} style={{ height: 25, width: 25, tintColor: 'white' }} />
                </View>
            </ImageBackground >
        </View >
    )
}

export default AppVersionDetail

const styles = StyleSheet.create({
    installedContainer: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        color: 'white',
        fontSize: 20
    },
    infoView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})