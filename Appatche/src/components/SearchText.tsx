import React from 'react';

import { Image, ImageSourcePropType, ImageStyle, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { Icons } from '../constants/icon'
import { ColorSet } from '../styles/Color';

interface Props {
    heading?: String;
    buttonStyle?: ViewStyle | undefined;
    rightIconSource?: ImageSourcePropType;
    rightIconStyle?: ImageStyle;
    label?: string;
    labelStyle?: TextStyle;
    checkViewStyle?: ViewStyle | undefined;
    date?: boolean;
    name?: boolean;
    load?: boolean;
    type?: boolean;
    status?: boolean;
    referneceno?: boolean;
    isTouchable?: boolean
    inputStyle?: ViewStyle;
    image?: boolean;
    IconSource?: ImageSourcePropType;
    appliedload?:boolean;
}

const SearchText: React.FC<Props> = ({
    heading,
    buttonStyle,
    rightIconSource,
    rightIconStyle,
    label,
    labelStyle,
    checkViewStyle,
    date,
    name,
    load,
    status,
    type,
    isTouchable,
    image,
    IconSource,
    referneceno,
    appliedload,


}) => {
    return (
        <View style={styles.mainView}>
            <View style={[styles.sectionview]}>

                <Text style={styles.testStyle}>{heading}</Text>
                {
                    isTouchable &&
                    <TouchableOpacity style={[styles.button, buttonStyle]}>
                        <Image
                            style={[styles.rightIcon, rightIconStyle]}
                            source={rightIconSource} />

                    </TouchableOpacity>
                }
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={[styles.checkView, checkViewStyle]}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            </View>
               {
                    image &&
                    <Image
                    style={[styles.iconStyle, rightIconStyle]}
                    source={IconSource} />

                }
            </View>
            <View style={{ marginHorizontal: 8, marginVertical: 10 }}>
                <View style={styles.dashView} />
            </View>

            <View style={{ marginHorizontal: 5, width: '100%',flexWrap: 'wrap' }}>
                {date &&
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                   <Text style={styles.text}>Application date</Text>
                   <Text style={styles.showtext}>02-Fe-23</Text></View>
                }
                {appliedload &&
                     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Applied load</Text>
                    <Text style={styles.showtext}>5kW</Text></View>
                }
                {load &&
                     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={styles.text}>load</Text>
                    <Text style={styles.showtext}>5kW</Text></View>
                }
                {type &&
                     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Connection type</Text>
                    <Text style={styles.showtext}>Domestic</Text></View> 
                }
                {status &&
                     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Applicant status</Text>
                    <Text style={styles.showtext}>Owner</Text></View>   
                }
                {referneceno &&
                     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Reference No.</Text>
                    <Text style={styles.showtext}>27-15171-5522701</Text></View>
                }
                {name &&
                     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style={styles.text}>Applicant Name</Text>
                    <Text style={styles.showtext}>Chaudary Muhammad Ahmmad</Text></View>
                }
            </View>

        </View>
    );
};

export default SearchText;

const styles = StyleSheet.create({
    mainView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 15,
        marginHorizontal: 30,
        marginVertical: 4,
        padding: 5,
        paddingBottom: 10,
        elevation: 2
    },
    dashView: {
        backgroundColor: ColorSet.grayShaded,
        height: 2,

    },
    sectionview: {
        flexDirection: 'row', marginTop: 13
    },
    testStyle: {
        color: ColorSet.black,
        fontWeight: '600',
        marginLeft: 10,
        fontSize: 14
    },
    text: {
        fontSize: 10,
        marginHorizontal: 10,
        color: ColorSet.black,
        fontWeight: '500',
        width:'30%'
    },
    showtext: {
        fontSize: 10,
        fontWeight: '500',
        width: '52%'
    },
    button: {
        backgroundColor: ColorSet.grayBorderColor,
        marginLeft: '50%',
        width: 20,
        height: 20,
        padding: 4,
        alignItems: 'center',
        borderRadius: 5
    },
    rightIcon: {
        width: 10, height: 11
    },
    label: {
        fontSize: 9,
        color: '#2196f3',
        alignSelf: 'center'
    },
    checkView: {
        backgroundColor: ColorSet.lightBluecolor,
        borderRadius: 4,
        width: '22%',
        marginLeft: 10,
        padding: 3
    },
    iconStyle:{  width: 12, height: 12, marginLeft: 5, marginTop: 3 },
});