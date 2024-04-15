import AsyncStorage from '@react-native-async-storage/async-storage';

export const sendMessage = async (
  contact: string,
  newMessage: {
    sender: string;
    content: string;
    time: string;
  },
) => {
  const key = 'messages_' + contact.replace(/\s/g, '').toLowerCase();
  const storedMessages = await AsyncStorage.getItem(key);
  const messagesFromStorage = storedMessages ? JSON.parse(storedMessages) : [];
  messagesFromStorage.push(newMessage);
  await AsyncStorage.setItem(key, JSON.stringify(messagesFromStorage));
  return messagesFromStorage;
};
export const getMessages = async (contact: string) => {
  const key = 'messages_' + contact.replace(/\s/g, '').toLowerCase();
  const storedMessages = await AsyncStorage.getItem(key);
  return storedMessages ? JSON.parse(storedMessages) : [];
};

export const storeMessages = async (
  contact: string,
  messages: Array<{sender: string; content: string; time: string}>,
) => {
  const key = 'messages_' + contact.replace(/\s/g, '').toLowerCase();
  await AsyncStorage.setItem(key, JSON.stringify(messages));
};

export const storeImage = async (contact: string, uri: string) => {
  const key = 'image_' + contact.replace(/\s/g, '').toLowerCase();
  await AsyncStorage.setItem(key, uri);
};

export const getImage = async (contact: string) => {
  const key = 'image_' + contact.replace(/\s/g, '').toLowerCase();
  const storedImageUri = await AsyncStorage.getItem(key);
  return storedImageUri || null;
};
