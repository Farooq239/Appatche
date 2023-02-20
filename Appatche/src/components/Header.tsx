import React from 'react';

import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Icons } from '../constants/icon'
import { ColorSet } from '../styles/Color';

interface Props {
    isChecked?: boolean;
    onPressLeft?: ((val: any) => void) | undefined;
    textCheckBox?: boolean;
    checkView?: ViewStyle;
    leftIconSource?: ImageSourcePropType;
    middleIconSource?: ImageSourcePropType;
    rightIconSource?: ImageSourcePropType;
    heading?: String;
    headingCheck?: boolean;


}

const Header: React.FC<Props> = ({
    leftIconSource,
    rightIconSource,
    middleIconSource,
    onPressLeft,
    checkView,
    heading,
    headingCheck
}: Props) => {
    return (
        <View style={[styles.mepcoView, headingCheck && styles.heading]}>
            <TouchableOpacity onPress={onPressLeft} style={{ width: 30, height: 20 }}>
                <Image source={leftIconSource} style={styles.backIcon} />
            </TouchableOpacity>
            <View style={{ height: 120 }}>
                {
                    headingCheck ? <Text style={{ color: ColorSet.black, fontSize: 16, fontWeight: '600' }}>{heading}</Text> :
                        <Image source={middleIconSource} style={styles.mepcoImage} />
                }
            </View>
            <Image source={rightIconSource} style={styles.rightImage} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    mepcoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        // backgroundColor : 'red'
    },
    heading: {
        marginVertical: 20

    },
    mepcoImage: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        alignSelf: 'center',
        // backgroundColor: 'red'
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'

    },
    rightImage: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    }
});
