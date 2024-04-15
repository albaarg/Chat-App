import React from 'react';
import { View } from 'react-native';
import Settings from '../components/Settings';
import { userProfileMock } from '../services/mocks/profileMock';
import { styles } from './styles';

const UserProfileScreen = () => {
  return (
    <View style={styles.boxUserProfile}>
    <Settings item={userProfileMock.profile} />
  </View>
  );
};

export default UserProfileScreen;
