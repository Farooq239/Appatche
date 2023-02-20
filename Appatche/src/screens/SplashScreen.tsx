import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../constants/icon';
import { Keys } from '../constants/keys';
import AppStyle from '../styles/AppStyle';
import { getDataFromStorage } from '../utils/storage';

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
    useEffect(() => {
        splashHanler();
    }, []);

    const splashHanler = async () => {
        return new Promise(resolve =>
            setTimeout(async () => {
               
                    navigation.replace('AppList');
               
            }, 3000),
        );
    };
    return (
        <View style={[styles.mainContainer]}>
            <SafeAreaView>
                <View style={{ alignItems: 'center', marginBottom: 300 }}>
                    <View>
                        {/* <Image
                            source={Icons.ic_splashLogo}
                            style={{ width: 200, height: 200, resizeMode: 'contain' }}
                        /> */}
                    </View>
                </View>

                <View style={{ width: 300 }}>
                    <View style={{ width: '100%', alignSelf: 'center', marginBottom: 20 }}>
                        <Text style={{ textAlign: 'center', fontSize: 10, fontStyle: 'italic' }}>Powered By</Text>
                    </View> 
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: 100,
                        }}>
                        {/* <Image
                            source={Icons.ic_usaid}
                            style={{ width: 100, height: 70, resizeMode: 'contain' }}
                        />
                        <Image
                            source={Icons.ic_pitc}
                            style={{ width: 100, height: 70, resizeMode: 'contain' }}
                        /> */}
                    </View>
                 </View>
            </SafeAreaView>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
