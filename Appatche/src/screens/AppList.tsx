import React, { useState, useEffect } from 'react';

import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native';

import RNInstalledApplication from 'react-native-installed-application';

const AppList: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [imageUrl, setImageUrl] = useState([])

    const getApplication = () => {
        RNInstalledApplication.getApps()
            .then((apps: React.SetStateAction<never[]>) => {
                setData(apps)
            })
            .catch((error: any) => {
                console.log(error);
            });
        console.log(data, 'data ')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => getApplication()}>
                <Text>Hello World</Text>
            </TouchableOpacity>

            <View>
                {
                    data.map((index, item) => {
                        return (
                            <>
                                <View>
                                    {/* <Image source={`data:image/png;base64,${item.icon}`} /> */}
                                </View>
                            </>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    );
};

export default AppList;
const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1
    }
});
