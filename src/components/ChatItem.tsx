import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { ChatProps } from '../interfaces/types';
import VectorImage from 'react-native-vector-image';
import { styles } from './styles';

const ChatItem = ( {chatRoom} : ChatProps ) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.containerView}>
        <View style={styles.box}>
          <View
            style={styles.chatBox}>
            <VectorImage
              source={require('../../assets/account.svg')}
              style={{
                tintColor: '#8f8e8b',
                width: 26,
                height: 26,
              }}
            />
          </View>
          <View style={styles.contact}>
            <Text style={styles.textContact}>
              {chatRoom.contact}
            </Text>
            <Text style={styles.textMessage}>
              {chatRoom.lastMessage}
            </Text>
          </View>
        </View>
        <View
          style={styles.boxMessageTime}>
          <Text style={styles.textMessageTime}>
            {chatRoom.lastMessageTime}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatItem;
