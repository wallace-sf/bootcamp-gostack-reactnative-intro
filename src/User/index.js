import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function User() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

User.navigationOptions = {
  title: 'Olá mundo!',
};
