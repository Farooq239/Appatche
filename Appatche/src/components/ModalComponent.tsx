import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

    Image,
    TextStyle,
} from 'react-native';

import Modal from 'react-native-modal';

import AppStyle from '../styles/AppStyle';
import { ColorSet } from '../styles/Color';
import { screenHeight, screenWidth } from '../styles/ScreenSize';
import { Icons } from '../constants/icon'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from './Button';
import { ScrollView } from 'react-native';
import Input from './input';
import PasswordInput from './PasswordInput';


interface Props {
    visible?: boolean;
    visibleDeled?: boolean;
    onRequestClose?: ((val: any) => void) | undefined;
    onPressClose?: ((val: any) => void) | undefined;
    children?: React.ReactNode;
    title?: String;
    onPressHome?: ((val: any) => void) | undefined;
    onPressSmartMeter?: ((val: any) => void) | undefined;
    onPressNewConnectionApplication?: ((val: any) => void) | undefined;
    popUp?: boolean;
    canDelete?: boolean;
    referenceNumber?: ((val: any) => void) | undefined;

    name?: String;
    fatherName?: String;
    cnic?: String;
    phone?: String;
    email?: String;
    refNo?: String;
    tariff?: String;
    meterPhase?: String;
    subDivsion?: String;
    division?: String;
    address?: String;
    meterNo?: String;
    meterType?: String;
    currentStatus?: String;
    onPressCancel?: ((val: any) => void) | undefined;
    onPressAddMeter?: ((val: any) => void) | undefined;
    onPressDeled?: boolean
    onPressDeleteRemove?: ((val: any) => void) | undefined;
    onPressCancels?: ((val: any) => void) | undefined;
    onPressDel?: ((val: any) => void) | undefined;

    onPressDefaultButton?: ((val: any) => void) | undefined;
    onPressDeleteButton?: ((val: any) => void) | undefined;

    dropDown?: boolean
    visibleModal?: boolean
    deleteModal?: boolean
    deleteModals?: boolean
    defaultModal?: boolean
    onPressDefault?: ((val: any) => void) | undefined;
    onPressDelete?: ((val: any) => void) | undefined
    defaultButton?: TextStyle
    deleteButton?: TextStyle
    defaultStyle?: TextStyle
    deleteStyle?: TextStyle
    meterInfo?: boolean

    meterInformation?: boolean
    meterVisible?: boolean

    deleteDefaultModal?: boolean
    deleteDefaultVisible?: boolean


    defaultMeter?: boolean
    defaultModals?: boolean
    onPressSetAsDefault?: ((val: any) => void) | undefined;
    alreadyDefault?: boolean
    alreadyDeafualtModals?: boolean


    onPressAlreadyDefault?: ((val: any) => void) | undefined;

    unit?: boolean
    unitModal?: boolean


    onPressUnitCross?: ((val: any) => void) | undefined;

    changeName?: boolean
    changeNameModal?: boolean

    userName?: boolean
    userNameModal?: boolean

    emailCheck?: boolean
    emailModal?: boolean


    PhoneCheck?: boolean
    PhoneModal?: boolean


    CnicCheck?: boolean
    CnicModal?: boolean


    passwordCheck?: boolean
    passwordModal?: boolean

    getName?: string | any;
    getUserName?: string | any
    getEmail?: string | any
    getPhone?: string | any
    getCnic?: string | any

    currentPassword?: string | any;
    newPassword?: string | any
    confirmPassword?: string | any

    onPressCancelButton?: ((val: any) => void) | undefined;
    onPressConfirm?: ((val: any) => void) | undefined;

}

const ModalComponent: React.FC<Props> = ({
    visible,
    visibleDeled,
    onPressClose,
    onRequestClose,
    onPressHome,
    onPressSmartMeter,
    onPressNewConnectionApplication,
    popUp,
    children,
    canDelete,
    referenceNumber,
    name,
    fatherName,
    cnic,
    phone,
    email,
    refNo,
    tariff,
    meterPhase,
    meterNo,
    subDivsion,
    division,
    address,
    meterType,
    currentStatus,
    onPressAddMeter,
    onPressCancel,
    onPressDeled,
    dropDown,
    visibleModal,
    deleteModal,
    defaultModal,
    onPressDeleteRemove,
    onPressDefault,
    onPressDelete,
    defaultButton,
    deleteButton,
    defaultStyle,
    deleteStyle,
    deleteModals,
    meterInfo,
    onPressCancels,
    onPressDel,
    defaultMeter,
    defaultModals,
    onPressSetAsDefault,
    onPressAlreadyDefault,
    alreadyDefault,
    alreadyDeafualtModals,
    unit,
    unitModal,
    onPressUnitCross,
    changeName,
    changeNameModal,
    userName,
    userNameModal,
    emailCheck,
    emailModal,
    PhoneCheck,
    PhoneModal,
    CnicCheck,
    CnicModal,
    passwordCheck,
    passwordModal,
    getName,
    getUserName,
    getEmail,
    getPhone,
    getCnic,
    meterInformation,
    meterVisible,
    deleteDefaultModal,
    deleteDefaultVisible,
    onPressDefaultButton,
    onPressDeleteButton,
    currentPassword,
    newPassword,
    confirmPassword,
    onPressCancelButton,
    onPressConfirm
}: Props) => {

    const [smartMeter, setSmartMeter] = useState<boolean>(false)
    const [newConnection, setNewConnection] = useState<boolean>(false)

    const smartMeterHandler = () => {
        setSmartMeter(!smartMeter)
        setNewConnection(false)
    }
    const newConnectionHandler = () => {
        setNewConnection(!newConnection)
        setSmartMeter(false)
    }


    return (
        <>
            {
                onPressDeled &&
                <Modal visible={visibleDeled} transparent={true} >
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', marginVertical: 100, marginHorizontal: 20 }}>

                    </View>
                </Modal>

            }
            {
                dropDown && <>
                    <Modal
                        isVisible={visibleModal}
                        transparent={true}
                    >
                        <View style={{
                            backgroundColor: 'white',
                            // marginTop: 110,
                            borderRadius: 5,
                            ...AppStyle.mh40,
                            // marginLeft:10,
                            height: 80,
                            width: 120,

                        }}>
                            <View style={{ alignSelf: 'center', marginTop: 10, marginHorizontal: 20 }}>
                                <View style={{ width: '100%' }}>
                                    <Button label='Set as Default' buttonStyle={[styles.defaultButton, defaultButton]} labelStyle={[styles.defaultText, defaultStyle]} onPress={onPressDefault} />
                                </View>
                                <View style={{ width: '100%' }}>
                                    <Button label='Delete Meter' buttonStyle={[styles.defaultButton, deleteButton]} labelStyle={[styles.defaultText, deleteStyle]} onPress={onPressDelete} />
                                </View>

                                <Modal
                                    visible={deleteModal}
                                    transparent={true}
                                >
                                    <View style={{
                                        backgroundColor: 'white',
                                        marginTop: 270,
                                        ...AppStyle.mh30,
                                    }}>
                                        <View>
                                            <View style={{ marginVertical: 10 }}>
                                                <Image source={Icons.ic_deleteMeterIcon} style={{ alignSelf: 'center', width: 40, height: 50 }} />
                                            </View>
                                            <View style={{}}>
                                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Delete Meter ?</Text>
                                            </View>
                                            <View style={{ alignSelf: 'center' }}>
                                                <Text style={{ fontSize: 12, color: ColorSet.black }}>Are You sure you want to delete this meter?</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: 10, textAlign: 'center' }}>This will delete your meter from the list</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                                            <View style={{ width: '40%' }}>
                                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressDeleteRemove} />
                                            </View>
                                            <View style={{ width: '40%' }}>
                                                <Button label='Delete' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.red, borderRadius: 8 }} />
                                            </View>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        </View>
                    </Modal>
                </>
            }

            {meterInfo &&
                <Modal
                    animationType="fade"
                    transparent={true}
                    isVisible={visible}
                    onRequestClose={() => onRequestClose}

                >
                    <View style={{
                        backgroundColor: 'white', justifyContent: 'center', marginHorizontal: 10, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View style={{ width: '100%', alignItems: 'center', marginVertical: 10 }}>
                            <Text style={{ color: 'black', fontSize: 18 }}>Meter Info</Text>
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Please confirm your connection details.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.user_icon} />
                            </View>
                            <View>
                                <Text style={styles.lable}>Profile</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails} >Name</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{name}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Father Name</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{fatherName}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>CNIC No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{cnic}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Phone</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{phone}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Email</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{email}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_connection} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Connection</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Reference No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{refNo}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Tariff</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{tariff}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Connection Type</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription} >{meterPhase}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_location} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Location</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Sub Division</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{subDivsion}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Division</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{division}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Address</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{address}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_MeterIcon} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Meter</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Meter No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{meterNo}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Meter Type</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{meterType}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Current Status</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{currentStatus}</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 20 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' buttonStyle={{ width: '100%', backgroundColor: ColorSet.darkGrey, borderRadius: 8 }} onPress={onPressCancel} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Confirm' buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressAddMeter} />
                            </View>
                        </View>
                    </View>

                </Modal>
            }

            {meterInformation &&
                <Modal
                    animationType="fade"
                    transparent={true}
                    isVisible={meterVisible}
                    onRequestClose={() => onRequestClose}

                >
                    <View style={{
                        backgroundColor: 'white', justifyContent: 'center', marginHorizontal: 10, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View style={{ width: '100%', alignItems: 'center', marginVertical: 10 }}>
                            <Text style={{ color: 'black', fontSize: 18 }}>Meter Info</Text>
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Please confirm your connection details.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.user_icon} />
                            </View>
                            <View>
                                <Text style={styles.lable}>Profile</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails} >Name</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{name}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Father Name</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{fatherName}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>CNIC No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{cnic}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Phone</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{phone}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Email</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{email}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_connection} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Connection</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Reference No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{refNo}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Tariff</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{tariff}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Connection Type</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription} >{meterPhase}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_location} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Location</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Sub Division</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{subDivsion}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Division</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{division}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Address</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{address}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
                            <View style={{ marginRight: 2, paddingTop: 4 }}>
                                <Image style={{ width: 20, height: 14, resizeMode: 'contain', tintColor: ColorSet.blueColor }} source={Icons.ic_MeterIcon} />
                            </View>
                            <View  >
                                <Text style={styles.lable}>Meter</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Meter No.</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{meterNo}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Meter Type</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{meterType}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDetails}>Current Status</Text>
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.meterDescription}>{currentStatus}</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 20 }}>
                            <View style={{ width: '100%' }}>
                                <Button label='Cancel' buttonStyle={{ width: '100%', backgroundColor: ColorSet.MidGray, borderRadius: 8 }} onPress={onPressCancel} />
                            </View>
                        </View>
                    </View>

                </Modal>
            }
            {
                deleteDefaultModal &&
                <Modal
                    animationType="fade"
                    transparent={true}
                    isVisible={deleteDefaultVisible}
                    onRequestClose={() => onRequestClose}
                >
                    <View style={{
                        backgroundColor: 'white', justifyContent: 'center', marginHorizontal: 10, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse', marginTop: 10, width: '90%', marginLeft: 10, marginHorizontal: 20 }} onPress={onPressUnitCross}>
                            <Image source={Icons.ic_close_icon} style={{ resizeMode: 'contain', width: 15, height: 15, padding: 10 }} />
                        </TouchableOpacity>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center', fontWeight: '600' }}>Meter Options</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, textAlign: 'center' }}>Select options for meter from the following</Text>
                        </View>

                        {/* <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
                            <Button leftIconSource={Icons.ic_starGreyIcon} leftIconStyle={{ tintColor: ColorSet.white }} label='Set as Default' buttonStyle={{ width: '100%', backgroundColor: ColorSet.blue, borderRadius: 8 }} onPress={onPressCancel} />
                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', marginVertical: 20 }}>
                            <Button leftIconSource={Icons.ic_del_icon} leftIconStyle={{ tintColor: ColorSet.white }} label='Delete this meter' buttonStyle={{ width: '100%', backgroundColor: ColorSet.red, borderRadius: 8 }} onPress={onPressAddMeter} />
                        </View> */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
                            <TouchableOpacity
                                onPress={onPressCancel}
                                style={[styles.uploadButton]}>
                                <Image style={styles.upload} source={Icons.ic_starGreyIcon} />
                                <Text style={AppStyle.pt5}>Set as Default</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={onPressAddMeter}
                                style={[styles.uploadButton]}>
                                <Image style={styles.upload} source={Icons.ic_del_icon} />
                                <Text style={AppStyle.pt5}>Delete this meter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
          
            {
                deleteModal &&
                <Modal
                    isVisible={deleteModals}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>
                            <View style={{ marginVertical: 10 }}>
                                <Image source={Icons.ic_deleteMeterIcon} style={{ alignSelf: 'center', width: 40, height: 50 }} />
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Delete Meter?</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black }}>Are you sure you want to delete this meter?</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 10, textAlign: 'center' }}>This will delete your meter from the list.</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Delete' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.red, borderRadius: 8 }} onPress={onPressDel} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }


            {
                defaultMeter &&
                <Modal
                    isVisible={defaultModals}
                    transparent={true}
                    animationType="slide"
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>
                            <View style={{ marginVertical: 10 }}>
                                <Image source={Icons.ic_normal_meter} style={{ alignSelf: 'center', width: 40, height: 50, resizeMode: 'contain' }} />
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Make Default</Text>
                            </View>
                            <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to make this meter as a default meter?</Text>
                            </View>
                            {/* <View>
                                <Text style={{ fontSize: 10, textAlign: 'center' }}>This will delete your meter from the list</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Confirm' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }
            {

                alreadyDefault &&

                <Modal
                    isVisible={alreadyDeafualtModals}
                // transparent={true}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>
                            <View style={{ marginVertical: 10 }}>
                                <Image source={Icons.ic_normal_meter} style={{ alignSelf: 'center', width: 40, height: 50, resizeMode: 'contain' }} />
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Already Default</Text>
                            </View>
                            <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>This meter is already default.</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '100%' }}>
                                <Button label='Ok' labelStyle={{ color: ColorSet.grey, borderRadius: 20 }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressAlreadyDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }
            {
                changeName &&
                < Modal
                    isVisible={changeNameModal}
                    transparent={true}
                // animationInTiming={10}
                // animationOutTiming={10}
                // animationIn={'bounce'}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        marginBottom: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>
                            <View style={{ marginVertical: 10, alignSelf: 'center' }}>
                                <Image source={Icons.logout_icon} style={{ width: 50, height: 50 }} />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ color: ColorSet.black, fontWeight: '600', fontSize: 15 }}>Come Back Soon</Text>
                                <Text style={{ fontSize: 10 }}>Are you sure you want to signOut?</Text>
                            </View>

                        </View>


                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '47%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '47%' }}>
                                <Button label='Sign out' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            {
                userName &&
                < Modal
                    isVisible={userNameModal}
                    transparent={true}
                // animationInTiming={10}
                // animationOutTiming={10}
                // animationIn={'bounce'}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        marginBottom: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Change UserName</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    leftLabelIcon={Icons.user_icon}
                                    lable='User Name'
                                    image={true}
                                    setTextValue={getUserName}
                                    // keyboardType='numeric'
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to set this meter default ?</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Save' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            {
                emailCheck &&
                < Modal
                    isVisible={emailModal}
                    transparent={true}
                // animationInTiming={10}
                // animationOutTiming={10}
                // animationIn={'bounce'}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        marginBottom: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Change Email</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    leftLabelIcon={Icons.email_icon}
                                    lable='Email'
                                    image={true}
                                    setTextValue={getEmail}
                                    // keyboardType='numeric'
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to set this meter default ?</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Save' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            {
                PhoneCheck &&
                < Modal
                    isVisible={PhoneModal}
                    transparent={true}
                // animationInTiming={10}
                // animationOutTiming={10}
                // animationIn={'bounce'}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        marginBottom: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Change Phone</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    leftLabelIcon={Icons.phone_icon}
                                    lable='Phone'
                                    setTextValue={getPhone}
                                    image={true}
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to set this meter default ?</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Save' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            {
                CnicCheck &&
                < Modal
                    isVisible={CnicModal}
                    transparent={true}
                // animationInTiming={10}
                // animationOutTiming={10}
                // animationIn={'bounce'}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        marginBottom: 200,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Change CNIC</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Input
                                    leftLabelIcon={Icons.cnic_icon}
                                    lable='CNIC No.'
                                    image={true}
                                    setTextValue={getCnic}
                                    // keyboardType='numeric'
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to set this meter default ?</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '40%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancels} />
                            </View>
                            <View style={{ width: '40%' }}>
                                <Button label='Save' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressSetAsDefault} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }

            {
                passwordCheck &&
                < Modal
                    isVisible={passwordModal}
                    transparent={true}
                >
                    <View style={{
                        backgroundColor: 'white',
                        ...AppStyle.mh10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5
                    }}>
                        <View>

                            <View style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 20, color: ColorSet.black, textAlign: 'center' }}>Change Password</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <PasswordInput
                                    passwordIconSource={Icons.password_icon}
                                    lable='Current Password'
                                    image={true}
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                    // value={currentPassword}
                                    passwordSecure={true}
                                    setTextValue={currentPassword}
                                />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <PasswordInput
                                    passwordIconSource={Icons.password_icon}
                                    lable='New Password'
                                    image={true}
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                    isSecurePassword={true}
                                    // value={newPassword}
                                    setTextValue={newPassword}
                                    passwordSecure={true}
                                />
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <PasswordInput
                                    passwordIconSource={Icons.password_icon}
                                    lable='Confirm Password'
                                    image={true}
                                    labelStyle={styles.identiticalInput}
                                    inputStyle={styles.identityInput}
                                    // value={confirmPassword}
                                    passwordSecure={true}
                                    setTextValue={confirmPassword}
                                />
                            </View>
                            {/* <View style={{ alignSelf: 'center', width: '90%' }}>
                                <Text style={{ fontSize: 12, color: ColorSet.black, textAlign: 'center' }}>Are you sure you want to set this meter default ?</Text>
                            </View> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', marginVertical: 30 }}>
                            <View style={{ width: '47%' }}>
                                <Button label='Cancel' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.grayLight, borderRadius: 8 }} onPress={onPressCancelButton} />
                            </View>
                            <View style={{ width: '47%' }}>
                                <Button label='Confirm' labelStyle={{ color: ColorSet.grey }} buttonStyle={{ width: '100%', backgroundColor: ColorSet.blueColor, borderRadius: 8 }} onPress={onPressConfirm} />
                            </View>
                        </View>
                    </View>
                </Modal>
            }
        </>
    );
};

export default ModalComponent;

const styles = StyleSheet.create({
    crossIcon: {
        width: 10,
        height: 10,
        resizeMode: 'contain',
        tintColor: ColorSet.black,
    },
    closeBtn: {
        ...AppStyle.p5,
        position: 'absolute',
        right: 10,
        top: 15,
        backgroundColor: ColorSet.red
    },
    centeredView: {
        backgroundColor: ColorSet.white,
        height: 200,
        marginTop: 270,
        ...AppStyle.mh10,

    },
    centeredViewForDelete: {
        flex: 1,

    },
    modalView: {
        borderRadius: 3,
        width: screenWidth.width20,
    },
    modelViewForDelete: {
        backgroundColor: ColorSet.white,
        borderRadius: 3,
        width: screenWidth.width100,
        height: screenHeight.height100,
    },
    modalContainer: {},
    modalSubView: {
        ...AppStyle.pt10,
        justifyContent: 'space-between',
    },
    modalTitle: {
        color: ColorSet.theme,
        // fontFamily: FamilySet.semiBold,
    },
    modalTitleContainer: {
        borderBottomColor: ColorSet.softGraySecondary,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingBottom: 10,
    },
    modalContentContainer: {},
    buttonCancel: {
        width: screenWidth.width40 - 3,
        backgroundColor: ColorSet.green,
    },
    buttonDelete: {
        width: screenWidth.width40 - 3,
        backgroundColor: ColorSet.redcolor,
    },
    topHeading: {
        color: ColorSet.black,
        fontSize: 24,
        // fontFamily: FamilySet.semiBold,
    },
    labelOne: {
        color: ColorSet.redcolor,
        fontSize: 14,
        marginTop: 10,
    },
    labelSecond: {
        marginTop: 10,
        color: ColorSet.black,
        fontSize: 14,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: -5,
        marginVertical: 20,
    },
    lable: {
        fontSize: 14,
        color: ColorSet.blueColor
        // fontFamily: FamilySet.regular,
    },
    meterDetails: {
        fontSize: 12, color: ColorSet.black
    },
    meterDescription: {
        fontSize: 12,
    },
    defaultButton: {
        backgroundColor: ColorSet.blueColor,
        padding: 7,
        width: 90,
        height: 30,
        marginVertical: 2
    },
    defaultText: {
        fontSize: 8,
        color: ColorSet.black
    },
    identiticalInput: {
        color: ColorSet.black,
        paddingBottom: 5,
        tintColor: ColorSet.black,
        fontSize: 12,
        alignItems: 'center'

    },
    identityInput: {
        width: '90%',
        backgroundColor: ColorSet.grey,
        borderRadius: 5,
        alignItems: 'center'
    },
    uploadButton: {
        width: '46%',
        backgroundColor: ColorSet.white,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 15,
        alignItems: 'center',
        // shadowColor: ColorSet.shadow,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
        borderColor: ColorSet.theme,
        borderWidth: 1.5,
    },
    uploadButtonMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    upload: {
        width: 60,
        height: 45,
        resizeMode: 'contain',
        tintColor: ColorSet.theme,
    },
});
