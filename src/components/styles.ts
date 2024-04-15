import {StyleSheet} from 'react-native';
import theme from '../services/theme';

export const styles = StyleSheet.create({
  //Chat Item
  container: {
    marginTop: 10,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: theme.color.white,
  },
  box: {
    flexDirection: 'row',
  },
  chatBox: {
    backgroundColor: theme.color.gray2,
    borderRadius: 50,
    width: 40,
    height: 40,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    justifyContent: 'center',
  },
  textContact: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textMessage: {
    fontSize: 15,
    color: theme.color.gray3,
  },
  boxMessageTime: {
    justifyContent: 'center',
    marginBottom: 24,
    marginRight: 2,
  },
  textMessageTime: {
    fontSize: 12,
    color: '#aeb8b1',
  },

  //Custom Button
  customButtonBox: {
    alignItems: 'center',
    width: 200,
    marginTop: 60,
  },
  buttonStyle: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignIn: {
    fontSize: 14,
    color: theme.color.white,
    fontWeight: 'bold',
  },

  //Custom Header
  customHeaderBox: {
    backgroundColor: theme.color.ocean,
    height: 90,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  pressable: {
    marginTop: 58,
  },
  headerBox: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: -10,
    marginLeft: 20,
  },
  contactText: {
    fontSize: 20,
    color: theme.color.gray1,
    fontWeight: 'bold',
    marginTop: 65,
    textAlign: 'center',
  },
  headerRight: {
    marginTop: 55,
  },
  onPressBox: {
    marginTop: 55,
    marginRight: 10,
  },

  //Edit Name
  editNameBox: {
    width: 250,
    height: 150,
    alignItems: 'center',
  },
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    paddingStart: 30,
    width: '100%',
    height: 50,
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: theme.color.gray5,
  },
  boxButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: theme.color.blue,
    width: '50%',
    height: 40,
    borderRadius: 25,
    padding: 10,
  },
  pressableSave: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSave: {
    color: theme.color.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Input Box
  inputBox: {
    flexDirection: 'row',
    margin: 12,
    marginBottom: 28,
  },
  inputStyles: {
    flexDirection: 'row',
    backgroundColor: theme.color.gray2,
    padding: 12,
    borderRadius: 50,
    marginRight: 6,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  inputEditName: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonSendBox: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Settings
  boxSettings: {
    flex: 1,
    backgroundColor: theme.color.gray5,
  },
  settingsBoxStyle: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  settingsBox: {
    marginBottom: 30,
  },
  boxAvatar: {
    backgroundColor: theme.color.white,
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 200 / 2,
  },
  account: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  boxButtonEdit: {
    backgroundColor: theme.color.ocean,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
  profileBox: {
    marginLeft: 20,
  },
  accountBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  boxIconAccount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'grey',
    fontSize: 18,
  },
  userInformation: {
    fontSize: 16,
    color: theme.color.gray1,
  },
  phoneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  modalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    backgroundColor: theme.color.sky,
    padding: 20,
    borderRadius: 10,
  },
  iconCloseBox: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
