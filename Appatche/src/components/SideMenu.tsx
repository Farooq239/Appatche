import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Platform, Share, Alert, } from 'react-native';

import { DrawerContentScrollView, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
import Animated, { Adaptable, Extrapolate } from 'react-native-reanimated';
import { screenWidth } from '../styles/ScreenSize';
import { Icons } from '../constants/icon';
import AppStyle from '../styles/AppStyle';
import { ColorSet } from '../styles/Color';
import ModalComponent from './ModalComponent';
import HeadingHeader from './HeadingHeader';

const SidebarMenu: React.FC<{ navigation: any, props: any }> = ({ navigation, props }) => {

    const [state, setState] = useState<boolean>(false)

    const progress = useDrawerProgress();

    const width = Animated.interpolateNode(progress as Adaptable<number>, {
        inputRange: [0, 1],
        outputRange: [1, screenWidth.width100],
        extrapolate: Extrapolate.CLAMP,
    });

    const onNavigate = (route: string) => {
        navigation.navigate(route)
    }

    const onPressLogout = () => {
        navigation.replace("Auth")
    }

    const onPressLogoutButton = () => {
        navigation.toggleDrawer()
        setState(true)
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            title: 'App link',
            message:'AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
            url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
        navigation.toggleDrawer()
      };

    return (
        <View style={styles.sideMenuContainer}>
            {/* <ScrollView> */}
            {/* <View style={{ backgroundColor: '#ADD8E6', width: '100%', padding: 5 }}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={Icons.user_icon}
                    />
                    <Text style={styles.name}>C/O MOUNIM SAEED</Text>
                    <Text style={{ color: '#0047AB', fontSize: 12, marginTop: 5 }}>1 Meters</Text>
                    <Text style={{ width: '100%', fontSize: 12, marginTop: 5 }}>SDO-11 METRO MDA BUS STATION</Text>
                </View>
            </View> */}
    <HeadingHeader leftIconSource={Icons.ic_back} headingCheck={true} heading='Menu' onPressLeft={() => navigation.goBack()} />
   
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerItemContainer}>
                    {/* <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter,]}>
                                <Image style={styles.menuIcon} source={Icons.smart_monitoring} />
                                <Text style={{ color: color, width: '50%' }}>Smart Monitoring</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                    /> */}
                    <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.camera_icons} />
                                <Text style={{ color: ColorSet.black, width: '50%', fontWeight: '500' }}>DashBoard</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                        onPress={() => onNavigate("MainMenu")}
                    />
                    {/* <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.email_icon} />

                                <Text style={{ color: color ,width : '50%'}}> New Connection</Text>
                            </View>
                        }
                        style={{width : '100%'}}
                    /> */}
                    {/* <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.power_outage} />

                                <Text style={{ color: color, width: '50%' }}>Power Outage</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                    /> */}
                    <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter, ]}>
                                <Image style={styles.menuIcon} source={Icons.camera_icons} />

                                <Text style={{ color: ColorSet.black, width: '50%',fontWeight: '500' }}>Duplicate Bill</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                        onPress={() => onNavigate("DuplicateBill")}
                    />
                    {/* <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.load_management} />

                                <Text style={{ color: color, width: '50%' }}>Load Schedule Managment</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                    /> */}
                    {/* <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.customer_service} />

                                <Text style={{ color: color, width: '50%' }}>Customer Services</Text>
                            </View>
                        }
                        style={{ width: '100%' }}
                    /> */}
                    <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.drop_down} />
                                <Text style={{ color:ColorSet.black, width: '50%',fontWeight: '500' }}>Invite Friend</Text>
                            </View>
                        }
                        // onPress={() => onNavigate("InviteFriend")}
                        onPress={() => onShare()}
                        style={{ width: '100%' }}
                    />
                    <DrawerItem
                        label={({ color }) =>
                            <View style={[AppStyle.row, AppStyle.aiCenter]}>
                                <Image style={styles.menuIcon} source={Icons.sign_out_icon} />
                                <Text style={{ color: ColorSet.black, width: '50%', fontWeight: '500' }}>Sign out</Text>
                            </View>
                        }
                        onPress={() => onPressLogoutButton()}
                        style={{ width: '100%',marginTop:360}}
                    />

                </View>
                <View>
                    <ModalComponent changeName={true} changeNameModal={state} onPressCancels={() => setState(false)} onPressSetAsDefault={() => onPressLogout()} />
                </View>

                <View>

                </View>
            </DrawerContentScrollView >
            {/* </ScrollView> */}
        </View >
    );
};

export default SidebarMenu;

const styles = StyleSheet.create({
    closeMenuMain: {
        backgroundColor: 'transparent',
        alignItems: 'flex-end',
        paddingRight: 30,
        paddingTop: 30,
        marginTop: Platform.OS === 'ios' ? 30 : 0
    },
    crossBtn: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ColorSet.theme,
        borderRadius: 100,
    },
    crossIcon: {
        width: 10,
        height: 10,
        resizeMode: 'contain'
    },
    menuIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 15,
        // tintColor: ColorSet.grayMedium
    },
    profile: {
        width: screenWidth.width30,
        height: screenWidth.width30,
        borderRadius: 100,
    },
    sideMenuContainer: {
        flex: 1,
        backgroundColor: ColorSet.white,
    },
    profileHeader: {
        backgroundColor: ColorSet.white,
        paddingHorizontal: 10,
    },
    userProfile: {
        width: screenWidth.width30,
        height: screenWidth.width30,
        borderRadius: 100,
        backgroundColor: ColorSet.white,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: ColorSet.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.36,
        shadowRadius: 2.68,
        elevation: 11,
    },
    drawerItemContainer: {
        width: screenWidth.width100,
        marginTop: 20
    },
    drawerItem: {
        // ...Fonts.size.normal,
        // fontFamily: FamilySet.bold,
        tintColor: ColorSet.grayMedium
    },
    logout: {
        height: 50,
        width: "60%",
        paddingHorizontal: 20,
        borderRadius: 50,
        backgroundColor: ColorSet.theme,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowColor: ColorSet.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    logoutMain: {
        paddingVertical: 30,
        paddingLeft: 20,
        alignItems: 'flex-start',
    },
    logoutText: {
        // ...Fonts.size.normal,
        // fontFamily: FamilySet.bold,
        color: ColorSet.white
    },
    rightArrow: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    userName: {
        // fontFamily: FamilySet.bold,
        marginVertical: 10
    },
    email: {
        fontSize: 14,
        // fontFamily: FamilySet.medium,
        color: ColorSet.grayMedium
    },
    menu: {
        flex: 1,
        backgroundColor: '#F2F1F1',
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20,
        padding: 10
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1,
    },
    name: {
        top: 5,
        width: '100%',
        color: "#363636",
        fontWeight: '600'
    },
    item: {
        fontSize: 14,
        fontWeight: '600',
        width: '50%',
        marginTop: 15,
    },
});
