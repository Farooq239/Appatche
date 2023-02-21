import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = ({ navigation, onPress }) => {
    return (
        <View style={styles.conatiner}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../assests/remove.png')} style={{ height: 25, width: 25 }} />
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    conatiner: {
        width: '100%',
        alignItems: 'flex-end',
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})