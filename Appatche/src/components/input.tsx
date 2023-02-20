import React from 'react';

import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import AppStyle from '../styles/AppStyle';
import { ColorSet } from '../styles/Color';
import { Icons } from "../constants/icon";


interface Props {
    leftIconSource?: ImageSourcePropType;
    image?: boolean,
    inputStyle?: ViewStyle;
    labelStyle?: TextStyle;
    isDisable?: boolean;
    lable?: string;
    placeholder?: string;
    placeHolderTextColor?: ViewStyle | any;
    keyboardType?: any;
    value?: any;
    onChangeText?: ((value: string) => void) | undefined;
    onPressAdd?: (() => void) | undefined;
    isTagsAdd?: boolean;
    multiline?: boolean;
    passwordSecure?: boolean;
    edit?: boolean;
    text?: string;
    isSecurePassword?: boolean | undefined;
    errorText?: any;
    mainViewInput?: ViewStyle;
    maxLength?: number | undefined;
    setTextValue: Function;
    leftLabelIcon?: ImageSourcePropType;
    onPressEdit?: ((val: any) => void) | undefined;
}

const Input: React.FC<Props> = ({
    isDisable,
    lable,
    inputStyle,
    placeholder,
    image,
    value,
    setTextValue,
    onChangeText,
    keyboardType,
    leftIconSource,
    labelStyle,
    multiline,
    placeHolderTextColor,
    isTagsAdd,
    onPressAdd,
    passwordSecure,
    errorText,
    mainViewInput,
    maxLength,
    leftLabelIcon,
    edit,
    onPressEdit
}: Props) => {
    const [isSecure, setIsSecure] = React.useState<boolean>(false);
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const onSetIsSecure = () => {
        setIsSecure(!isSecure);
    };

    const onFocus = () => {
        setIsActive(true);
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsActive(false);
        setIsFocused(false);
    };
    const changeHandler = (InputText: string) => {
        if (onChangeText) onChangeText(value);
        setTextValue(InputText);
    };

    return (
        <View style={[mainViewInput ? mainViewInput : AppStyle.mt0]}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ paddingTop: 18, marginRight: 2 }}>
                    {image &&
                        <Image style={{ width: 20, height: 12, resizeMode: 'contain', tintColor: ColorSet.black }} source={leftLabelIcon} />}
                </View>
                <View style={{ paddingTop: 14 }}>
                    {lable && <Text style={[styles.lable, labelStyle]}>{lable}</Text>}
                </View>
            </View>

            <View style={[styles.input, inputStyle, isActive && styles.activeInput]}>
                {leftIconSource && (
                    <Image style={styles.leftIcon} source={leftIconSource} />
                )}
                <TextInput
                    editable={isDisable}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    style={[
                        styles.inputStyle,
                        inputStyle,
                        multiline ? styles.textarea : null,
                        isFocused ? styles.active : styles.inActive,
                        {
                            borderColor: isDisable && ColorSet.blue

                        }
                    ]}
                    onChangeText={changeHandler}
                    value={value}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={isSecure}
                    multiline={multiline}
                    placeholderTextColor={placeHolderTextColor}
                    maxLength={maxLength}
                />
                {passwordSecure && (
                    <TouchableOpacity onPress={onSetIsSecure}>

                        <Image source={Icons.ic_cross} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                )}
                {edit && (
                    <TouchableOpacity onPress={onPressEdit} style={{ width: 60, height: 40, padding: 15,flexDirection : 'row-reverse',paddingLeft : 10 }}>

                        <Image source={Icons.ic_edit} style={{ width: 15, height: 15, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                )}
                {isTagsAdd && (
                    <TouchableOpacity onPress={onPressAdd}>
                        <Text style={styles.showHide}>
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            {errorText && errorText ? (
                <View style={AppStyle.pt5}>
                    <Text style={styles.errorText}>{errorText}</Text>
                </View>
            ) : null}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: ColorSet.softGraySecondary,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: ColorSet.softWhite,
    },
    inputStyle: {
        flex: 1,
        fontSize: 12,
        // fontFamily: FamilySet.regular,
        color: ColorSet.black,
        height: 45,
    },
    lable: {
        fontSize: 15,
        color: ColorSet.grayMedium,
        // marginTop: 10
        // fontFamily: FamilySet.regular,
    },
    showHide: {
        fontSize: 12,
        color: ColorSet.grayMedium,
        marginLeft: 10,
    },
    leftIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 20,
    },
    activeInput: {
        borderColor: ColorSet.blue,
    },
    textarea: {
        height: 135,
        paddingTop: 15,
        textAlignVertical: 'top',
    },
    inActive: {
        borderColor: ColorSet.inputBorderColor,
    },
    active: {
        borderColor: ColorSet.black,
    },
    inputBtn: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    icon: {
        width: 40,
        height: 30,
        backgroundColor: ColorSet.white,
        color: ColorSet.MidGray,
    },
    showLabel: {
        color: ColorSet.MidGray,
    },
    hidelabel: {
        color: ColorSet.MidGray,
    },
    errorText: {
        fontSize: 12,
        color: ColorSet.redcolor,
    },
});