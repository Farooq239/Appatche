import React, { useEffect } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Splash: React.FC<{ navigation: any }> = ({ navigation }) => {
    useEffect(() => {
        splashHanler();
    }, []);

    const splashHanler = async () => {
        return new Promise(resolve =>
            setTimeout(async () => {
                navigation.replace('Auth');
            }, 3000),
        );
    };
    return (
        <View style={[styles.mainContainer]}>
            <SafeAreaView>
                <View style={{ width: 300 }}>
                    <View style={styles.container}>
                        <Text>Splash Screen</Text>
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
        backgroundColor: 'red'
    },
    container: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    }
});
