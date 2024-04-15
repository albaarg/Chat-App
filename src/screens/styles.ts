import {StyleSheet} from 'react-native';
import theme from '../services/theme';

export const styles = StyleSheet.create({
  //Chat
  boxTime: {
    alignSelf: 'flex-end',
  },
  textTime: {
    color: 'grey',
  },

  //Chat List
  box: {
    backgroundColor: theme.color.white,
    flex: 1,
  },

  //Login
  loginBox: {
    backgroundColor: theme.color.gray5,
    flex: 1,
  },
  boxImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHello: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  textSignIn: {
    fontSize: 20,
    color: theme.color.gray,
  },
  boxEmail: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: theme.color.white,
  },
  boxPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: theme.color.white,
  },
  inputPassword: {
    flex: 1,
  },
  boxIconsVissiblePassword: {
    marginRight: 10,
  },
  boxError: {
    margin: 10,
  },
  textError: {
    color: theme.color.red,
    margin: 3,
  },
  textForgot: {
    fontSize: 14,
    color: theme.color.gray,
    marginTop: 20,
  },
  textHaveAccount: {
    fontSize: 14,
    color: theme.color.gray,
    marginTop: 16,
  },

  //User Profile
  boxUserProfile: {
    flex: 1,
  },
});
