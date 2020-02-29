import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #fff;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #eee;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;
  font-size: 14px;
  line-height: 18px;
  color: #999;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background-color: #eee;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  margin-top: 2px;
  font-size: 13px;
  color: #666;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 50,
  color: '#7159c1',
})`
  margin-top: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
