import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { View } from 'react-native';
import ChatScreen from '../screens/Chat';
import ChatListScreen from '../screens/ChatList';
import LoginScreen from '../screens/Login';
import UserProfileScreen from '../screens/UserProfile';
import CustomHeader from '../components/CustomHeader';
import VectorImage from 'react-native-vector-image';

export type RootStackParamList = {
  Chat: {id: number; contact: string};
  ChatList: undefined;
  Login: undefined;
  UserProfile: undefined;
};

export const navigationRef = createNavigationContainerRef();

const StackHeaderStyle: StackNavigationOptions = {
  header: () => <CustomHeader />,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleContainerStyle: {
    alignItems: 'center',
  },
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  animationEnabled: true,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: true,
};

const Stack = createStackNavigator();

const NavigationProvider: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={StackHeaderStyle}>
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => ({
              header: () => (
                <CustomHeader
                  contact={(route.params as {contact: string}).contact}
                  headerRight={
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 100,
                        justifyContent: 'space-between',
                        marginRight: 10,
                      }}>
                      <VectorImage
                        source={require('../../assets/video.svg')}
                        style={{
                          tintColor: 'white',
                          width: 22,
                          height: 22,
                        }}
                      />
                      <VectorImage
                        source={require('../../assets/phone.svg')}
                        style={{
                          tintColor: 'white',
                          width: 22,
                          height: 22,
                        }}
                      />
                      <VectorImage
                        source={require('../../assets/dots-vertical.svg')}
                        style={{
                          tintColor: 'white',
                          width: 22,
                          height: 22,
                        }}
                      />
                    </View>
                  }
                />
              ),
            })}
          />
          <Stack.Screen
            name="ChatList"
            component={ChatListScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default NavigationProvider;
