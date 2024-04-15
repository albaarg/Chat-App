import React from 'react';
import { View, Text, Pressable,TouchableOpacity } from 'react-native';
import { navigationRef } from '../navigation/NavigationProvider';
import { CustomHeaderProps } from '../interfaces/types';
import VectorImage from 'react-native-vector-image';
import { styles } from './styles';

const CustomHeader = ({
  contact,
  headerRight,
  onSettingsPress,
  showSettingsIcon,
}: CustomHeaderProps & {
  headerRight?: React.ReactNode;
  onSettingsPress?: () => void;
  showSettingsIcon?: boolean;
}) => {
  return (
    <View
      style={styles.customHeaderBox}>
      <Pressable onPress={() => navigationRef.goBack()} style={styles.pressable}>
        <VectorImage
          source={require('../../assets/arrow-back.svg')}
          style={{
            tintColor: 'white',
            width: 18,
            height: 18,
          }}
        />
      </Pressable>
      <View
        style={styles.headerBox}>
        <Text
          style={styles.contactText}>
          {contact}
        </Text>
      </View>

      <View style={styles.headerRight}>{headerRight}</View>
      {showSettingsIcon && (
       <View style={styles.onPressBox}>
         <TouchableOpacity onPress={onSettingsPress}>
          <VectorImage
            source={require('../../assets/settings.svg')}
            style={{
              tintColor: 'white',
              width: 22,
              height: 22,
            }}
          />
        </TouchableOpacity>
       </View>
      )}
    </View>
  );
};

export default CustomHeader;
