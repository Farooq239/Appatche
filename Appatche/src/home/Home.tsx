import { ActivityIndicator, BackHandler, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../component/Header'
import RNInstalledApplication from 'react-native-installed-application';

const Home = ({ navigation }) => {

    const [loader, setLoading] = useState(false);
    const desert = require('../assests/desert.jpg')

    const getApplication = () => {
        setLoading(true)
        RNInstalledApplication.getApps()
            .then((apps: React.SetStateAction<never[]>) => {
                navigation.navigate('AppDetail', { apps })
                setLoading(false)
            })
            .catch((error: any) => {
                console.log(error);
                setLoading(false)
            });
    }
    return (
        <View style={{ flex: 1 }} >
            <ImageBackground source={desert} style={{ flex: 1, }}>
                <Header navigation={navigation} onPress={() => BackHandler.exitApp()} />
                {loader &&
                    <ActivityIndicator size="large" color="white" />
                }
                <View style={styles.installedContainer} >
                    <TouchableOpacity onPress={() => getApplication()} >
                        <Image source={require('../assests/power.png')} style={styles.powerImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 50 }}>
                    <Image source={require('../assests/info-button.png')} style={styles.info} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    installedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    powerImage: {
        height: 75,
        width: 75,
    },
    info: {
        height: 25,
        width: 25,
        tintColor: 'white'
    }

})