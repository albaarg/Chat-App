import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from "./styles";
import theme from '../services/theme';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationProvider';
import { ChatMessageProps, SpecificChatProps } from '../interfaces/types';
import { specificChatsMock } from '../services/mocks/specificChat';
import InputBox from '../components/InputBox';
import { getMessages } from '../services/storage';

const ChatScreen = () => {
  const [messages, setMessages] = React.useState<
    Array<{sender: string; content: string; time: string}>
  >([]);
  const route = useRoute<RouteProp<RootStackParamList, 'Chat'>>();

  const chat: SpecificChatProps = specificChatsMock.specificChats.find(
    chat => chat.contact === route.params.contact,
  ) || {contact: '', messages: []};

  React.useEffect(() => {
    const fetchMessages = async () => {
      const storedMessages = await getMessages(chat.contact);
      setMessages(storedMessages);
    };
    
    fetchMessages();
  }, [route.params.contact]);
  const renderItem = ({item}: {item: ChatMessageProps}) => {
    const isMyMessage = item.sender === 'You';

    return (
      <View style={{padding: 10}}>
        <View
          style={{
            backgroundColor: isMyMessage ? theme.color.sky : theme.color.gray6,
            marginRight: isMyMessage ? 0 : 50,
            marginLeft: isMyMessage ? 50 : 0,
            borderRadius: 5,
            padding: 10,
          }}>
          <Text>{item.content}</Text>
          <View style={styles.boxTime}>
            <Text style={styles.textTime}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <InputBox setMessages={setMessages} contact={chat.contact} />
    </>
  );
};

export default ChatScreen;
