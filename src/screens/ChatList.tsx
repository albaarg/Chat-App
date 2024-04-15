import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ChatItem from '../components/ChatItem';
import { chatsMock} from '../services/mocks/chatsMock';
import { RootStackParamList } from '../navigation/NavigationProvider';
import CustomHeader from '../components/CustomHeader';
import { styles } from './styles';

const ChatListScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Chat'>>();

  const enterChat = (id: number, contact: string) => {
    navigation.navigate('Chat', {id, contact});
  };

  return (
    <View style={styles.box}>
       <CustomHeader
        onSettingsPress={() => navigation.navigate('UserProfile')}
        showSettingsIcon={true}
      />
      <FlatList
        data={chatsMock.chats || []}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => enterChat(item.id, item.contact)}>
            <ChatItem chatRoom={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChatListScreen;
