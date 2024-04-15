import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import VectorImage from 'react-native-vector-image';
import CustomButton from '../components/CustomButton';
import { USER_EMAIL, USER_PASSWORD } from '../services/credentials';
import { styles } from './styles';

const LoginScreen = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);

  const validateInput = () => {
    if (email !== USER_EMAIL || password !== USER_PASSWORD) {
      setPasswordError('Email or password invalid.');
      return false;
    }

    setEmailError('');
    setPasswordError('');
    return true;
  };

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScrollView style={styles.loginBox}>
      <View style={styles.boxImage}>
        <VectorImage source={require('../../assets/waves.svg')} />
        <Text style={styles.textHello}>Hello</Text>
        <Text style={styles.textSignIn}>Sign in to your account</Text>
        <TextInput
          placeholder="jhon@gmail.com"
          onChangeText={text => {
            setEmail(text);
            setEmailError('');
          }}
          style={styles.boxEmail}
        />
        {emailError && (
          <Text style={styles.textError}>{emailError}</Text>
        )}
        <View style={styles.boxPassword}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            spellCheck={false}
            onChangeText={text => {
              setPassword(text);
              setPasswordError('');
            }}
            style={styles.inputPassword}
          />
          <TouchableOpacity
            onPress={showPassword}
            style={styles.boxIconsVissiblePassword}>
            {isPasswordVisible ? (
              <VectorImage
                source={require('../../assets/eye-on.svg')}
                style={{
                  tintColor: '#34434D',
                  width: 22,
                  height: 22,
                }}
              />
            ) : (
              <VectorImage
                source={require('../../assets/eye-off.svg')}
                style={{
                  tintColor: '#34434D',
                  width: 22,
                  height: 22,
                }}
              />
            )}
          </TouchableOpacity>
        </View>

        {passwordError && (
          <View style={styles.boxError}>
            <Text style={styles.textError}>{passwordError}</Text>
          </View>
        )}
        {emailError && !passwordError && (
          <Text style={styles.textError}>{emailError}</Text>
        )}
        <Text style={styles.textForgot}>Forgot your password?</Text>
        <CustomButton onPress={validateInput} />
        <Text style={styles.textHaveAccount}>Don't have an account?</Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
