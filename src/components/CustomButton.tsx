import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import theme from '../services/theme';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/NavigationProvider';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type CustomButtonProps = {
  onPress: () => boolean;
};
const CustomButton: React.FC<CustomButtonProps> = ( { onPress } ) => {
  const navigation = useNavigation<NavigationProp>();
  const buttonNavigate = () => {
    if (onPress()) {
      navigation.navigate('ChatList');
    }
  };

  return (
    <TouchableOpacity
      style={styles.customButtonBox}
      onPress={buttonNavigate}>
      <LinearGradient
        colors={[theme.color.sky, theme.color.light]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.buttonStyle}>
        <Text style={styles.textSignIn}>
          SIGN IN
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
