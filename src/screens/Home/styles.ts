import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.secondary}
`;